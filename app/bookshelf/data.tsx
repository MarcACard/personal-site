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
    title: "Howling Dark",
    author: "Christopher Ruocchio",
    status: "In Progress",
  },
  {
    title: "There Is No Antimemetics Division",
    author: "qntm",
    status: "In Progress",
  },
  {
    title: "The Joy Luck Club",
    author: "Amy Tan",
    status: "Completed",
    dateCompleted: "2025-01-07",
    rating: 5,
  },
];
