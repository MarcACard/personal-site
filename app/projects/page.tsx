import { SiGithub } from "@icons-pack/react-simple-icons";
import { Globe } from "lucide-react";
import { cn } from "../../lib/utils";

export const metadata = {
  title: "Projects",
  description: "Explore projects by Marc Anthony Card, including AI tools, browser extensions, and web apps like PromptCache, Playlist Preserve, and PolyBranch.",
};

const projects = [
  {
    id: "promptcache",
    name: "📔 PromptCache",
    version: "0.2.0",
    url: "https://www.promptcache.ai/?ref=marcacard.com",
    githubUrl: "https://github.com/MarcACard/promptcache",
    description:
      "PromptCache is a browser extension that lets you save, organize, and reuse AI prompts with one click.",
    status: "Live",
    firstLaunched: "March 2025",
    tags: [],
  },
  {
    id: "playlistpreserve",
    name: "🎶 Playlist Preserve",
    version: "",
    url: "https://www.playlistpreserve.com/?ref=marcacard.com",
    githubUrl: "https://github.com/MarcACard/playlist-preserve",
    description:
      "A web app that automatically snapshots Apple Music playlists—official and personal—enabling users to track changes over time and never loose track of a song again.",
    status: "WIP",
    firstLaunched: "",
    tags: [],
  },
  {
    id: "polybranch",
    name: "🌳 PolyBranch",
    version: "",
    githubUrl: "https://github.com/MarcACard/polybranch",
    repo: "",
    description:
      "An experimental AI chat interface that visualizes conversations as trees, letting you branch chats, manage context, and switch between AI models seamlessly.",
    status: "WIP",
    firstLaunched: "",
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
          <div key={project.id} className="mb-5">
            <div className="flex justify-between items-center mb-2">
              <div className="flex items-center gap-4">
                <h2 className="text-xl font-semibold">{project.name}</h2>
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    className="hover:scale-[1.1] tranform"
                  >
                    <SiGithub className="size-5" />
                  </a>
                )}
                {project.url && (
                  <a
                    href={project.url}
                    target="_blank"
                    className="hover:scale-[1.1] tranform"
                  >
                    <Globe className="size-5" />
                  </a>
                )}
              </div>
              <div className="flex gap-2">
                <div className="flex items-center gap-2">
                  <div
                    className={cn(
                      "size-3 rounded-full",
                      project.status == "WIP"
                        ? "bg-yellow-400 animate-pulse"
                        : "bg-green-500"
                    )}
                  />
                  <span className="font-medium">{project.status}</span>
                </div>
                {project.version && (
                  <>
                    <div>|</div>
                    <div>v{project.version}</div>
                  </>
                )}
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
