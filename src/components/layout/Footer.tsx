import Link from "next/link";
import { Tent, MapPin, Phone, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-zinc-950 text-zinc-300 py-16 border-t border-zinc-800">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="space-y-6">
            <Link href="/" className="flex items-center gap-2 group w-fit">
              <div className="bg-primary text-primary-foreground p-2 rounded-xl">
                <Tent size={24} />
              </div>
              <span className="text-2xl font-bold tracking-tight text-white">
                Ejaas<span className="text-primary">House</span>
              </span>
            </Link>
            <p className="text-sm text-zinc-400">
              Your premium travel destination in Tapovan, Rishikesh. 
              Stay, Party, Explore, and meet amazing people.
            </p>
            <div className="flex gap-4 font-semibold text-sm">
              <a href="#" className="hover:text-primary transition-colors">Instagram</a>
              <a href="#" className="hover:text-primary transition-colors">Facebook</a>
              <a href="#" className="hover:text-primary transition-colors">X (Twitter)</a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-6">Explore</h3>
            <ul className="space-y-4 text-sm">
              <li>
                <Link href="/rooms" className="hover:text-primary transition-colors">Our Rooms</Link>
              </li>
              <li>
                <Link href="/cafe" className="hover:text-primary transition-colors">Mountain Café</Link>
              </li>
              <li>
                <Link href="/#parties" className="hover:text-primary transition-colors">Weekend Parties</Link>
              </li>
              <li>
                <Link href="/#experiences" className="hover:text-primary transition-colors">Experiences</Link>
              </li>
            </ul>
          </div>

          {/* Legal & Info */}
          <div>
            <h3 className="text-white font-semibold mb-6">Information</h3>
            <ul className="space-y-4 text-sm">
              <li>
                <Link href="/contact" className="hover:text-primary transition-colors">Contact Us</Link>
              </li>
              <li>
                <Link href="/contact#faq" className="hover:text-primary transition-colors">FAQ</Link>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold mb-6">Reach Us</h3>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-primary shrink-0 mt-0.5" />
                <span>Tapovan, Rishikesh,<br/>Uttarakhand 249192, India</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-primary shrink-0" />
                <span>+91 98765 43210</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-primary shrink-0" />
                <span>hello@ejaashouse.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-zinc-800 text-center text-sm text-zinc-500 flex flex-col md:flex-row justify-between items-center gap-4">
          <p>© {new Date().getFullYear()} Ejaas House. All rights reserved.</p>
          <p>Designed for premium travelers.</p>
        </div>
      </div>
    </footer>
  );
}
