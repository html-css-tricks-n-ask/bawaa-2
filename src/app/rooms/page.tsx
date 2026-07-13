"use client";

import Image from "next/image";
import { Check, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { motion } from "framer-motion";
import { FADE_UP, STAGGER_CONTAINER } from "@/lib/animations";
import { YouTubeVideoBackground } from "@/components/shared/YouTubeVideoBackground";

export default function RoomsPage() {
  const rooms = [
    {
      id: "cabin",
      name: "Premium Mountain Cabin",
      price: "₹4,500 / night",
      description: "Perched on the edge of the valley, our mountain cabins offer unparalleled views of the Himalayas. Wake up to the sound of the Ganges and enjoy your morning coffee on a private wooden deck.",
      image: "https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?q=80&w=2000&auto=format&fit=crop",
      features: ["Private Deck", "King-size Bed", "En-suite Bathroom", "Valley Views", "Premium Toiletries", "Free Breakfast"]
    },
    {
      id: "private",
      name: "Cozy Private Suite",
      price: "₹3,200 / night",
      description: "Designed for couples and remote workers, this suite combines comfort with functionality. Features a dedicated workspace with high-speed internet and a plush queen bed.",
      image: "https://images.unsplash.com/photo-1566665797739-1674de7a421a?q=80&w=2000&auto=format&fit=crop",
      features: ["Queen-size Bed", "Work Desk", "Fiber WiFi", "Forest View", "En-suite Bathroom", "Room Service"]
    },
    {
      id: "dorm",
      name: "Luxury Mixed Dorm",
      price: "₹999 / night",
      description: "Backpacking doesn't mean compromising on comfort. Our luxury dorms feature custom-built wooden bunk beds with privacy curtains, ambient reading lights, and massive lockers.",
      image: "https://images.unsplash.com/photo-1555854877-bab0e564b8d5?q=80&w=2000&auto=format&fit=crop",
      features: ["Custom Bunk Beds", "Privacy Curtains", "Secure Lockers", "Air Conditioning", "Luxury Washrooms", "Community Access"]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      
      {/* Cinematic Video Hero */}
      <section className="relative h-[60vh] w-full flex items-end justify-start overflow-hidden bg-black">
        <YouTubeVideoBackground videoId="avD0YBWvYVU" startTime={3} />
        <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/85 via-black/30 to-black/10" />
        <div className="absolute inset-0 z-10 bg-gradient-to-r from-black/40 to-transparent" />
        
        <motion.div 
          variants={STAGGER_CONTAINER}
          initial="hidden"
          animate="show"
          className="relative z-20 container mx-auto px-4 md:px-8 max-w-7xl pb-14 pt-28"
        >
          <motion.p variants={FADE_UP} className="text-accent font-bold text-sm tracking-widest uppercase mb-3">Ejaas House — Tapovan, Rishikesh</motion.p>
          <motion.h1 variants={FADE_UP} className="text-5xl md:text-6xl font-extrabold text-white mb-4 tracking-tight drop-shadow-lg">
            Curated Stays.
          </motion.h1>
          <motion.p variants={FADE_UP} className="text-lg text-white/80 max-w-xl font-medium">
            Every room is a sanctuary designed to connect you with nature without compromising on modern comfort.
          </motion.p>
        </motion.div>

        {/* Bottom fade */}
        <div className="absolute bottom-0 left-0 right-0 h-20 z-20 bg-gradient-to-t from-background to-transparent" />
      </section>

      {/* Rooms List */}
      <div className="container mx-auto px-4 md:px-8 max-w-7xl pb-20 -mt-2">
        <motion.div 
          variants={STAGGER_CONTAINER}
          initial="hidden"
          animate="show"
          className="mt-12 flex flex-col gap-12"
        >
          {rooms.map((room) => (
            <motion.div 
              variants={FADE_UP}
              key={room.id}
              className="bg-card rounded-[2rem] shadow-soft overflow-hidden flex flex-col lg:flex-row border border-border group hover:shadow-soft-lg transition-all duration-500 hover:-translate-y-2"
            >
              
              {/* Image Side */}
              <div className="w-full lg:w-1/2 relative h-[300px] lg:h-auto overflow-hidden">
                <Image 
                  src={room.image} 
                  alt={room.name} 
                  fill 
                  className="object-cover group-hover:scale-110 transition-transform duration-700" 
                />
                <div className="absolute top-4 left-4 bg-white/95 backdrop-blur px-4 py-1.5 rounded-full shadow-sm text-primary font-bold">
                  {room.price}
                </div>
              </div>

              {/* Content Side */}
              <div className="w-full lg:w-1/2 p-8 md:p-10 flex flex-col justify-center">
                <h2 className="text-3xl font-extrabold text-foreground mb-4">{room.name}</h2>
                <p className="text-muted-foreground font-medium leading-relaxed mb-8">
                  {room.description}
                </p>

                <div className="grid grid-cols-2 gap-y-3 gap-x-4 mb-8">
                  {room.features.map((feature, i) => (
                    <div key={i} className="flex items-center gap-2 text-foreground">
                      <div className="text-primary shrink-0">
                        <Check size={18} strokeWidth={3} />
                      </div>
                      <span className="text-sm font-bold">{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-auto">
                  <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                    <Button asChild size="lg" className="rounded-2xl w-full sm:w-auto px-8 h-12 shadow-soft transition-all font-bold text-base">
                      <Link href={`/contact?room=${room.id}`} className="flex items-center justify-center gap-2">
                        Book Now <ArrowRight size={18} />
                      </Link>
                    </Button>
                  </motion.div>
                </div>
              </div>

            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
