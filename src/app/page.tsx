"use client";

import { useRef } from "react";

export default function Home() {
  const projectsRef = useRef<HTMLElement | null>(null);
  return (
    <main className="page-gradient relative min-h-screen px-5 py-14 md:px-7 lg:px-10">
      <div className="mx-auto max-w-3xl grid gap-8 md:grid-cols-2">
        {/* Left column: About / Hero */}
        <section className="space-y-6 fade-up">
          <p className="uppercase tracking-widest text-xs text-neutral-400">About me</p>
          <h1 className="text-4xl md:text-5xl font-semibold leading-tight">
            Hi, I&apos;m <span className="text-rose-400">Rajanya</span>
            <br />
            <span className="text-rose-400">Purohit</span>
          </h1>
          <ul className="text-[13px] text-neutral-400 space-y-2">
            <li className="flex items-center gap-2"><span>📍</span>Based in Pune</li>
            <li className="flex items-center gap-2"><span>🗓️</span>Final Year AIML Student</li>
            <li className="flex items-center gap-2"><span>💻</span>UI/UX Designer and AI Engineer</li>
          </ul>
          <p className="text-neutral-300 max-w-prose text-sm">
            As a dedicated designer and AI engineer, I bring precision and creative innovation to every project.
            I specialize in robust, scalable web applications that combine cutting-edge technology with intuitive user experiences.
          </p>
          <div className="flex gap-2.5">
            <a href="mailto:rajanyaya@gmail.com" className="inline-flex items-center rounded-md bg-rose-500 text-white px-4 py-2 text-sm font-medium hover:bg-rose-400 transition-colors hover-lift">Get in Touch</a>
            <button onClick={() => projectsRef.current?.scrollIntoView({ behavior: "smooth", block: "start" })} className="inline-flex items-center rounded-md border border-neutral-800 bg-neutral-900 px-4 py-2 text-sm font-medium text-neutral-200 hover:bg-neutral-800 transition-colors hover-lift">View Projects</button>
          </div>
        </section>

        {/* Right column: Skills and Services */}
        <section className="space-y-8 fade-up delay-1">
          <div>
            <h2 className="text-base font-medium text-neutral-300 mb-3">Key Skills</h2>
            <div className="flex flex-wrap gap-1.5">
              {[
                "Python",
                "Neural Networks",
                "Deep Learning",
                "AI Agents",
                "LLMs",
                "RAG",
                "Machine Learning",
                "Data Analysis",
                "Figma",
                "React",
                "MySQL",
                "Git",
              ].map((skill) => (
                <span
                  key={skill}
                  className="rounded-full bg-neutral-900/90 border border-neutral-800 px-2.5 py-1 text-[11px] text-neutral-300 shadow-[0_0_1px_#fff1] hover-lift"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-base font-medium text-neutral-300 mb-3">Services</h2>
            <ul className="space-y-2.5 text-neutral-300 text-sm">
              {[
                "AI Development",
                "Full Stack Development",
                "Frontend Development",
                "Backend Development",
                "API Integration",
              ].map((service) => (
                <li key={service} className="flex items-center gap-2.5 hover-lift">
                  <span className="text-rose-400">→</span>
                  <span>{service}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>
      </div>

      {/* Stats strip */}
      <section className="mx-auto max-w-3xl mt-12 grid grid-cols-2 gap-3.5 fade-up delay-2">
        {[
          { value: "20+", label: "Projects Completed" },
          { value: "5+", label: "Happy Clients" },
        ].map((stat) => (
          <div key={stat.label} className="rounded-lg border border-neutral-800 bg-neutral-950/60 px-5 py-5 text-center hover-lift">
            <p className="text-2xl font-semibold text-neutral-100">{stat.value}</p>
            <p className="text-[11px] text-neutral-400 mt-1">{stat.label}</p>
          </div>
        ))}
      </section>

      {/* Projects */}
      <section id="projects" ref={projectsRef} className="mx-auto max-w-3xl mt-16 space-y-6">
        <h2 className="text-lg font-semibold text-neutral-200">Projects</h2>
        <div className="grid gap-4 md:grid-cols-2">
          <ProjectCard
            title="ESWY"
            href="https://eswy.in"
            description="Conceived and led the development of a narrative-driven browser game inspired by the ESWY music video."
            images={["/pics/1eswy.png","/pics/2eswy.png","/pics/3eswy.png"]}
          />
          <ProjectCard
            title="Aviate CX"
            description="Designing and developing a Customer Relationship Management (CRM) system and a chatbot leveraging RAG pipelines."
            images={["/pics/1aviate.png","/pics/2aviate.png","/pics/3aviate.png"]}
          />
          <ProjectCard
            title="Techomotion"
            description="Inventory management system for the company Techolution."
            images={["/pics/1techomotion.png","/pics/2techomotion.png","/pics/3techomotion.png"]}
          />
          <ProjectCard
            title="Stratabot"
            description="A questionnaire connected with API calls to a chatbot for the company Everse.ai."
            images={["/pics/1stratabot.png","/pics/3stratabot.png"]}
          />
        </div>
      </section>
    </main>
  );
}

type ProjectCardProps = {
  title: string;
  description: string;
  images: string[];
  href?: string;
};

function ProjectCard({ title, description, images, href }: ProjectCardProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const indexRef = useRef(0);

  const next = () => {
    if (!containerRef.current) return;
    indexRef.current = (indexRef.current + 1) % images.length;
    containerRef.current.style.transform = `translateX(-${indexRef.current * 100}%)`;
  };

  const prev = () => {
    if (!containerRef.current) return;
    indexRef.current = (indexRef.current - 1 + images.length) % images.length;
    containerRef.current.style.transform = `translateX(-${indexRef.current * 100}%)`;
  };

  return (
    <article className="rounded-lg border border-neutral-800 bg-neutral-950/70 overflow-hidden hover-lift">
      <div className="relative aspect-[16/10] overflow-hidden">
        <div ref={containerRef} className="flex w-full h-full transition-transform duration-300 ease-out" style={{ transform: "translateX(0%)" }}>
          {images.map((src) => (
            <div key={src} className="min-w-full grid place-items-center bg-neutral-950">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={src} alt="Project image" className="opacity-90" />
            </div>
          ))}
        </div>
        <div className="absolute inset-x-0 bottom-2 flex justify-between px-2">
          <button onClick={prev} className="text-[11px] px-2 py-1 rounded bg-neutral-900/80 border border-neutral-800">Prev</button>
          <button onClick={next} className="text-[11px] px-2 py-1 rounded bg-neutral-900/80 border border-neutral-800">Next</button>
        </div>
      </div>
      <div className="p-3.5 space-y-1">
        <h3 className="text-[13px] font-medium text-neutral-100">
          {href ? (
            <a href={href} target="_blank" rel="noreferrer" className="hover:underline">
              {title}
            </a>
          ) : (
            title
          )}
        </h3>
        <p className="text-[11px] text-neutral-400">{description}</p>
      </div>
    </article>
  );
}
