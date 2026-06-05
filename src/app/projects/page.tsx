"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
// @ts-ignore
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css/core";

import "@splidejs/react-splide/css";

const PROJECTS = [
  {
    id: "aeline-models",
    name: "Aeline (Ollama Models)",
    description:
      "Published 4 fine-tuned models on Ollama including a 2B+ vision model and uncensored LLM variants, accumulating ~390K total pulls.",
    link: "https://ollama.com/aeline",
    repo: "https://github.com/Sk16er",
    images: [
      "/assets/projects-screenshots/aeline-models/aeline-thumbnail.png",
      "/assets/projects-screenshots/aeline-models/aeline-1.png",
      "/assets/projects-screenshots/aeline-models/aeline-2.png",
    ],
  },
  {
    id: "nano-hope",
    name: "Nano-HOPE",
    description:
      "Unofficial 51M-parameter implementation of Google DeepMind's HOPE architecture with a self-modifying memory core.",
    link: "https://colab.research.google.com/drive/1IXCZadJB14pqA5d5tgGo3UzQ2B_DTnyR?usp=sharing",
    repo: "https://github.com/Sk16er/hope_nano",
    images: [
      "/assets/projects-screenshots/nano-hope/hope_nano-thumbnail.png",
      "/assets/projects-screenshots/nano-hope/hope_nano-1.png",
      "/assets/projects-screenshots/nano-hope/hope_nano-2.png",
    ],
  },
  {
    id: "shelby",
    name: "Shelby",
    description:
      "AI-powered terminal assistant that translates natural language into shell commands with a 3-tier safety system.",
    link: "",
    repo: "https://github.com/Sk16er/shelby",
    images: [
      "/assets/projects-screenshots/shelby/shelby-thumbnail.png",
      "/assets/projects-screenshots/shelby/shelby-1.png",
      "/assets/projects-screenshots/shelby/shelby-2.png",
    ],
  },
  {
    id: "f1_prdt",
    name: "F1 Race Winner Predictor",
    description:
      "ML system using a Transformer Encoder to predict F1 race winners by modeling all grid drivers as a sequence, with interpretable attention heatmaps.",
    link: "https://github.com/sk16er/f1_prdt",
    repo: "https://github.com/Sk16er/f1_prdt",
    images: [
      "/assets/projects-screenshots/f1_prdt/f1_prdt-thumbnail.png",
      "/assets/projects-screenshots/f1_prdt/f1_prdt-1.png",
      "/assets/projects-screenshots/f1_prdt/f1_prdt-2.png",
    ],
  },
];
function Page() {
  return (
    <>
      <div className="container mx-auto md:px-[50px] xl:px-[150px] text-zinc-300 h-full">
        <h1 className="text-4xl mt-[100px] mb-[50px]">Projects</h1>
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 place-content-around ">
          {PROJECTS.map((project) => (
            <li
              className="w-full h-[420px] border-[.5px] rounded-md border-zinc-600 overflow-hidden"
              key={project.id}
              style={{ backdropFilter: "blur(2px)" }}
            >
              <div className="h-[200px]">
                <Splide
                  options={{
                    type: "loop",
                    interval: 3000,
                    autoplay: true,
                    speed: 2000,
                    perMove: 1,
                    rewind: true,
                    easing: "cubic-bezier(0.25, 1, 0.5, 1)",
                    arrows: false,
                  }}
                  aria-label="My Favorite Images"
                >
                  {project.images.map((image) => (
                    <SplideSlide key={image}>
                      <Image
                        src={image}
                        alt={`screenshot of "${project.name}`}
                        className="w-full h-48 object-cover rounded-md bg-zinc-900"
                        width={600}
                        height={320}
                      />
                    </SplideSlide>
                  ))}
                </Splide>
              </div>
              <div className="p-4 text-zinc-300">
                <h2 className="text-xl">{project.name}</h2>
                <p className="mt-2 text-xs text-zinc-500">
                  {project.description}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default Page;
