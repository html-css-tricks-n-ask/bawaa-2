"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Tent } from "lucide-react";
import { STAGGER_CONTAINER, FADE_UP } from "@/lib/animations";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Rooms", href: "/rooms" },
  { name: "Café", href: "/cafe" },
  { name: "Contact", href: "/contact" },
];

export function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 w-full z-50 transition-all duration-300 backdrop-blur-md border-b border-border shadow-sm ${
        scrolled ? "bg-white/95 py-2" : "bg-white/90 py-4"
      }`}
    >
      <div className="container mx-auto px-4 md:px-8 flex items-center justify-between max-w-7xl">
        
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <div className="bg-primary text-white p-2 rounded-xl shadow-soft group-hover:scale-110 transition-transform duration-300">
            <Tent size={24} />
          </div>
          <span className="text-2xl font-bold tracking-tight text-foreground">
            Ejaas<span className="text-primary">House</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.name}
                href={link.href}
                className={`text-base font-bold transition-colors relative group py-2 ${
                  isActive ? "text-accent" : "text-foreground hover:text-primary"
                }`}
              >
                {link.name}
                {/* Animated Underline */}
                <span 
                  className={`absolute left-0 bottom-0 w-full h-[3px] rounded-full transition-transform duration-300 origin-left ${
                    isActive ? "bg-accent scale-x-100" : "bg-primary scale-x-0 group-hover:scale-x-100"
                  }`} 
                />
              </Link>
            );
          })}
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden p-2 text-foreground hover:bg-muted rounded-lg transition-colors"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="absolute top-full left-0 w-full bg-white border-b border-border shadow-xl p-6 flex flex-col gap-2 md:hidden"
          >
            <motion.div variants={STAGGER_CONTAINER} initial="hidden" animate="show" className="flex flex-col gap-2">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <motion.div variants={FADE_UP} key={link.name}>
                    <Link
                      href={link.href}
                      className={`block text-lg font-bold py-3 px-4 rounded-xl transition-colors ${
                        isActive ? "bg-accent/10 text-accent" : "text-foreground hover:bg-primary/10 hover:text-primary"
                      }`}
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {link.name}
                    </Link>
                  </motion.div>
                );
              })}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
