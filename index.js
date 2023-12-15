const ncp = require("copy-paste");
const patterns = require("./patterns");

const WATCH_FREQ = 25;

const watch = () => {
  ncp.paste((err, contents) => {
    if (err) {
      console.log("Error getting clipboard", err);

      setTimeout(watch, WATCH_FREQ);
      return;
    }

    for (const p of patterns) {
      const res = p.match.exec(contents);
      if (res) {
        const transformed = p.transform(contents, res);
        ncp.copy(transformed, (err) => {
          if (err) {
            console.log("Error pasting to the clipboard", err);
          }

          setTimeout(watch, WATCH_FREQ);
        });
        break;
      }
    }

    setTimeout(watch, WATCH_FREQ);
  });
};

watch();
