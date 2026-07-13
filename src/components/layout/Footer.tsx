import Link from "next/link";
import { Tent, MapPin, Phone, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground py-16 border-t border-primary/20">
      <div className="container mx-auto px-4 md:px-8 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="space-y-6">
            <Link href="/" className="flex items-center gap-2 group w-fit">
              <div className="bg-white text-primary p-2 rounded-xl shadow-soft">
                <Tent size={24} />
              </div>
              <span className="text-2xl font-extrabold tracking-tight text-white">
                Ejaas<span className="text-accent">House</span>
              </span>
            </Link>
            <p className="text-sm text-primary-foreground/80 leading-relaxed">
              Your premium mountain retreat in Tapovan, Rishikesh. 
              Stay, explore, and connect in nature.
            </p>
            <div className="flex gap-4 font-semibold text-sm">
              <a href="#" className="hover:text-accent transition-colors">Instagram</a>
              <a href="#" className="hover:text-accent transition-colors">Facebook</a>
              <a href="#" className="hover:text-accent transition-colors">Twitter</a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-bold mb-6 text-lg">Explore</h3>
            <ul className="space-y-4 text-sm font-medium">
              <li>
                <Link href="/rooms" className="text-primary-foreground/80 hover:text-white transition-colors">Our Rooms</Link>
              </li>
              <li>
                <Link href="/cafe" className="text-primary-foreground/80 hover:text-white transition-colors">Mountain Café</Link>
              </li>
              <li>
                <Link href="/#parties" className="text-primary-foreground/80 hover:text-white transition-colors">Events & Experiences</Link>
              </li>
            </ul>
          </div>

          {/* Legal & Info */}
          <div>
            <h3 className="text-white font-bold mb-6 text-lg">Information</h3>
            <ul className="space-y-4 text-sm font-medium">
              <li>
                <Link href="/contact" className="text-primary-foreground/80 hover:text-white transition-colors">Contact Us</Link>
              </li>
              <li>
                <a href="#" className="text-primary-foreground/80 hover:text-white transition-colors">Privacy Policy</a>
              </li>
              <li>
                <a href="#" className="text-primary-foreground/80 hover:text-white transition-colors">Terms of Service</a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-bold mb-6 text-lg">Reach Us</h3>
            <ul className="space-y-4 text-sm font-medium">
              <li className="flex items-start gap-3 text-primary-foreground/80 hover:text-white transition-colors">
                <MapPin size={18} className="text-accent shrink-0 mt-0.5" />
                <span>Tapovan, Rishikesh,<br/>Uttarakhand 249192, India</span>
              </li>
              <li className="flex items-center gap-3 text-primary-foreground/80 hover:text-white transition-colors">
                <Phone size={18} className="text-accent shrink-0" />
                <a href="tel:+919876543210">+91 98765 43210</a>
              </li>
              <li className="flex items-center gap-3 text-primary-foreground/80 hover:text-white transition-colors">
                <Mail size={18} className="text-accent shrink-0" />
                <a href="mailto:hello@ejaashouse.com">hello@ejaashouse.com</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-white/10 text-center text-sm text-primary-foreground/60 flex flex-col md:flex-row justify-between items-center gap-4">
          <p>© {new Date().getFullYear()} Ejaas House. All rights reserved.</p>
          <p>Designed for the modern traveler.</p>
        </div>
      </div>
    </footer>
  );
}
