import { books } from "./data";
import { Star } from "lucide-react";

export const metadata = {
  title: "Bookshelf",
  description: "",
};

export default function Page() {
  return (
    <section>
      <h1 className="font-semibold text-2xl mb-8 tracking-tighter">
        My Bookshelf
      </h1>
      <div className="mb-10">
        <p className="italic">
          My simple reading tracker, heavily inspired by{" "}
          <a
            href="https://macwright.com/reading/"
            className="underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            Tom MacWright.
          </a>
        </p>
      </div>
      <div>
        {books.map((book, index) => (
          <div
            key={index}
            className="grid grid-cols-1 sm:grid-cols-[2fr_1fr_1fr_.75fr] sm:gap-2 md:gap-1 mb-4 items-center"
          >
            <span className="font-medium">{book.title}</span>
            <span>{book.author}</span>
            {book.dateCompleted ? (
              <span>{book.dateCompleted}</span>
            ) : (
              <span className="italic">{book.status}</span>
            )}
            <div className="flex">
              {typeof book.rating === "number" &&
                Array.from({ length: book.rating }).map((_, i) => (
                  <Star
                    key={i}
                    className="size-4 fill-yellow-500 stroke-yellow-500"
                  />
                ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
