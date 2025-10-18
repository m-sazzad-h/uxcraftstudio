'use client';

import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Send } from "lucide-react";
import Section from "./Section";
import Glow from "./Glow";

export default function LeadForm() {
  return (
    <Section id="contact">
      <Glow className="top-[-40%]" />
      <div className="mx-auto max-w-3xl px-4 text-center">
        <h2 className="text-white text-3xl md:text-4xl font-semibold">Ready to grow with video?</h2>
        <p className="text-white/70 mt-2">Tell us about your goals. We reply within 24h.</p>
        <Card className="bg-white/5 border-white/10 mt-8 text-left">
          <CardContent className="p-6 grid gap-4">
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="text-sm text-white/70">Name</label>
                <Input placeholder="Your full name" className="mt-1 bg-black/30 border-white/15 text-white placeholder:text-white/40" />
              </div>
              <div>
                <label className="text-sm text-white/70">Email</label>
                <Input type="email" placeholder="you@company.com" className="mt-1 bg-black/30 border-white/15 text-white placeholder:text-white/40" />
              </div>
            </div>
            <div>
              <label className="text-sm text-white/70">What do you need?</label>
              <Textarea rows={4} placeholder="Tell us about your channel/brand and goals..." className="mt-1 bg-black/30 border-white/15 text-white placeholder:text-white/40" />
            </div>
            <Button className="rounded-2xl w-fit"><Send className="mr-2 h-4 w-4" /> Send Inquiry</Button>
          </CardContent>
        </Card>
      </div>
    </Section>
  );
}
