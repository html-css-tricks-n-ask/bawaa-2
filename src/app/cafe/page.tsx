"use client";

import Image from "next/image";
import { Coffee, Pizza, Leaf, Clock, MapPin } from "lucide-react";
import { motion } from "framer-motion";
import { FADE_UP, STAGGER_CONTAINER, SLOW_ZOOM } from "@/lib/animations";
import { YouTubeVideoBackground } from "@/components/shared/YouTubeVideoBackground";

export default function CafePage() {
  const menuCategories = [
    {
      title: "Artisan Coffee",
      icon: Coffee,
      image: "https://images.unsplash.com/photo-1497935586351-b67a49e012bf?q=80&w=1000&auto=format&fit=crop",
      items: [
        { name: "Himalayan Pour Over", price: "₹250", desc: "Single origin estate beans, manual brew." },
        { name: "Cortado", price: "₹200", desc: "Double ristretto with textured milk." },
        { name: "Iced Vanilla Oat Latte", price: "₹300", desc: "House-made vanilla syrup, premium oat milk." },
        { name: "Cold Brew Batch", price: "₹220", desc: "Steeped for 18 hours, served over ice." }
      ]
    },
    {
      title: "Wood-Fired Pizza",
      icon: Pizza,
      image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=1000&auto=format&fit=crop",
      items: [
        { name: "Margherita Sourdough", price: "₹450", desc: "San Marzano tomatoes, fresh mozzarella, basil." },
        { name: "Truffle Mushroom", price: "₹650", desc: "Wild mushrooms, truffle oil, parmesan." },
        { name: "The Tapovan Veggie", price: "₹550", desc: "Locally sourced bell peppers, olives, jalapeños." },
        { name: "Four Cheese", price: "₹600", desc: "Mozzarella, gorgonzola, parmesan, ricotta." }
      ]
    },
    {
      title: "Healthy Bowls",
      icon: Leaf,
      image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=1000&auto=format&fit=crop",
      items: [
        { name: "Acai Berry Bowl", price: "₹450", desc: "Amazonian acai, house granola, fresh berries." },
        { name: "Buddha Bowl", price: "₹350", desc: "Quinoa, roasted sweet potato, kale, tahini." },
        { name: "Avocado Sourdough Toast", price: "₹300", desc: "Smashed avocado, cherry tomatoes, microgreens." },
        { name: "Protein Smoothie", price: "₹250", desc: "Banana, peanut butter, raw cocoa, almond milk." }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Cinematic Video Hero */}
      <section className="relative h-[60vh] w-full flex items-end justify-start overflow-hidden bg-black">
        <YouTubeVideoBackground videoId="J3FSrjt3mMs" startTime={10} />
        <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/85 via-black/30 to-black/10" />
        <div className="absolute inset-0 z-10 bg-gradient-to-r from-black/40 to-transparent" />
        
        <motion.div 
          variants={STAGGER_CONTAINER}
          initial="hidden"
          animate="show"
          className="relative z-20 container mx-auto px-4 md:px-8 max-w-7xl pb-14 pt-28"
        >
          <motion.div variants={FADE_UP} className="inline-flex items-center justify-center bg-accent text-white px-4 py-2 rounded-full mb-4 text-sm font-bold gap-2">
            <Coffee size={16} /> Open Daily 8AM — 11PM
          </motion.div>
          <motion.h1 variants={FADE_UP} className="text-5xl md:text-6xl font-extrabold text-white mb-4 tracking-tight drop-shadow-lg">
            The Mountain Café
          </motion.h1>
          <motion.p variants={FADE_UP} className="text-lg text-white/80 max-w-xl font-medium">
            Where local ingredients meet culinary artistry in the Himalayas.
          </motion.p>
        </motion.div>

        {/* Bottom fade */}
        <div className="absolute bottom-0 left-0 right-0 h-20 z-20 bg-gradient-to-t from-background to-transparent" />
      </section>

      {/* Philosophy Section */}
      <section className="py-10 bg-white border-b border-border shadow-sm relative z-20">
        <div className="container mx-auto px-4 text-center">
          <motion.div 
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            variants={STAGGER_CONTAINER}
            className="flex flex-col md:flex-row justify-center items-center gap-6 md:gap-12 text-muted-foreground font-bold"
          >
            <motion.div variants={FADE_UP} className="flex items-center gap-2">
              <Clock size={20} className="text-primary" />
              <span>Open Daily: 8:00 AM - 11:00 PM</span>
            </motion.div>
            <motion.div variants={FADE_UP} className="flex items-center gap-2">
              <MapPin size={20} className="text-primary" />
              <span>Inside Ejaas House, Tapovan</span>
            </motion.div>
            <motion.div variants={FADE_UP} className="flex items-center gap-2">
              <Leaf size={20} className="text-primary" />
              <span>Locally Sourced Ingredients</span>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Menu Section */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4 md:px-8 max-w-6xl">
          <motion.div 
            variants={STAGGER_CONTAINER}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            className="flex flex-col gap-12"
          >
            {menuCategories.map((category) => (
              <motion.div 
                variants={FADE_UP}
                key={category.title}
                className="bg-card rounded-[2rem] shadow-soft overflow-hidden flex flex-col md:flex-row border border-border group hover:shadow-soft-lg hover:-translate-y-2 transition-all duration-300"
              >
                
                {/* Image Side */}
                <div className="w-full md:w-5/12 relative h-[250px] md:h-auto overflow-hidden">
                  <Image 
                    src={category.image} 
                    alt={category.title} 
                    fill 
                    className="object-cover group-hover:scale-105 transition-transform duration-500" 
                  />
                  <div className="absolute top-4 left-4 bg-white p-3 rounded-2xl shadow-soft text-primary">
                    <category.icon size={28} />
                  </div>
                  <h2 className="absolute bottom-4 left-4 text-3xl font-extrabold text-white shadow-black drop-shadow-md">
                    {category.title}
                  </h2>
                </div>

                {/* Menu Side */}
                <div className="w-full md:w-7/12 p-8 md:p-10">
                  <div className="flex flex-col gap-6">
                    {category.items.map((item, i) => (
                      <div key={i} className="flex gap-4 group/item cursor-default">
                        <div className="flex-grow">
                          <div className="flex justify-between items-baseline mb-1">
                            <h4 className="text-lg font-bold text-foreground group-hover/item:text-primary transition-colors">{item.name}</h4>
                            <div className="flex-grow border-b-2 border-dotted border-border mx-4 relative top-[-6px] hidden sm:block" />
                            <span className="text-lg font-bold text-primary shrink-0">{item.price}</span>
                          </div>
                          <p className="text-muted-foreground text-sm font-medium">{item.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
}
