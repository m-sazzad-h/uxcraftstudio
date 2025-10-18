'use client';

import React from "react";
import { Sparkles } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Section from "./Section";

export default function Footer() {
  return (
    <footer className="relative border-t border-white/10 bg-black/80">
      <div className="mx-auto max-w-6xl px-4 md:px-6 py-10 grid md:grid-cols-3 gap-8">
        <div>
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-xl bg-white/10 grid place-items-center">
              <Sparkles className="h-4 w-4 text-violet-300" />
            </div>
            <span className="font-semibold tracking-tight text-white">MZ MEDIA</span>
          </div>
          <p className="text-white/60 mt-3">Video that looks premium and sells. London · Dhaka · Remote</p>
        </div>
        <div className="text-white/70 text-sm">
          <p className="font-semibold text-white mb-3">Links</p>
          <ul className="space-y-2">
            <li><a href="#work" className="hover:text-white">Work</a></li>
            <li><a href="#services" className="hover:text-white">Services</a></li>
            <li><a href="#process" className="hover:text-white">Process</a></li>
            <li><a href="#contact" className="hover:text-white">Contact</a></li>
          </ul>
        </div>
        <div className="text-white/70 text-sm">
          <p className="font-semibold text-white mb-3">Newsletter</p>
          <div className="flex gap-2">
            <Input placeholder="your@email.com" className="bg-black/30 border-white/15 text-white placeholder:text-white/40" />
            <Button>Join</Button>
          </div>
          <p className="text-xs mt-2">By subscribing, you agree to our privacy policy.</p>
        </div>
      </div>
      <div className="border-t border-white/10 py-4 text-center text-xs text-white/50">© {new Date().getFullYear()} MZ MEDIA. All rights reserved.</div>
    </footer>
  );
}
