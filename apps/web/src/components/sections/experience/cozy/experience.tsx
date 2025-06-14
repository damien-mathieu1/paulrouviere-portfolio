import React from "react";
import TextReveal from "@/components/fancy/text-reveal";
import MotionWrap from "@/components/motion-wrap";
import { experiences } from "@/components/sections/experience/config";

import ExperienceCard from "./experience-card";

function Experiences() {
  return (
    <MotionWrap className="w-full py-24 lg:py-32" id="experiences">
      <div className="px-4 md:px-6">
        <div className="grid gap-10 lg:grid-cols-2">
          <div className="space-y-4">
            <TextReveal
              as="h2"
              className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl/none"
            >
              My Experience
            </TextReveal>
          </div>
          <div className="grid gap-4">
            {experiences.map((experience, index) => (
              <ExperienceCard
                key={`experience_${index}`}
                name={experience.name}
                description={experience.description}
                company={experience.company}
                duration={experience.duration}
              />
            ))}
          </div>
        </div>
      </div>
    </MotionWrap>
  );
}

export default Experiences;
