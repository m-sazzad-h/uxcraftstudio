'use client';

import React from "react";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Section from "./Section";
import { DIFFS } from "./constants";

export default function Differentiators() {
  return (
    <Section>
      <div className="mx-auto max-w-6xl px-4">
        <h2 className="text-white text-3xl md:text-4xl font-semibold text-center">Why We Win</h2>
        <p className="text-white/70 text-center mt-2">What sets us apart from typical video shops.</p>
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {DIFFS.map((d) => (
            <Card key={d.title} className="bg-white/5 border-white/10">
              <CardHeader>
                <Badge className="bg-white/10 text-violet-200 rounded-full w-fit flex items-center gap-2">{d.icon}<span>{d.title}</span></Badge>
              </CardHeader>
              <CardContent className="-mt-4 text-white/80">{d.desc}</CardContent>
            </Card>
          ))}
        </div>
      </div>
    </Section>
  );
}
