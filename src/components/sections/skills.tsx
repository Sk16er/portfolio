import Link from "next/link";
import React from "react";
import { BoxReveal } from "../reveal-animations";
import { cn } from "@/lib/utils";

const skillCategories = [
  {
    title: "Programming",
    skills: [
      "Python",
      "Rust",
      "JavaScript",
      "TypeScript",
      "SQL",
      "Bash",
    ],
  },
  {
    title: "LLM Fine-Tuning & Quantization",
    skills: [
      "Unsloth",
      "Hugging Face Hub",
      "LoRA",
      "QLoRA",
      "llama.cpp",
      "GGUF Optimization",
      "Ollama Customization",
      "Evaluation & Benchmarking",
    ],
  },
  {
    title: "Machine Learning & AI",
    skills: [
      "LLMs",
      "Transformers",
      "Foundation Models",
      "Model Training",
      "Distributed Training",
      "RLHF",
      "DPO",
      "CUDA",
      "Multimodal AI",
      "Self-Modifying Titans",
      "Classification & Regression",
      "Linear Attention",
      "Predictive Modeling",
    ],
  },
  {
    title: "Libraries & Frameworks",
    skills: [
      "PyTorch",
      "TensorFlow",
      "NumPy",
      "Pandas",
      "Scikit-Learn",
      "Hugging Face API",
      "Matplotlib",
      "Python Packaging",
    ],
  },
  {
    title: "Data & Databases",
    skills: [
      "MongoDB",
      "MySQL",
      "Data Processing",
      "Data Modeling",
      "Data Alignment",
    ],
  },
  {
    title: "MLOps & Infrastructure",
    skills: [
      "Docker",
      "Linux",
      "Git",
      "Model Deployment",
      "Google Colab",
      "VS Code",
      "Claude Code",
    ],
  },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="w-full min-h-screen">
      <div className="top-[70px] sticky">
        <Link href={"#skills"}>
          <BoxReveal width="100%">
            <h2
              className={cn(
                "bg-clip-text text-4xl text-center text-transparent md:text-7xl",
                "bg-gradient-to-b from-black/80 to-black/50",
                "dark:bg-gradient-to-b dark:from-white/80 dark:to-white/20 dark:bg-opacity-50"
              )}
            >
              SKILLS
            </h2>
          </BoxReveal>
        </Link>

        <p className="mx-auto mt-4 max-w-3xl text-base text-center text-neutral-400">
          AI Engineer focused on LLM fine-tuning, machine learning,
          distributed training, and production AI systems.
        </p>

        <div className="mx-auto mt-12 max-w-6xl px-6">
          <div className="grid gap-6 md:grid-cols-2">
            {skillCategories.map((category) => (
              <div
                key={category.title}
                className="rounded-xl border border-neutral-800 p-5 backdrop-blur-sm"
              >
                <h3 className="mb-3 text-lg font-semibold">
                  {category.title}
                </h3>

                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-full border border-neutral-700 px-3 py-1 text-sm text-neutral-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
