"use client";

import { useState } from "react";
import type { Project, ProjectCategory } from "@/types/project";

type ProjectCardProps = {
  project: Project;
  index: number;
};

const categoryStyles: Record<ProjectCategory, string> = {
  "Work Project": "border-blue-200 bg-blue-50 text-[#1E3A8A]",
  "Client Project": "border-orange-200 bg-orange-50 text-orange-700",
  "Personal Project": "border-emerald-200 bg-emerald-50 text-emerald-700",
};

export function ProjectCard({ project, index }: ProjectCardProps) {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <article
      className="portfolio-card animate-slide-up"
      style={{ animationDelay: `${index * 80}ms` }}
    >
      <div className={`flip-card-inner ${isFlipped ? "is-flipped" : ""}`}>
        <section aria-hidden={isFlipped} className="flip-card-face card-surface">
          <div className="flex items-center justify-between gap-3">
            <span
              className={`rounded-md border px-2.5 py-1 text-xs font-semibold ${categoryStyles[project.category]}`}
            >
              {project.category}
            </span>
            <span className="text-sm font-medium text-[#64748B]">
              {project.year}
            </span>
          </div>

          <div className="project-poster mt-5">
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${project.poster})` }}
            />
            <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(248,250,252,0.15),rgba(30,58,138,0.18))]" />
          </div>

          <div className="mt-5 flex flex-1 flex-col">
            <h2 className="text-xl font-semibold leading-7 text-[#0F172A]">
              {project.title}
            </h2>
            <div className="mt-4 flex flex-wrap gap-2">
              {project.technologies.map((technology) => (
                <span
                  className="rounded-md border border-slate-200 bg-slate-50 px-2.5 py-1 text-xs font-medium text-[#334155]"
                  key={technology}
                >
                  {technology}
                </span>
              ))}
            </div>
            <button
              className="mt-auto inline-flex w-fit items-center rounded-md bg-[#1E3A8A] px-4 py-2 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-[#2563EB] focus:outline-none focus:ring-2 focus:ring-[#2563EB]/30"
              onClick={() => setIsFlipped(true)}
              tabIndex={isFlipped ? -1 : 0}
              type="button"
            >
              Lihat Detail
            </button>
          </div>
        </section>

        <section
          aria-hidden={!isFlipped}
          className="flip-card-face flip-card-back card-surface"
        >
          <div className="flex items-start justify-between gap-3">
            <div>
              <p
                className={`inline-flex rounded-md border px-2.5 py-1 text-xs font-semibold ${categoryStyles[project.category]}`}
              >
                {project.category}
              </p>
              <h3 className="mt-4 text-xl font-semibold leading-7 text-[#0F172A]">
                {project.title}
              </h3>
            </div>
            <span className="rounded-md border border-slate-200 bg-slate-50 px-2.5 py-1 text-sm font-semibold text-[#334155]">
              {project.year}
            </span>
          </div>

          <div className="card-scroll-area mt-5 space-y-5 pr-2 text-sm leading-6 text-[#334155]">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#1E3A8A]">
                Tujuan Project
              </p>
              <p className="mt-2">{project.description}</p>
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#1E3A8A]">
                Fitur Utama
              </p>
              <ul className="mt-2 list-disc space-y-1 pl-4">
                {project.features.map((feature) => (
                  <li key={feature}>{feature}</li>
                ))}
              </ul>
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#1E3A8A]">
                Teknologi
              </p>
              <p className="mt-2">{project.technologies.join(", ")}</p>
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#1E3A8A]">
                Tahun Pengerjaan
              </p>
              <p className="mt-2">{project.year}</p>
            </div>
          </div>

          <button
            className="mt-4 inline-flex w-fit items-center rounded-md border border-slate-300 bg-white px-4 py-2 text-sm font-semibold text-[#1E3A8A] transition hover:-translate-y-0.5 hover:border-[#2563EB] hover:text-[#2563EB] focus:outline-none focus:ring-2 focus:ring-[#2563EB]/25"
            onClick={() => setIsFlipped(false)}
            tabIndex={isFlipped ? 0 : -1}
            type="button"
          >
            Kembali
          </button>
        </section>
      </div>
    </article>
  );
}
