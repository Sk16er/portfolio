import AceTernityLogo from "@/components/logos/aceternity";
import SlideShow from "@/components/slide-show";
import { Button } from "@/components/ui/button";
import { TypographyH3, TypographyP } from "@/components/ui/typography";
import { ArrowUpRight, ExternalLink, Link2, MoveUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { ReactNode } from "react";
import { RiNextjsFill, RiNodejsFill, RiReactjsFill } from "react-icons/ri";
import {
  SiChakraui,
  SiDocker,
  SiExpress,
  SiFirebase,
  SiJavascript,
  SiMongodb,
  SiPostgresql,
  SiPrisma,
  SiPython,
  SiReactquery,
  SiSanity,
  SiShadcnui,
  SiSocketdotio,
  SiSupabase,
  SiTailwindcss,
  SiThreedotjs,
  SiTypescript,
  SiVuedotjs,
} from "react-icons/si";
import { TbBrandFramerMotion } from "react-icons/tb";
const BASE_PATH = "/assets/projects-screenshots";

const ProjectsLinks = ({ live, repo }: { live: string; repo?: string }) => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-start gap-3 my-3 mb-8">
      <Link
        className="font-mono underline flex gap-2"
        rel="noopener"
        target="_new"
        href={live}
      >
        <Button variant={"default"} size={"sm"}>
          Visit Website
          <ArrowUpRight className="ml-3 w-5 h-5" />
        </Button>
      </Link>
      {repo && (
        <Link
          className="font-mono underline flex gap-2"
          rel="noopener"
          target="_new"
          href={repo}
        >
          <Button variant={"default"} size={"sm"}>
            Github
            <ArrowUpRight className="ml-3 w-5 h-5" />
          </Button>
        </Link>
      )}
    </div>
  );
};

export type Skill = {
  title: string;
  bg: string;
  fg: string;
  icon: ReactNode;
};
const PROJECT_SKILLS = {
  next: {
    title: "Next.js",
    bg: "black",
    fg: "white",
    icon: <RiNextjsFill />,
  },
  chakra: {
    title: "Chakra UI",
    bg: "black",
    fg: "white",
    icon: <SiChakraui />,
  },
  node: {
    title: "Node.js",
    bg: "black",
    fg: "white",
    icon: <RiNodejsFill />,
  },
  python: {
    title: "Python",
    bg: "black",
    fg: "white",
    icon: <SiPython />,
  },
  prisma: {
    title: "prisma",
    bg: "black",
    fg: "white",
    icon: <SiPrisma />,
  },
  postgres: {
    title: "PostgreSQL",
    bg: "black",
    fg: "white",
    icon: <SiPostgresql />,
  },
  mongo: {
    title: "MongoDB",
    bg: "black",
    fg: "white",
    icon: <SiMongodb />,
  },
  express: {
    title: "Express",
    bg: "black",
    fg: "white",
    icon: <SiExpress />,
  },
  reactQuery: {
    title: "React Query",
    bg: "black",
    fg: "white",
    icon: <SiReactquery />,
  },
  shadcn: {
    title: "ShanCN UI",
    bg: "black",
    fg: "white",
    icon: <SiShadcnui />,
  },
  aceternity: {
    title: "Aceternity",
    bg: "black",
    fg: "white",
    icon: <AceTernityLogo />,
  },
  tailwind: {
    title: "Tailwind",
    bg: "black",
    fg: "white",
    icon: <SiTailwindcss />,
  },
  docker: {
    title: "Docker",
    bg: "black",
    fg: "white",
    icon: <SiDocker />,
  },
  yjs: {
    title: "Y.js",
    bg: "black",
    fg: "white",
    icon: (
      <span>
        <strong>Y</strong>js
      </span>
    ),
  },
  firebase: {
    title: "Firebase",
    bg: "black",
    fg: "white",
    icon: <SiFirebase />,
  },
  sockerio: {
    title: "Socket.io",
    bg: "black",
    fg: "white",
    icon: <SiSocketdotio />,
  },
  js: {
    title: "JavaScript",
    bg: "black",
    fg: "white",
    icon: <SiJavascript />,
  },
  ts: {
    title: "TypeScript",
    bg: "black",
    fg: "white",
    icon: <SiTypescript />,
  },
  vue: {
    title: "Vue.js",
    bg: "black",
    fg: "white",
    icon: <SiVuedotjs />,
  },
  react: {
    title: "React.js",
    bg: "black",
    fg: "white",
    icon: <RiReactjsFill />,
  },
  sanity: {
    title: "Sanity",
    bg: "black",
    fg: "white",
    icon: <SiSanity />,
  },
  spline: {
    title: "Spline",
    bg: "black",
    fg: "white",
    icon: <SiThreedotjs />,
  },
  gsap: {
    title: "GSAP",
    bg: "black",
    fg: "white",
    icon: "",
  },
  framerMotion: {
    title: "Framer Motion",
    bg: "black",
    fg: "white",
    icon: <TbBrandFramerMotion />,
  },
  supabase: {
    title: "Supabase",
    bg: "black",
    fg: "white",
    icon: <SiSupabase />,
  },
};
export type Project = {
  id: string;
  category: string;
  title: string;
  src: string;
  screenshots: string[];
  skills: { frontend: Skill[]; backend: Skill[] };
  content: React.ReactNode | any;
  github?: string;
  live: string;
};
const projects: Project[] = [
  // ─── NEW PROJECTS ────────────────────────────────────────────────────────────
  {
    id: "nano-hope",
    category: "AI / Research",
    title: "Nano-HOPE",
    src: "/assets/projects-screenshots/nano-hope/hope_nano-thumbnail.png",
    screenshots: [
      "hope_nano-thumbnail.png",
      "hope_nano-1.png",
      "hope_nano-2.png",
    ],
    live: "https://colab.research.google.com/drive/1IXCZadJB14pqA5d5tgGo3UzQ2B_DTnyR?usp=sharing",
    github: "https://github.com/Sk16er/hope_nano",
    skills: {
      frontend: [],
      backend: [PROJECT_SKILLS.python],
    },
    get content() {
      return (
        <div>
          <TypographyP className="font-mono text-2xl text-center">
            Unofficial implementation of Google DeepMind&apos;s HOPE architecture
          </TypographyP>
          <TypographyP className="font-mono">
            Nano-HOPE is a 51M-parameter model built from the HOPE research paper. Unlike standard
            Transformers, it uses a Self-Modifying Titans Core that updates its own weights at
            inference time via the Delta Rule — allowing it to learn dynamically from context
            rather than relying solely on static attention. Trained on the TinyStories dataset
            with cosine scheduling and gradient clipping. Earned 36+ stars on GitHub.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
          <TypographyH3 className="my-4 mt-8">Architecture</TypographyH3>
          <p className="font-mono mb-2">
            The core TitansL2 layer maintains a memory matrix that evolves with each token using
            learnable forget and write rates — solving the capacity bottleneck of standard linear
            attention. Surrounding it, Continuum Memory System (CMS) blocks operate at different
            timescales to capture long-range structure.
          </p>
          <SlideShow
            images={[
              `${BASE_PATH}/nano-hope/hope_nano-1.png`,
              `${BASE_PATH}/nano-hope/hope_nano-2.png`,
            ]}
          />
          <TypographyH3 className="my-4 mt-8">Stateful Inference</TypographyH3>
          <p className="font-mono mb-2">
            Unlike Transformers that reprocess the full context, HOPE passes a compact memory
            state forward — making generation efficient and truly stateful across tokens.
          </p>
          <SlideShow
            images={[`${BASE_PATH}/nano-hope/hope_nano-thumbnail.png`]}
          />
        </div>
      );
    },
  },
  {
    id: "shelby",
    category: "Developer Tools",
    title: "Shelby",
    src: "/assets/projects-screenshots/shelby/shelby-thumbnail.png",
    screenshots: ["shelby-thumbnail.png", "shelby-1.gif", "shelby-2.gif"],
    live: "https://pypi.org/project/shelby-ai",
    github: "https://github.com/Sk16er/shelby",
    skills: {
      frontend: [],
      backend: [PROJECT_SKILLS.python],
    },
    get content() {
      return (
        <div>
          <TypographyP className="font-mono text-2xl text-center">
            Natural language → shell commands, safely.
          </TypographyP>
          <TypographyP className="font-mono">
            Shelby is a safety-first AI terminal assistant that translates plain English into
            executable shell commands. Before anything runs, it explains what the command does
            and classifies its risk into one of three tiers: SAFE, CAUTION, or DANGER — with
            escalating confirmation requirements to prevent accidents.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
          <TypographyH3 className="my-4 mt-8">Safety System</TypographyH3>
          <p className="font-mono mb-2">
            Every generated command is classified before execution. SAFE commands run on Enter,
            CAUTION requires a &apos;y&apos; confirmation, and DANGER commands make you retype
            the command name — making destructive operations hard to run by accident.
          </p>
          <SlideShow
            images={[
              `${BASE_PATH}/shelby/shelby-1.gif`,
              `${BASE_PATH}/shelby/shelby-2.gif`,
            ]}
          />
          <TypographyH3 className="my-4 mt-8">Features</TypographyH3>
          <p className="font-mono mb-2">
            Supports OpenAI, Anthropic, Gemini, and local models via Ollama. Includes an
            interactive REPL with memory across turns, pipe mode, semantic history search,
            command explanation, and a fix mode that analyzes failed commands and suggests
            corrections.
          </p>
          <SlideShow
            images={[`${BASE_PATH}/shelby/shelby-thumbnail.png`]}
          />
        </div>
      );
    },
  },
  {
    id: "f1-predictor",
    category: "Machine Learning",
    title: "F1 Race Winner Predictor",
    src: "/assets/projects-screenshots/f1_prdt/f1_prdt-thumbnail.png",
    screenshots: ["f1_prdt-thumbnail.png", "f1_prdt-1.gif", "f1_prdt-2.png"],
    live: "https://github.com/Sk16er/f1_prdt",
    github: "https://github.com/Sk16er/f1_prdt",
    skills: {
      frontend: [],
      backend: [PROJECT_SKILLS.python],
    },
    get content() {
      return (
        <div>
          <TypographyP className="font-mono text-2xl text-center">
            Predicting F1 winners with a Transformer — and showing its reasoning.
          </TypographyP>
          <TypographyP className="font-mono">
            Instead of treating drivers independently, this system models an entire F1 starting
            grid as a sequence. A Transformer Encoder uses self-attention to evaluate each
            driver&apos;s attributes — age, championship standings, constructor performance —
            relative to every other competitor on the grid simultaneously.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
          <TypographyH3 className="my-4 mt-8">Attention Heatmaps</TypographyH3>
          <p className="font-mono mb-2">
            By reading the attention weights at inference time, the model generates interpretable
            heatmaps that show exactly which competitors influenced each prediction — making the
            output explainable, not just accurate.
          </p>
          <SlideShow
            images={[
              `${BASE_PATH}/f1_prdt/f1_prdt-1.gif`,
              `${BASE_PATH}/f1_prdt/f1_prdt-2.png`,
            ]}
          />
          <TypographyH3 className="my-4 mt-8">CLI Interface</TypographyH3>
          <p className="font-mono mb-2">
            A Rich-powered CLI lets you run interactive predictions by selecting year and race,
            outputs a ranked probability table in the terminal, and saves the attention heatmap
            as an image. Training runs with a single command.
          </p>
          <SlideShow
            images={[`${BASE_PATH}/f1_prdt/f1_prdt-thumbnail.png`]}
          />
        </div>
      );
    },
  },
  {
    id: "aeline-models",
    category: "AI / Open Source",
    title: "Aeline — Ollama Models",
    src: "/assets/projects-screenshots/aeline-models/aeline-thumbnail.png",
    screenshots: [
      "aeline-thumbnail.png",
      "aeline-1.png",
      "aeline-2.png",
    ],
    live: "https://ollama.com/aeline",
    github: "https://github.com/Sk16er",
    skills: {
      frontend: [],
      backend: [PROJECT_SKILLS.python],
    },
    get content() {
      return (
        <div>
          <TypographyP className="font-mono text-2xl text-center">
            390,000+ pulls across 4 published models on Ollama.
          </TypographyP>
          <TypographyP className="font-mono">
            A collection of fine-tuned and customized LLMs published under the aeline namespace
            on Ollama — ranging from a 2B+ parameter vision model to uncensored variants of
            Llama 3 and the Dolphin family. Built for local inference, all models run on a
            single GPU.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
          <TypographyH3 className="my-4 mt-8">Models</TypographyH3>
          <p className="font-mono mb-2">
            <strong>opan</strong> — Highly specialized vision model with 2B+ parameters
            (147K pulls). <strong>halo</strong> — Uncensored Llama 3 variant (113K pulls).{" "}
            <strong>phil</strong> — Uncensored Dolphin family model (92K pulls).{" "}
            <strong>Omega</strong> — Small fine-tuned vision model for training experiments
            (36K pulls).
          </p>
          <SlideShow
            images={[
              `${BASE_PATH}/aeline-models/aeline-1.png`,
              `${BASE_PATH}/aeline-models/aeline-2.png`,
            ]}
          />
          <TypographyH3 className="my-4 mt-8">Run Locally</TypographyH3>
          <p className="font-mono mb-2">
            Any model in the collection can be pulled and run with a single Ollama command.
            No cloud dependency, no API key — just local inference on your own hardware.
          </p>
          <SlideShow
            images={[`${BASE_PATH}/aeline-models/aeline-thumbnail.png`]}
          />
        </div>
      );
    },
  },
];
export default projects;