import { BlogPosts } from "app/components/posts";

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        Marc Anthony Card
      </h1>
      <p className="mb-4">
        I'm a developer living in Brooklyn, NY. Currently VP of Product
        Technology & Integrations at{" "}
        <a
          className="underline"
          href="https://www.logicalposition.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Logical Position
        </a>
        , a digital advertising agency.
      </p>
      <p className="mb-4">
        Since joining LP I've had the pleasure to start and build our agencies
        Data Feed, Web Analytics, Integrations Development, Advanced Product
        Reporting, and Business Intelligence teams.
      </p>
      <div className="my-8">
        <BlogPosts />
      </div>
    </section>
  );
}
