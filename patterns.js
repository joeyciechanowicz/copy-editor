module.exports = [
  {
    match: /hello/,
    transform: (contents, match) => {
      console.log("matched", contents, match);
      return "world";
    },
  },
];
