const posts = [
  {
    poster_path:
      "https://image.tmdb.org/t/p/w500/8UlWHLMpgZm9bx6QYh0NFoq67TZ.jpg",
    release_date: "2020-12-16",
    title: "Wonder Woman 1984",
    cast: [
      "Gal Gadot",
      "Pedro Pascal",
      "Chris Pine",
      "Kristen Wiig",
      "Robin Wright",
    ],
  },
  {
    poster_path:
      "https://image.tmdb.org/t/p/w500/xnopI5Xtky18MPhK40cZAGAOVeV.jpg",
    release_date: "2019-03-29",
    title: "Shazam!",
    cast: [
      "Zachary Levi",
      "Asher Angel",
      "Jack Grazer",
      "Mark Strong",
      "Grace Fulton",
    ],
  },
  {
    poster_path:
      "https://image.tmdb.org/t/p/w500/5Kg76ldv7VxeX9YlcQXiowHgdX6.jpg",
    release_date: "2018-12-07",
    title: "Aquaman",
    cast: [
      "Jason Momoa",
      "Amber Heard",
      "Patrick Wilson",
      "Nicole Kidman",
      "Willem Dafoe",
    ],
  },
  {
    poster_path:
      "https://image.tmdb.org/t/p/w500/eifGNCSDuxJeS1loAXil5bIGgvC.jpg",
    release_date: "2017-11-15",
    title: "Justice League",
    cast: [
      "Gal Gadot",
      "Ben Affleck",
      "Henry Cavill",
      "Jason Momoa",
      "Ray Fisher",
    ],
  },
  {
    poster_path:
      "https://image.tmdb.org/t/p/w500/gfJGlDaHuWimErCr5Ql0I8x9QSy.jpg",
    release_date: "2017-05-30",
    title: "Wonder Woman",
    cast: [
      "Gal Gadot",
      "Pedro Pascal",
      "Chris Pine",
      "Kristen Wiig",
      "Robin Wright",
    ],
  },
  {
    poster_path:
      "https://image.tmdb.org/t/p/w500/xFw9RXKZDvevAGocgBK0zteto4U.jpg",
    release_date: "2016-08-03",
    title: "Suicide Squad",
    cast: [
      "Jared Leto",
      "Margot Robbie",
      "Will Smith",
      "Cara Delevigne",
      "Pete Davidson",
    ],
  },
  {
    poster_path:
      "https://image.tmdb.org/t/p/w500/5UsK3grJvtQrtzEgqNlDljJW96w.jpg",
    release_date: "2016-03-23",
    title: "Batman v Superman: Dawn of Justice",
    cast: [
      "Gal Gadot",
      "Ben Affleck",
      "Henry Cavill",
      "Amy Adams",
      "Jesse Eisenberg",
    ],
  },
  {
    poster_path:
      "https://image.tmdb.org/t/p/w500/7rIPjn5TUK04O25ZkMyHrGNPgLx.jpg",
    release_date: "2013-06-12",
    title: "Man of Steel",
    cast: [
      "Henry Cavill",
      "Amy Adams",
      "Michael Shannon",
      "Kevin Costner",
      "Russell Crowe",
    ],
  },
  {
    poster_path:
      "https://image.tmdb.org/t/p/w500/vzvKcPQ4o7TjWeGIn0aGC9FeVNu.jpg",
    release_date: "2012-07-16",
    title: "The Dark Knight Rises",
    cast: [
      "Christian Bale",
      "Anne Hathaway",
      "Tom Hardy",
      "Gary Oldman",
      "Joseph Gordon-Levitt",
    ],
  },
  {
    poster_path:
      "https://image.tmdb.org/t/p/w500/fj21HwUprqjjwTdkKC1XZurRSpV.jpg",
    release_date: "2011-06-16",
    title: "Green Lantern",
    cast: [
      "Ryan Reynolds",
      "Blake Lively",
      "Mark Strong",
      "Peter Sarsgaard",
      "Taika Waititi",
    ],
  },
  {
    poster_path:
      "https://image.tmdb.org/t/p/w500/1MpWjcCn8M0763QDoxcN0gXrc5q.jpg",
    release_date: "2010-06-18",
    title: "Jonah Hex",
    cast: [
      "Josh Brolin",
      "Megan Fox",
      "John Malkovich",
      "Michael Fassbender",
      "Will Arnett",
    ],
  },
  {
    poster_path:
      "https://image.tmdb.org/t/p/w500/aZvOkdo203bm1kpcY0A0Tn074ER.jpg",
    release_date: "2009-03-05",
    title: "Watchmen",
    cast: [
      "Regina King",
      "Jeremy Irons",
      "Tim Nelson",
      "Don Johnson",
      "Jean Smart",
    ],
  },
  {
    poster_path:
      "https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg",
    release_date: "2008-07-16",
    title: "The Dark Knight",
    cast: [
      "Christian Bale",
      "Gary Oldman",
      "Heath Ledger",
      "Michael Caine",
      "Morgan Freeman",
    ],
  },
  {
    poster_path:
      "https://image.tmdb.org/t/p/w500/qIegbn6DSUYmggfwxOBNOVS35q.jpg",
    release_date: "2006-06-28",
    title: "Superman Returns",
    cast: [
      "Brandon Routh",
      "Kate Bosworth",
      "Kevin Spacey",
      "James Marsden",
      "Parker Posey",
    ],
  },
  {
    poster_path:
      "https://image.tmdb.org/t/p/w500/1P3ZyEq02wcTMd3iE4ebtLvncvH.jpg",
    release_date: "2005-06-10",
    title: "Batman Begins",
    cast: [
      "Christian Bale",
      "Cillian Murphy",
      "Katie Holmes",
      "Michael Caine",
      "Liam Neeson",
    ],
  },
  {
    poster_path:
      "https://image.tmdb.org/t/p/w500/pvnPgukFyEKgCzyOxyLiwyZ8T1C.jpg",
    release_date: "2004-07-22",
    title: "Catwoman",
    cast: [
      "Halle Berry",
      "Sharon Stone",
      "Benjamin Trott",
      "Frances Conroy",
      "Lambert Wilson",
    ],
  },
  {
    poster_path:
      "https://image.tmdb.org/t/p/w500/hbH8oXJZPwcYxaa1JrUMq4ogg7G.jpg",
    release_date: "1997-08-15",
    title: "Steel",
    cast: [
      "Chad Connell",
      "Jason Wishnowski",
      "Daryl Dorge",
      "Logan Creran",
      "Mimi Kuzyk",
    ],
  },
  {
    poster_path:
      "https://image.tmdb.org/t/p/w500/bsg0mrxUKyJoL4oSGP5mlhEsqp.jpg",
    release_date: "1997-06-20",
    title: "Batman & Robin",
    cast: [
      "George Clooney",
      "Chris O'Donnell",
      "Uma Thurman",
      "Alicia Silverstone",
    ],
  },
];

module.exports = {
  posts,
};
