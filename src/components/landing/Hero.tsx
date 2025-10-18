'use client';

import React from "react";
import { Star, ArrowRight, Search, Pencil, Video, Image, BadgeDollarSign } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import Section from "./Section";
import Glow from "./Glow";

export default function Hero() {
  return (
    <Section className="pt-36" id="home">
      <Glow className="top-[-30%]" opacity={0.8} />
      <div className="mx-auto max-w-6xl px-4 md:px-6 text-center relative">
        {/* Client avatars in circular arrangement */}
        <div className="absolute top-0 right-0 flex -space-x-3">
          {[1,2,3,4,5].map((i) => (
            <div key={i} className="w-10 h-10 rounded-full bg-gradient-to-br from-gray-400 to-gray-600 border-2 border-[color:var(--card)]" />
          ))}
        </div>
        
        <h1 className="text-5xl md:text-7xl font-semibold tracking-tight">
          <span className="text-[color:var(--muted-foreground)]">Get More Leads</span>
          <br />
          <span className="text-[color:var(--foreground)]">Using</span>
          <span className="text-[color:var(--foreground)] font-bold"> Quality Video Content</span>
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-[color:var(--muted-foreground)] text-lg">
          We help entrepreneurs and businesses with Done-For-You organic 
          content systems that generate leads on autopilot.
        </p>

        <div className="mt-8 flex items-center justify-center gap-4">
          <Button 
            size="lg" 
            className="rounded-xl bg-[color:var(--primary)] text-[color:var(--primary-foreground)] text-base px-6 py-6 shadow-[0_8px_30px_rgba(59,130,246,0.3)]"
          >
            Book A Call <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>

        <div className="mt-8 flex items-center justify-center gap-2 text-[color:var(--foreground)]">
          <div className="flex -space-x-2">
            {[1,2,3,4,5].map((i) => (
              <div key={i} className="w-8 h-8 rounded-full bg-gradient-to-br from-gray-300 to-gray-500 border-2 border-[color:var(--card)]" />
            ))}
          </div>
          <p className="ml-3 font-medium">
            Loved by 500+ Businesses worldwide.<br />
            <span className="text-sm text-[color:var(--muted-foreground)]">Our Clients Speak for Us</span>
          </p>
        </div>

        {/* Process Steps */}
        <div className="mt-20">
          <Card className="relative bg-[#1a1b3d] bg-gradient-to-b from-[#1a1b3d] via-[#2a2a5a] to-[#1e1e40] border-[#2d2d60] backdrop-blur-sm overflow-hidden">
            {/* Purple Glow Effect */}
            <div className="absolute inset-0">
              <div className="absolute inset-0 bg-gradient-to-tr from-[#6d28d9]/20 via-transparent to-transparent" />
              <div className="absolute inset-0 bg-gradient-to-bl from-transparent via-[#3b82f6]/10 to-transparent" />
            </div>
            
            {/* Background Waves */}
            <div 
              className="absolute inset-0 bg-cover bg-center opacity-20"
              style={{
                background: `
                  linear-gradient(120deg, transparent 10%, #4c3494 45%, transparent 90%),
                  linear-gradient(240deg, transparent 10%, #2d3b87 55%, transparent 90%)
                `
              }}
            />
            
            <CardHeader className="relative border-b border-[#2d2d60] p-6">
              <div className="flex items-center gap-3">
                <Search className="h-5 w-5 text-[#4f46e5]" />
                <h3 className="text-lg font-medium text-white">How do you do it?</h3>
                <Badge className="ml-auto bg-[#2d2d60] text-[#a2a3ff] hover:bg-[#3d3d80]">
                  Ask
                </Badge>
              </div>
            </CardHeader>
            
            <CardContent className="relative p-0">
              <div className="divide-y divide-[color:var(--border)]/10">
                {[
                  { icon: Search, text: "Idea Analysis" },
                  { icon: Pencil, text: "Scripting" },
                  { icon: Video, text: "Video Edit" },
                  { icon: Image, text: "Thumbnail Design" },
                  { icon: BadgeDollarSign, text: "Post with SEO" },
                ].map((step, i) => (
                  <div 
                    key={i} 
                    className="group relative flex items-center gap-4 p-4 transition-all duration-300 hover:bg-[#2a2a5a]"
                  >
                    {/* Step Number */}
                    <div className="flex-none flex items-center justify-center w-8 h-8 rounded-full bg-[#2d2d60] text-[#a2a3ff] transition-all duration-300 group-hover:scale-110 group-hover:bg-[#3d3d80] group-hover:text-white">
                      {i + 1}
                    </div>
                    
                    {/* Progress Line */}
                    <div className="flex-1 h-[2px] bg-[#2d2d60] group-hover:bg-[#3d3d80] transition-colors duration-300" />
                    
                    {/* Icon and Text */}
                    <div className="flex items-center gap-3 flex-none">
                      <step.icon className="h-5 w-5 text-[#8e8ea0] group-hover:text-[#a2a3ff] transition-colors duration-300" />
                      <span className="text-[#e2e2f4] group-hover:text-white transition-colors duration-300">
                        {step.text}
                      </span>
                    </div>

                    {/* Hover Indicator */}
                    <div className="absolute right-0 top-0 bottom-0 w-1 bg-transparent group-hover:bg-[#4c3494] transition-all duration-300" />
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </Section>
  );
}
