export const metadata = {
  title: "Projects",
  description: "",
};

const projects = [
  {
    id: "polybranch",
    name: "🌳 PolyBranch",
    version: "",
    githubUrl: "",
    repo: "",
    description:
      "An experimental AI chat interface that visualizes conversations as trees, letting you branch chats, manage context, and switch between AI models seamlessly.",
    status: "In Progress",
    year: 2025,
    tags: [],
  },
  {
    id: "promptcache",
    name: "📔 PromptCache",
    version: "",
    url: "",
    githubUrl: "",
    description:
      "A web extension to store and access your prompts across different chat applications, all from your browser.",
    status: "In Progress",
    year: 2025,
    tags: [],
  },
];

export default function Page() {
  return (
    <section>
      <h1 className="font-semibold text-2xl mb-8 tracking-tighter dark:text-zinc-50">
        My Projects
      </h1>
      {projects.length > 0 &&
        projects.map((project) => (
          <div key={project.id} className="p-2 mb-5">
            <div className="flex justify-between items-center mb-2">
              <h2 className="text-xl font-semibold">{project.name}</h2>
              <div className="flex gap-2">
                <div className="flex items-center gap-2">
                  <div className="size-3 bg-yellow-500 rounded-full animate-pulse" />
                  <span>{project.status}</span>
                </div>
                <div>|</div>
                <div>{project.year}</div>
              </div>
            </div>
            <div>
              <p>{project.description}</p>
            </div>
          </div>
        ))}
    </section>
  );
}
