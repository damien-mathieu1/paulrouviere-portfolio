import React from "react";
import Link from "next/link";
import TextReveal from "@/components/fancy/text-reveal";
import MotionWrap from "@/components/motion-wrap";

import { Button } from "@repo/ui/button";
import { Icons } from "@repo/ui/icons";
import Image from "next/image";

function About() {
  return (
    <MotionWrap className="w-full py-24 lg:py-32" id="about">
      <div className="px-4 md:px-6">
        <div className="grid grid-cols-1 items-center gap-8 md:grid-cols-2">
          <div className="space-y-4">
            <TextReveal
              as="h2"
              className="text-4xl leading-tight font-bold tracking-tighter sm:text-5xl md:text-5xl md:leading-tight lg:text-6xl lg:leading-tight"
            >
              About Me
            </TextReveal>
            <div className="space-y-4">
              <TextReveal
                as="p"
                className="max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400"
              >
                Junior visual researcher in lighting and compositing, I create visual effects and 3D content for films and ads. I aim to bring precision and practicality to my workflow, contributing to both the artistic direction and technical quality of animated imagery. Currently working as a freelance artist on a commercial project, I continue to explore visual storytelling and real-time rendering tools.
              </TextReveal>
              <div className="flex gap-2">
                <Button asChild variant={"outline"}>
                  <a href="resume.pdf" target="_blank">
                    View Resume <Icons.arrowUpRight className="ml-2 size-5" />
                  </a>
                </Button>
                <Button asChild>
                  <Link href="/about">Learn More</Link>
                </Button>
              </div>
            </div>
          </div>
          <Image
                          src={"/images/profile_pic.jpg"}
                          alt={`Image of paul rouviere`}
                          width={500}
                          height={500}
                          className="rounded-md object-cover transition-transform duration-300 hover:scale-102"
                        />
        </div>
      </div>
    </MotionWrap>
  );
}

export default About;
