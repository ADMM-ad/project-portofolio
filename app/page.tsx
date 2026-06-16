import { ProjectCard } from "@/components/ProjectCard";
import { projects } from "@/data/projects";

export default function Home() {
  return (
    <main className="tech-background min-h-screen px-5 py-12 text-[#0F172A] sm:px-8 lg:px-12">
      <section className="mx-auto flex w-full max-w-7xl flex-col gap-12">
        <header className="max-w-3xl pt-4 sm:pt-8">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#2563EB]">
            Website and Mobile Developer
          </p>
          <h1 className="mt-4 text-4xl font-semibold tracking-normal text-[#0F172A] sm:text-5xl">
            M Adam Abdurrahman
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-8 text-[#334155] sm:text-lg">
            Kumpulan project yang pernah saya kerjakan, mulai dari Work
            Project, Client Project, Internship Project, hingga Personal Project.
          </p>
        </header>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((project, index) => (
            <ProjectCard index={index} key={project.id} project={project} />
          ))}
        </div>
      </section>
    </main>
  );
}
