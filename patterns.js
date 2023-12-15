/*
1	32	881,000,000.00 ISK	Perimeter - Tranquility Trading Center	2d 18h 15m 31s
System	1	884,700,000.00 ISK	Jita IV - Moon 4 - Caldari Navy Assembly Plant	89d 23h 58m 53s
Station	17,950.00 ISK	1	Ikuchi VI - Moon 15 - Ytiri Storage	78d 7h 41m 44s

872990238.41

<color=white>880,000,000.00 ISK

world
*/

module.exports = [
  {
    match: /<color=white>(?<price>[0-9,.]+) ISK/,
    transform: (contents, match) => {
      const unformattedPrice = match.groups.price;
      const price = parseFloat(unformattedPrice.replace(/,/g, ''));
      return price;
    }
  },
  {
    match: /(\d+|System|Station)\s+(\d+\s+)?(?<price>[0-9,.]+) ISK/,
    transform: (contents, match) => {
      const unformattedPrice = match.groups.price;
      const price = parseFloat(unformattedPrice.replace(/,/g, ''));
      return price;
    },
  },
];
