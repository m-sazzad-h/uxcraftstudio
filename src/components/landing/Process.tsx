'use client';

import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import Section from "./Section";
import { STEPS } from "./constants";

export default function Process() {
  return (
    <Section id="process">
      <div className="mx-auto max-w-5xl px-4">
        <h2 className="text-white text-3xl md:text-4xl font-semibold text-center">Our Process</h2>
        <div className="mt-10 relative">
          <div className="absolute left-1/2 -translate-x-1/2 w-1 bg-gradient-to-b from-violet-500/60 to-fuchsia-500/60 h-full rounded-full hidden md:block" />
          <div className="space-y-10">
            {STEPS.map((s, i) => (
              <div key={s.k} className={"md:grid md:grid-cols-2 gap-8 items-center " + (i % 2 ? "md:text-left" : "md:text-right")}>
                <div className={i % 2 ? "order-2" : ""}>
                  <Card className="bg-white/5 border-white/10">
                    <CardContent className="p-6">
                      <div className="flex items-center gap-2 text-violet-300"><span className="font-mono text-sm">{s.k}</span>{s.icon}</div>
                      <h4 className="text-white text-xl font-semibold mt-2">{s.title}</h4>
                      <p className="text-white/70 mt-1">{s.desc}</p>
                    </CardContent>
                  </Card>
                </div>
                <div className={"hidden md:block " + (i % 2 ? "order-1" : "")}></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
