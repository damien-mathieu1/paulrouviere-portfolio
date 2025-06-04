import React from "react";
import { project } from "@/app/source";
import TextReveal from "@/components/fancy/text-reveal";
import MotionWrap from "@/components/motion-wrap";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@repo/ui/carousel";

import ProjectCard from "./project-card";

function Projects() {
  const projects = [...project.getPages()];
  return (
    <MotionWrap className="w-full py-24 lg:py-32" id="projects">
      <div className="px-4 md:px-6">
        <div className="grid gap-10">
          <div className="flex w-full flex-col items-center justify-center text-center lg:flex-row lg:justify-between lg:text-left">
            <div className="flex flex-col items-center lg:items-start">
              <TextReveal
                as="h2"
                className="flex flex-col -space-y-4 text-4xl leading-tight font-bold tracking-tighter sm:text-5xl md:text-5xl md:leading-tight lg:text-6xl lg:leading-tight"
              >
                My Projects
              </TextReveal>
            </div>
            
          </div>

          <div className="flex items-center justify-center overflow-hidden lg:px-12">
            <div className="w-full">
              {projects.map((project, index) => (
                <div
                  key={`project_${index}`}
                  className="mb-8 md:hidden"
                >
                  <ProjectCard
                    title={project.data.title}
                    href={project.slugs[0] === "paulrouviere_demoreel" ? "https://vimeo.com/1032997330" : project.url}
                    description={project.data.description}
                    tags={project.data.tags}
                    thumbnail={`/images/projects/${project.slugs[0]}/cover.jpg`}
                  />
                </div>
              ))}
              
              <Carousel
                opts={{
                  align: "start",
                }}
                className="hidden w-full md:block"
              >
                <CarouselContent>
                  {projects.map((project, index) => (
                    <CarouselItem
                      key={`project_${index}`}
                      className="md:basis-1/2 xl:basis-1/3 2xl:basis-1/4"
                    >
                      <div className="h-full">
                        <ProjectCard
                          title={project.data.title}
                          href={project.slugs[0] === "paulrouviere_demoreel" ? "https://vimeo.com/1032997330" : project.url}
                          description={project.data.description}
                          tags={project.data.tags}
                          thumbnail={`/images/projects/${project.slugs[0]}/cover.jpg`}
                        />
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
              </Carousel>
            </div>
          </div>
        </div>
      </div>
    </MotionWrap>
  );
}

export default Projects;
