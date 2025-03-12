import { books } from "./data";
import { Star } from "lucide-react";

export const metadata = {
  title: "Bookshelf",
  description: "",
};

export default function Page() {
  return (
    <section>
      <h1 className="font-semibold text-2xl mb-8 tracking-tighter dark:text-zinc-50">
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
            className="grid grid-cols-1 sm:grid-cols-[1.75fr_1.25fr_.75fr_.75fr] sm:gap-4 mb-2 items-center text-sm"
          >
            <span className="font-medium line-clamp-1">{book.title}</span>
            <span className="line-clamp-1">{book.author}</span>
            {book.dateCompleted ? (
              <span>{book.dateCompleted}</span>
            ) : (
              <span className="italic">{book.status}</span>
            )}
            <div className="flex items-center h-full">
              {typeof book.rating === "number" &&
                Array.from({ length: book.rating }).map((_, i) => (
                  <Star
                    key={i}
                    className="size-4 fill-yellow-400 stroke-none"
                  />
                ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
