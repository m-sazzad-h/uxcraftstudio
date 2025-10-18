'use client';

import React from "react";
import { PlayCircle } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Section from "./Section";
import { WORK } from "./constants";

export default function WorkGrid() {
  return (
    <Section id="work">
      <div className="mx-auto max-w-6xl px-4">
        <div className="flex items-end justify-between">
          <div>
            <h2 className="text-white text-3xl md:text-4xl font-semibold">Some of Our Recent Work</h2>
            <p className="text-white/70 mt-2">A taste of projects driving results for clients across niches.</p>
          </div>
          <button className="bg-white/10 text-white hover:bg-white/20 rounded-2xl px-3 py-2">See All</button>
        </div>
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {WORK.map((w) => (
            <Card key={w.title} className="group bg-white/5 border-white/10 overflow-hidden">
              <div className="relative">
                <img src={w.thumb} className="h-44 w-full object-cover transition-transform duration-500 group-hover:scale-105" />
                <Badge className="absolute bottom-3 left-3 rounded-full bg-black/70 text-violet-200 backdrop-blur">{w.metric}</Badge>
              </div>
              <CardContent className="p-5">
                <div className="flex items-center justify-between">
                  <p className="text-white font-medium">{w.title}</p>
                  <PlayCircle className="h-5 w-5 text-white/70" />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </Section>
  );
}
