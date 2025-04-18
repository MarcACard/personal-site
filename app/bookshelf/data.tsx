type BookStatus = "In Progress" | "Completed" | "DNF";

type Book = {
  title: string;
  author: string;
  status: BookStatus;
  rating?: number;
  dateCompleted?: string;
};

export const books: Book[] = [
  {
    title: "The Will of the Many",
    author: "James Islington",
    status: "In Progress",
  },
  {
    title: "Liftoff: Elon Musk and the Desperate Early Days That Launched SpaceX",
    author: "Eric Berger",
    status: "In Progress",
  },
  {
    title: "Howling Dark",
    author: "Christopher Ruocchio",
    status: "In Progress",
  },
  {
    title: "The Last Question",
    author: "Isaac Asimov",
    status: "Completed",
    dateCompleted: "2025-04-04",
    rating: 2
  },
  {
    title: "There Is No Antimemetics Division",
    author: "qntm",
    status: "Completed",
    dateCompleted: "2025-03-22",
    rating: 4
  },
  {
    title: "Saturn Run",
    author: "John Sandfor, Ctein",
    status: "Completed",
    dateCompleted: "2025-03-13",
    rating: 2,
  },
  {
    title: "The Joy Luck Club",
    author: "Amy Tan",
    status: "Completed",
    dateCompleted: "2025-01-07",
    rating: 5,
  },
];
