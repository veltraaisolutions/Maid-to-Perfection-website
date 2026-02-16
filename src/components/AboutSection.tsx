"use client";
/* eslint-disable @next/next/no-img-element */
import React from "react";
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import { ABOUT_DATA } from "@/data/about";

export default function AboutSection() {
  return (
    <section className="py-16 md:py-24 w-full max-w-6xl mx-auto px-4">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        {/* Left: Image */}
        {/* <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="relative z-10 rounded-[3rem] overflow-hidden border-2 border-border/50 aspect-[4/5]">
            <img
              src={ABOUT_DATA.imageUrl}
              alt={ABOUT_DATA.ownerName}
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
            />
          </div>
          <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-brand/10 border border-brand/20 rounded-[2rem] -z-0 hidden md:block" />
        </motion.div> 
        */}

        {/* Right: Content - Adjusted col-span to center if image is gone */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="lg:col-span-2 max-w-3xl mx-auto text-center lg:text-left"
        >
          <p className="text-brand font-black uppercase tracking-[0.3em] text-xs mb-4">
            About Our Company
          </p>
          <h2 className="text-4xl md:text-6xl font-black uppercase italic tracking-tighter leading-tight mb-6">
            Professional. Reliable. <br />
            <span className="text-brand">Thorough.</span>
          </h2>

          <p className="text-muted-foreground text-base md:text-lg leading-relaxed mb-8">
            {ABOUT_DATA.bio}
          </p>

          {/* Trust Points Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10 text-left">
            {ABOUT_DATA.points.map((point, i) => (
              <div
                key={i}
                className="flex items-center gap-3 bg-secondary/20 p-3 rounded-xl border border-border/40"
              >
                <CheckCircle2
                  size={18}
                  className="text-brand flex-shrink-0"
                />
                <span className="font-bold uppercase text-[10px] md:text-xs tracking-wider">
                  {point}
                </span>
              </div>
            ))}
          </div>

          {/* Stats Area */}
          <div className="flex flex-wrap justify-center lg:justify-start gap-8 pt-8 border-t border-border/50">
            {ABOUT_DATA.stats.map((stat, i) => (
              <div
                key={i}
                className="text-center lg:text-left"
              >
                <p className="text-3xl font-black text-brand">{stat.value}</p>
                <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>

          {/* Signature - COMMENTED OUT AS PER CLIENT REQUEST */}
          {/* <div className="mt-8">
             <p className="text-2xl font-black italic uppercase tracking-tighter leading-none">
               {ABOUT_DATA.ownerName}
             </p>
          </div> 
          */}
        </motion.div>
      </div>
    </section>
  );
}
