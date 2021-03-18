const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Books collection and inserts the books below

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/googlebooks"
);

const bookSeed = [
  {
    authors: ["Suzanne Collins"],
    description: "Set in a dark vision of the near future, a terrifying reality TV show is taking place. Twelve boys and twelve girls are forced to appear in a live event called The Hunger Games. There is only one rule: kill or be killed. When sixteen-year-old Katniss Everdeen steps forward to take her younger sister's place in the games, she sees it as a death sentence. But Katniss has been close to death before. For her, survival is second nature.",
    image: "http://books.google.com/books/content?id=sazytgAACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
    link: "http://books.google.com/books?id=sazytgAACAAJ&dq=title:The+Hunger+Games&hl=&source=gbs_api",
    title: "The Hunger Games",
    date: new Date(Date.now())
  },
  {
    authors: ["Mario Puzo"],
    description: "Tyrant, blackmailer, racketeer, murderer - his influence reaches every level of American society. Meet Don Corleone, a friendly man, a just man, areasonable man. The deadliest lord of the Cosa Nostra. The Godfather. A modern masterpiece,The Godfather is a searing portrayal of the 1940s criminal underworld. It is also the intimate story of the Corleone family, at once drawn together and ripped apart by its unique position at the core of the American Mafia. Still shocking forty years after it was first published, this compelling tale of blackmail, murder and family values is a true classic.",
    image: "https://books.google.ca/books/content?id=tArbPgR7pigC&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE70Z9dFmmIlPW4lFn9o-f49qqKyJtLzUlqBcWBYxRUzlv_sPDlUor6e21MhBrdN2zkcADmF4VCRxPrRHX52331AN_5hZ87bg5ii_5VWPqDjGC7KdwHygTBbycvZksnu-kvftFUQK",
    link: "https://books.google.ca/books?id=tArbPgR7pigC",
    title: "The Godfather",
    date: new Date(Date.now())
  },
  {
    authors: ["Ayn Rand"],
    description: "When The Fountainhead was first published, Ayn Rand's daringly original literary vision and her groundbreaking philosophy, Objectivism, won immediate worldwide interest and acclaim. This instant classic is the story of an intransigent young architect, his violent battle against conventional standards, and his explosive love affair with a beautiful woman who struggles to defeat him. This edition contains a special afterword by Rand’s literary executor, Leonard Peikoff, which includes excerpts from Ayn Rand’s own notes on the making of The Fountainhead. As fresh today as it was then, here is a novel about a hero—and about those who try to destroy him.",
    image: "http://books.google.com/books/content?id=dQaQBQAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
    link: "https://books.google.ca/books?id=dQaQBQAAQBAJ",
    title: "The Fountainhead",
    date: new Date(Date.now())
  }
];

db.Book
  .remove({})
  .then(() => db.Book.collection.insertMany(bookSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
