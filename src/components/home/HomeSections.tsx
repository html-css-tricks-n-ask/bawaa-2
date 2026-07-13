"use client";

import { useState } from "react";
import Image from "next/image";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Users, Music, Mountain, Coffee, ArrowRight, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { FADE_UP, STAGGER_CONTAINER, SCALE_UP } from "@/lib/animations";

export function AboutSection() {
  const [isStoryOpen, setIsStoryOpen] = useState(false);

  return (
    <section className="py-20 bg-background relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-8 max-w-7xl">
        <motion.div 
          variants={STAGGER_CONTAINER}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid lg:grid-cols-2 gap-12 items-center"
        >
          
          <motion.div variants={FADE_UP} className="order-2 lg:order-1 relative">
            <div className="relative h-[500px] lg:h-[600px] w-full rounded-[2rem] overflow-hidden shadow-soft-lg border-4 border-white">
              <Image 
                src="https://images.unsplash.com/photo-1534430480872-3498386e7856?q=80&w=2000&auto=format&fit=crop"
                alt="Backpackers hiking in nature"
                fill
                className="object-cover"
              />
            </div>
            
            <motion.div 
              variants={SCALE_UP}
              whileHover={{ y: -5, scale: 1.02 }}
              className="absolute -bottom-6 -left-4 md:-left-8 bg-white p-6 rounded-2xl shadow-soft-lg max-w-[280px] border border-border cursor-pointer transition-all duration-300 group"
            >
              <div className="flex items-center gap-3 mb-2">
                <div className="bg-primary/10 p-2 rounded-xl text-primary group-hover:scale-110 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                  <Users size={24} />
                </div>
                <h4 className="font-bold text-lg text-foreground">A Global Tribe</h4>
              </div>
              <p className="text-sm text-muted-foreground font-medium">Meet travelers and digital nomads from around the world.</p>
            </motion.div>
          </motion.div>

          <div className="order-1 lg:order-2">
            <motion.div variants={FADE_UP}>
              <SectionHeading 
                title="More Than Just A Stay." 
                subtitle="Welcome to Ejaas House, a premium travel community where modern comfort meets the raw beauty of the Himalayas."
                centered={false}
              />
            </motion.div>

            <motion.div variants={STAGGER_CONTAINER} className="grid sm:grid-cols-2 gap-6 mt-10">
              {[
                { icon: Users, title: "Curated Community", desc: "Digital nomads & backpackers." },
                { icon: Music, title: "Epic Events", desc: "Live acoustics & weekend parties." },
                { icon: Mountain, title: "Raw Adventure", desc: "Rafting, trekking, and yoga." },
                { icon: Coffee, title: "Artisan Café", desc: "Specialty coffee & healthy bowls." }
              ].map((feature, i) => (
                <motion.div 
                  variants={FADE_UP} 
                  key={i} 
                  whileHover={{ scale: 1.03, y: -2 }}
                  className="flex gap-4 items-start p-4 rounded-2xl bg-secondary/50 hover:bg-white hover:shadow-soft-lg transition-all duration-300 cursor-default border border-transparent hover:border-border group"
                >
                  <div className="text-primary mt-1 group-hover:scale-110 transition-transform duration-300">
                    <feature.icon size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-base mb-1 text-foreground">{feature.title}</h4>
                    <p className="text-muted-foreground text-sm font-medium">{feature.desc}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            <motion.div variants={FADE_UP} className="mt-10">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="inline-block">
                <Button 
                  onClick={() => setIsStoryOpen(true)} 
                  size="lg" 
                  className="rounded-2xl px-8 shadow-soft h-14 font-bold text-lg transition-all cursor-pointer"
                >
                  Discover Our Story
                </Button>
              </motion.div>
            </motion.div>
          </div>

        </motion.div>
      </div>

      {/* Story Modal */}
      <AnimatePresence>
        {isStoryOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsStoryOpen(false)}
              className="absolute inset-0 bg-black/60 backdrop-blur-md"
            />

            {/* Modal Body */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 350 }}
              className="relative w-full max-w-2xl bg-card rounded-[2.5rem] overflow-hidden border border-border shadow-soft-lg z-10 flex flex-col md:flex-row"
            >
              {/* Close Button */}
              <button
                onClick={() => setIsStoryOpen(false)}
                className="absolute top-4 right-4 z-20 bg-white/80 hover:bg-white text-foreground p-2 rounded-full shadow-soft transition-colors cursor-pointer border border-border"
              >
                <X size={20} />
              </button>

              {/* Side Image */}
              <div className="relative w-full md:w-1/2 h-48 md:h-auto min-h-[250px] overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1534430480872-3498386e7856?q=80&w=1000&auto=format&fit=crop"
                  alt="Ejaas House Story"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/30 to-transparent" />
              </div>

              {/* Content */}
              <div className="p-8 md:w-1/2 flex flex-col justify-center">
                <span className="text-xs font-extrabold tracking-widest text-primary uppercase mb-2">Our Story</span>
                <h3 className="text-3xl font-extrabold text-foreground mb-4">Born in the Himalayas</h3>
                <div className="space-y-4 text-muted-foreground text-sm font-medium leading-relaxed max-h-[300px] overflow-y-auto pr-2">
                  <p>
                    Ejaas House started as a dream by a small group of wanderers who fell in love with the mystical energy of Rishikesh. We wanted to build more than a hotel—we wanted a warm haven for creators, nomads, and adventure seekers.
                  </p>
                  <p>
                    Nestled in the lush hills of Tapovan, Ejaas House combines modern, fast fiber-internet comfort with the soulful vibe of a mountain retreat. Here, you wake up to the clean Himalayan air, grab an artisan pour-over, and collaborate with nomads from every corner of the planet.
                  </p>
                  <p>
                    Whether you are here to white-water raft down the Ganges, dive deep into yoga, or code your startup with valley views, you are part of the Ejaas tribe.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}

export function CafeSection() {
  return (
    <section className="py-20 bg-background overflow-hidden">
      <div className="container mx-auto px-4 md:px-8 max-w-7xl">
        <motion.div 
          variants={STAGGER_CONTAINER}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid lg:grid-cols-2 gap-12 items-center"
        >
          
          <div className="order-2 lg:order-1 relative">
            <div className="grid grid-cols-2 gap-4">
              <motion.div variants={FADE_UP} whileHover={{ scale: 1.03, rotate: -2 }} className="relative h-[250px] lg:h-[350px] rounded-[2rem] overflow-hidden shadow-soft-lg border-2 border-white transition-all duration-500 cursor-pointer">
                <Image src="https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=1000&auto=format&fit=crop" alt="Pizza" fill className="object-cover" />
              </motion.div>
              <motion.div variants={FADE_UP} whileHover={{ scale: 1.03, rotate: 2 }} className="relative h-[250px] lg:h-[350px] rounded-[2rem] overflow-hidden shadow-soft-lg border-2 border-white mt-8 transition-all duration-500 cursor-pointer">
                <Image src="https://images.unsplash.com/photo-1497935586351-b67a49e012bf?q=80&w=1000&auto=format&fit=crop" alt="Coffee" fill className="object-cover" />
              </motion.div>
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <motion.div variants={FADE_UP}>
              <SectionHeading 
                title="The Mountain Café." 
                subtitle="Fuel your adventures with artisan coffee, wood-fired pizzas, healthy bowls, and weekend specials."
                centered={false}
              />
            </motion.div>
            
            <motion.div variants={STAGGER_CONTAINER} className="flex flex-wrap gap-3 mt-8 mb-10">
              {['Artisan Coffee', 'Wood-fired Pizza', 'Healthy Bowls', 'Smoothies', 'Vegan Options'].map((item, i) => (
                <motion.span 
                  variants={SCALE_UP} 
                  whileHover={{ scale: 1.05, y: -2 }}
                  key={i} 
                  className="px-4 py-2 rounded-xl bg-secondary text-foreground font-bold text-sm shadow-sm border border-border cursor-pointer transition-colors hover:bg-primary hover:text-white"
                >
                  {item}
                </motion.span>
              ))}
            </motion.div>

            <motion.div variants={FADE_UP}>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="inline-block">
                <Button asChild size="lg" className="rounded-2xl shadow-soft px-8 h-14 font-bold text-lg transition-all">
                  <Link href="/cafe" className="flex items-center gap-2">View Full Menu <ArrowRight size={20}/></Link>
                </Button>
              </motion.div>
            </motion.div>
          </div>

        </motion.div>
      </div>
    </section>
  );
}

export function EventsSection() {
  const events = [
    { title: "Weekend DJ Parties", image: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?q=80&w=1000&auto=format&fit=crop", desc: "Dance under the stars." },
    { title: "Acoustic Nights", image: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?q=80&w=1000&auto=format&fit=crop", desc: "Soulful music sessions." },
    { title: "Community Bonfire", image: "https://images.unsplash.com/photo-1537225228614-56cc3556d7ed?q=80&w=1000&auto=format&fit=crop", desc: "Stories and marshmallows." },
    { title: "Mountain Treks", image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=1000&auto=format&fit=crop", desc: "Explore the Himalayas." }
  ];

  return (
    <section className="py-20 bg-secondary/30" id="parties">
      <div className="container mx-auto px-4 md:px-8 max-w-7xl">
        <motion.div 
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          variants={FADE_UP}
        >
          <SectionHeading 
            title="Experience the Vibe." 
            subtitle="Ejaas House comes alive with our curated community events, parties, and adventures."
            centered={true}
          />
        </motion.div>

        <motion.div 
          variants={STAGGER_CONTAINER}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12"
        >
          {events.map((event, i) => (
            <motion.div 
              variants={FADE_UP}
              whileHover={{ y: -10, scale: 1.02 }}
              key={i} 
              className="group relative h-[300px] rounded-[2rem] overflow-hidden cursor-pointer shadow-soft hover:shadow-soft-lg transition-all duration-500 border border-border"
            >
              <Image src={event.image} alt={event.title} fill className="object-cover group-hover:scale-110 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent mix-blend-multiply" />
              <div className="absolute bottom-0 left-0 p-6 w-full translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                <h3 className="text-xl font-bold text-white mb-1 group-hover:text-accent transition-colors">{event.title}</h3>
                <p className="text-white/90 text-sm font-medium opacity-80 group-hover:opacity-100 transition-opacity">{event.desc}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
