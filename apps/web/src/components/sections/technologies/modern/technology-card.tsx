import type { Technology } from "@/types/technology";
import React from "react";
import VariableFontCursorProximity from "@/components/fancy/variable-font-cursor-proximity";

import { cn } from "@repo/ui";

interface TechnologyCardProps extends Technology {
  className?: string;
  containerRef: React.RefObject<HTMLDivElement | null>;
}

function TechnologyCard({ name, containerRef }: TechnologyCardProps) {
  return (
    <VariableFontCursorProximity
      label={name ?? ""}
      className={cn(
        "text-xl leading-none sm:text-2xl md:text-2xl lg:text-3xl xl:text-4xl",
      )}
      fromFontVariationSettings="'wght' 400, 'slnt' 0"
      toFontVariationSettings="'wght' 900, 'slnt' -10"
      radius={200}
      containerRef={containerRef}
    />
  );
}

export default TechnologyCard;
