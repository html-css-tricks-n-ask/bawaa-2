"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Wifi, Wind, Mountain, BedDouble, Users, CheckCircle, Coffee, Bath, Tv } from "lucide-react";
import Link from "next/link";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

const rooms = [
  {
    name: "Premium Mountain Cabin",
    description: "Our most luxurious offering. A standalone wooden cabin with panoramic views of the Himalayas, perfect for couples seeking romance and privacy.",
    price: "₹4,500",
    guests: "2 Guests",
    bed: "1 King Bed",
    amenities: ["Free High-Speed WiFi", "Air Conditioning", "Mountain View", "Private Balcony", "En-suite Bathroom", "Smart TV", "Mini Fridge", "Room Service"],
    images: [
      "https://loremflickr.com/1200/800/cabin,mountain?lock=13",
      "https://loremflickr.com/1200/800/hostel,dorm?lock=14",
      "https://loremflickr.com/1200/800/bedroom,cozy?lock=15",
      "https://loremflickr.com/1200/800/cabin,interior?lock=16"
    ]
  },
  {
    name: "Luxury Mixed Dorm (6 Bed)",
    description: "Redefining hostel stays. Our premium dorms feature custom-built pods with privacy curtains, individual reading lights, and massive lockers.",
    price: "₹999",
    guests: "1 Guest (per bed)",
    bed: "Single Bunk",
    amenities: ["Free High-Speed WiFi", "Air Conditioning", "Privacy Curtain", "Large Locker", "Reading Light", "Shared Luxury Bathroom", "Daily Housekeeping"],
    images: [
      "https://loremflickr.com/1200/800/hostel,lounge?lock=17",
      "https://loremflickr.com/1200/800/hostel,bunk?lock=18",
      "https://loremflickr.com/1200/800/hostel,room?lock=19",
      "https://loremflickr.com/1200/800/hostel,bed?lock=20"
    ]
  },
  {
    name: "Cozy Private Room",
    description: "Ideal for solo travelers or digital nomads looking for quiet and focus. Features a dedicated workspace and a beautiful view of the valley.",
    price: "₹3,200",
    guests: "1-2 Guests",
    bed: "1 Queen Bed",
    amenities: ["Free High-Speed WiFi", "Air Conditioning", "Work Desk", "Mountain View", "En-suite Bathroom", "Coffee Maker"],
    images: [
      "https://loremflickr.com/1200/800/bedroom,mountain?lock=21",
      "https://loremflickr.com/1200/800/bedroom,modern?lock=22",
      "https://loremflickr.com/1200/800/bedroom,wood?lock=23",
      "https://loremflickr.com/1200/800/bedroom,view?lock=24"
    ]
  }
];

export default function RoomsPage() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative h-[60vh] w-full flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://loremflickr.com/1200/800/cabin,mountain?lock=13"
            alt="Ejaas House Rooms"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>
        <div className="relative z-10 text-center text-white px-4">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-bold mb-4"
          >
            Stay with Us
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-xl md:text-2xl text-zinc-200"
          >
            Luxury dorms and private cabins in the heart of Tapovan.
          </motion.p>
        </div>
      </section>

      {/* Rooms List */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 md:px-8 max-w-6xl">
          <SectionHeading 
            title="Our Accommodations" 
            subtitle="Designed for comfort, built for community. Find your perfect space."
          />
          
          <div className="space-y-20 mt-16">
            {rooms.map((room, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                className="grid lg:grid-cols-2 gap-8 items-center bg-zinc-50 dark:bg-zinc-900/50 p-6 md:p-8 rounded-3xl"
              >
                {/* Image Carousel */}
                <div className="w-full relative rounded-2xl overflow-hidden">
                  <Carousel className="w-full">
                    <CarouselContent>
                      {room.images.map((img, idx) => (
                        <CarouselItem key={idx}>
                          <div className="relative h-[400px] w-full">
                            <Image src={img} alt={`${room.name} ${idx + 1}`} fill className="object-cover" />
                          </div>
                        </CarouselItem>
                      ))}
                    </CarouselContent>
                    <CarouselPrevious className="left-4" />
                    <CarouselNext className="right-4" />
                  </Carousel>
                </div>

                {/* Details */}
                <div className="flex flex-col h-full justify-center">
                  <div className="flex justify-between items-start mb-4">
                    <h2 className="text-3xl font-bold">{room.name}</h2>
                    <div className="text-right">
                      <span className="text-2xl font-bold text-primary">{room.price}</span>
                      <span className="text-sm text-muted-foreground block">/ night</span>
                    </div>
                  </div>
                  
                  <p className="text-muted-foreground text-lg mb-6">{room.description}</p>
                  
                  <div className="grid grid-cols-2 gap-4 mb-8 text-sm">
                    <div className="flex items-center gap-2"><Users size={18} className="text-primary"/> {room.guests}</div>
                    <div className="flex items-center gap-2"><BedDouble size={18} className="text-primary"/> {room.bed}</div>
                    <div className="flex items-center gap-2"><Wifi size={18} className="text-primary"/> Free High-Speed WiFi</div>
                    <div className="flex items-center gap-2"><Wind size={18} className="text-primary"/> Air Conditioning</div>
                  </div>

                  <div className="mb-8">
                    <h4 className="font-semibold mb-3">Room Features:</h4>
                    <div className="flex flex-wrap gap-2">
                      {room.amenities.map((amenity, idx) => (
                        <span key={idx} className="flex items-center gap-1.5 text-xs bg-white dark:bg-zinc-800 px-3 py-1.5 rounded-full border shadow-sm">
                          <CheckCircle size={12} className="text-primary" /> {amenity}
                        </span>
                      ))}
                    </div>
                  </div>

                  <Button asChild size="lg" className="w-full md:w-auto rounded-full shadow-lg">
                    <Link href={`/contact?room=${encodeURIComponent(room.name)}`}>Book Now</Link>
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Global Amenities */}
      <section className="py-24 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 md:px-8 text-center">
          <h2 className="text-4xl font-bold mb-12">Included With Every Stay</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { icon: Wifi, label: "Gigabit WiFi" },
              { icon: Coffee, label: "Cafe Access" },
              { icon: Bath, label: "Hot Showers 24/7" },
              { icon: Tv, label: "Lounge Area" },
            ].map((item, i) => (
              <div key={i} className="flex flex-col items-center gap-4">
                <div className="bg-white/10 p-4 rounded-full">
                  <item.icon size={32} />
                </div>
                <span className="font-semibold">{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
