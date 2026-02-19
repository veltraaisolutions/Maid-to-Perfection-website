"use client";
import React from "react";
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import { ABOUT_DATA } from "@/data/about";

export default function AboutSection() {
  return (
    <section className="py-16 md:py-24 w-full max-w-6xl mx-auto px-4">
      <div className="flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center lg:text-left"
        >
          <p className="text-brand font-black uppercase tracking-[0.3em] text-xs mb-4">
            About Our Company
          </p>
          <h2 className="text-4xl md:text-6xl font-black uppercase italic tracking-tighter leading-tight mb-6 text-white">
            Professional. Reliable. <br />
            <span className="text-brand">Thorough.</span>
          </h2>

          {/* Top part of the client text */}
          <p className="text-muted-foreground text-base md:text-lg leading-relaxed mb-8 whitespace-pre-line">
            {ABOUT_DATA.bio}
          </p>

          {/* Client's "Services We offer" List */}
          <div className="mb-10">
            <h3 className="text-white font-bold uppercase tracking-widest text-sm mb-6 underline decoration-brand underline-offset-8">
              Services We offer:
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
              {ABOUT_DATA.points.map((point, i) => (
                <div
                  key={i}
                  className="flex items-center gap-3 bg-white/5 p-3 rounded-xl border border-white/10"
                >
                  <CheckCircle2
                    size={18}
                    className="text-brand flex-shrink-0"
                  />
                  <span className="font-bold uppercase text-[10px] md:text-xs tracking-wider text-white">
                    {point}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom part of the client text */}
          <p className="text-muted-foreground text-base md:text-lg leading-relaxed mb-12 whitespace-pre-line">
            {ABOUT_DATA.footerBio}
          </p>

          {/* Stats Area */}
          <div className="flex flex-wrap justify-center lg:justify-start gap-8 pt-8 border-t border-white/10">
            {ABOUT_DATA.stats.map((stat, i) => (
              <div
                key={i}
                className="text-center lg:text-left"
              >
                <p className="text-3xl md:text-4xl font-black text-brand">
                  {stat.value}
                </p>
                <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
