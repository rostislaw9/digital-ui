import type { ComponentMeta } from "../registry";

import { ArrowLeft, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

import { Button } from "@ionbit-ui/ui";

import { Slottable } from "@/components/ui/button";

import { getPrevNext } from "../../lib/getPrevNext";

export function PrevNextNav({
  current,
  registry,
}: {
  current: ComponentMeta;
  registry: ComponentMeta[];
}) {
  const { prev, next } = getPrevNext(current, registry);

  return (
    <div className="flex items-center justify-between border-t border-border pt-6">
      {prev ? (
        <Button asChild variant="outline" size="sm">
          <ArrowLeft data-icon="inline-start" />
          <Slottable>
            <Link to={`/components/${prev.name}`}>{prev.label}</Link>
          </Slottable>
        </Button>
      ) : (
        <span />
      )}
      {next ? (
        <Button asChild variant="outline" size="sm">
          <Slottable>
            <Link to={`/components/${next.name}`}>{next.label}</Link>
          </Slottable>
          <ArrowRight data-icon="inline-end" />
        </Button>
      ) : (
        <span />
      )}
    </div>
  );
}
