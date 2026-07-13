"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { MapPin, ArrowRight, PlayCircle } from "lucide-react";
import Image from "next/image";
import { STAGGER_CONTAINER, FADE_UP } from "@/lib/animations";
import { YouTubeVideoBackground } from "@/components/shared/YouTubeVideoBackground";

export function Hero() {
  return (
    <section className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-black">
      
      {/* Cinematic YouTube Video Background */}
      <YouTubeVideoBackground videoId="sxCmho4ZtW0" startTime={5} />
      
      {/* Cinematic Gradient Overlays */}
      <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/80 via-black/30 to-black/20" />
      <div className="absolute inset-0 z-10 bg-gradient-to-r from-black/50 via-transparent to-transparent" />

      {/* Content */}
      <div className="container mx-auto px-4 md:px-8 max-w-7xl relative z-20 pt-28 pb-12">
        <motion.div 
          variants={STAGGER_CONTAINER}
          initial="hidden"
          animate="show"
          className="flex flex-col items-start text-left max-w-3xl"
        >
          <motion.div variants={FADE_UP} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm text-sm font-bold text-white mb-6 shadow-sm border border-white/20">
            <MapPin size={16} /> Tapovan, Rishikesh, Uttarakhand
          </motion.div>
          
          <motion.h1 variants={FADE_UP} className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-white mb-6 leading-[1.05] tracking-tight drop-shadow-lg">
            The Ultimate <br />
            <span className="text-accent">Travel Community.</span>
          </motion.h1>
          
          <motion.p variants={FADE_UP} className="text-lg md:text-xl text-white/85 mb-10 max-w-xl leading-relaxed font-medium">
            A premium space to stay, work remotely, and experience the vibrant mountain culture of Rishikesh.
          </motion.p>
          
          <motion.div variants={FADE_UP} className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button asChild size="lg" className="rounded-2xl h-14 px-8 text-lg font-bold shadow-soft-lg transition-all w-full sm:w-auto bg-accent hover:bg-accent/90 text-white border-accent">
                <Link href="/rooms" className="flex items-center gap-2">
                  Book Your Stay <ArrowRight size={20} />
                </Link>
              </Button>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button asChild size="lg" variant="outline" className="rounded-2xl h-14 px-8 text-lg font-bold bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white/20 transition-all shadow-soft w-full sm:w-auto">
                <Link href="#parties" className="flex items-center gap-2">
                  <PlayCircle size={20} /> Explore Vibe
                </Link>
              </Button>
            </motion.div>
          </motion.div>

          {/* Social Proof */}
          <motion.div variants={FADE_UP} className="mt-12 flex items-center gap-4">
            <div className="flex -space-x-3">
              {[11, 12, 13, 14].map((i) => (
                <div key={i} className="w-10 h-10 rounded-full border-2 border-white/50 overflow-hidden relative">
                  <Image src={`https://loremflickr.com/100/100/face?lock=${i}`} alt="Guest" fill className="object-cover" />
                </div>
              ))}
            </div>
            <div className="text-sm">
              <p className="font-bold text-white">Loved by 10k+ Travelers</p>
              <p className="text-white/70 font-medium">Rated 4.9/5 on Google</p>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom fade for smooth transition into next section */}
      <div className="absolute bottom-0 left-0 right-0 h-32 z-20 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
}
