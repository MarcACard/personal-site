import { BlogPosts } from "app/components/posts";

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        Marc Anthony Card
      </h1>
      <p className="mb-4">
        I'm a developer living in Brooklyn, NY 🗽. Currently diving into{" "}
        <span className="line-through">rabbit holes</span> black holes and
        building what piques my curiosity.
      </p>
      <p className="mb-4">
        Previously, I served as VP of Product Technology &amp; Integrations at{" "}
        <a
          className="underline"
          href="https://www.logicalposition.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Logical Position
        </a>
        , a digital advertising agency. During my time there, I founded the Data
        Feed, Web Analytics, Integrations Development, Advanced Product
        Reporting, and Business Intelligence teams.
      </p>
      <p className="mb-8">
        I'm an avid Sci-fi reader and a coffee enthusiast - send me all your
        book and coffee roast recs.
      </p>
      <hr />
      <div className="my-8">
        <BlogPosts />
      </div>
    </section>
  );
}
