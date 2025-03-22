import { SiRefinedgithub, SiX } from "@icons-pack/react-simple-icons";

function LinkedInIcon() {
  return (
    <svg
      height="30px"
      width="30px"
      fill="currentColor"
      viewBox="0 0 30 30"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>Link to Marc's LinkedIn</title>
      <path d="M24,4H6C4.895,4,4,4.895,4,6v18c0,1.105,0.895,2,2,2h18c1.105,0,2-0.895,2-2V6C26,4.895,25.105,4,24,4z M10.954,22h-2.95 v-9.492h2.95V22z M9.449,11.151c-0.951,0-1.72-0.771-1.72-1.72c0-0.949,0.77-1.719,1.72-1.719c0.948,0,1.719,0.771,1.719,1.719 C11.168,10.38,10.397,11.151,9.449,11.151z M22.004,22h-2.948v-4.616c0-1.101-0.02-2.517-1.533-2.517 c-1.535,0-1.771,1.199-1.771,2.437V22h-2.948v-9.492h2.83v1.297h0.04c0.394-0.746,1.356-1.533,2.791-1.533 c2.987,0,3.539,1.966,3.539,4.522V22z"></path>
    </svg>
  );
}

export default function Footer() {
  return (
    <footer className="mb-16">
      <div className="mt-8 flex justify-between align-center">
        <div className="text-neutral-600 dark:text-neutral-300">
          © {new Date().getFullYear()} Marc Anthony Card.
        </div>
        <div className="flex items-center gap-2">
          <a
            href="https://github.com/marcacard"
            rel="noopener noreferrer"
            target="_blank"
            className="text-neutral-600 dark:text-neutral-300 hover:text-neutral-800 dark:hover:text-neutral-100"
          >
            <SiRefinedgithub className="size-6" />
          </a>
          <a
            href="https://www.linkedin.com/in/marc-card/"
            rel="noopener noreferrer"
            target="_blank"
            className="text-neutral-600 dark:text-neutral-300 hover:text-neutral-800 dark:hover:text-neutral-100"
          >
            <LinkedInIcon />
          </a>
          <a
            href="https://x.com/marcard"
            rel="noopener noreferrer"
            target="_blank"
            className="text-neutral-600 dark:text-neutral-300 hover:text-neutral-800 dark:hover:text-neutral-100"
          >
            <SiX className="size-6" />
          </a>
        </div>
      </div>
    </footer>
  );
}
