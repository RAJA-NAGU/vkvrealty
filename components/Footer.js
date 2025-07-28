'use client';

import Image from 'next/image';
import Link from 'next/link';
import logo from '@/images/logo-dark.svg';
import { Phone, Mail, MapPin, Facebook, Instagram, Linkedin, Youtube } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#F15B26] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Logo Section */}
          <div className="lg:col-span-1">
            <Image 
              src={logo}
              alt="VKV Realty 1985"
              className="sm:w-[200px] w-[150px] sm:h-[100px] h-[75px]"
            />
          </div>

          {/* Links Section */}
          <div>
            <h3 className="text-xl font-bold mb-6">Links</h3>
            <div className="space-y-4">
              <Link 
                href="/" 
                className="block hover:text-white/80 transition-colors duration-200"
              >
                Home
              </Link>
              <Link 
                href="/about" 
                className="block hover:text-white/80 transition-colors duration-200"
              >
                About
              </Link>
              <Link 
                href="/project" 
                className="block hover:text-white/80 transition-colors duration-200"
              >
                Project
              </Link>
              <Link 
                href="/careers" 
                className="block hover:text-white/80 transition-colors duration-200"
              >
                Careers
              </Link>
              <Link 
                href="/contact" 
                className="block hover:text-white/80 transition-colors duration-200"
              >
                Contact
              </Link>
            </div>
          </div>

          {/* Project Section */}
          <div>
            <h3 className="text-xl font-bold mb-6">Project</h3>
            <div className="space-y-4">
              <Link 
                href="/project" 
                className="block hover:text-white/80 transition-colors duration-200"
              >
                Karun Garden
              </Link>
              <Link 
                href="/project" 
                className="block hover:text-white/80 transition-colors duration-200"
              >
                Naval Nagar
              </Link>
              <Link 
                href="/project" 
                className="block hover:text-white/80 transition-colors duration-200"
              >
                Sree Virutcham Nagar
              </Link>
            </div>
          </div>

          {/* Contact Us Section */}
          <div>
            <h3 className="text-xl font-bold mb-6">Contact Us</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <Phone className="w-5 h-5 mt-0.5 flex-shrink-0" />
                <Link 
                  href="tel:+9187788-99100" 
                  className="hover:text-white/80 transition-colors duration-200"
                >
                 (+91) 87788-99100
                </Link>
              </div>
              
              <div className="flex items-start space-x-3">
                <Mail className="w-5 h-5 mt-0.5 flex-shrink-0" />
                <Link 
                  href="mailto:info@vkvrealty.com" 
                  className="hover:text-white/80 transition-colors duration-200 break-all"
                >
                  info@vkvrealty.com
                </Link>
              </div>
              
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 mt-0.5 flex-shrink-0" />
                <Link
                  target="_blank" 
                  href="https://maps.app.goo.gl/oXTjPR8GF64zKa6k8" 
                  className="hover:text-white/80 transition-colors duration-200 break-all"
                >
                  <address className="not-italic leading-relaxed">
                    E1, Vijyasurya Residency, Appanaicken Palayam, Thudiyalur, Coimbatore – 641 034
                  </address>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Social Media Section */}
      <div className="border-t border-white/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex justify-center space-x-8">
            <Link 
              href="#" 
              className="text-white hover:text-white/70 transition-colors duration-200"
              aria-label="Facebook"
            >
              <Facebook className="w-6 h-6" />
            </Link>
            <Link 
              href="#" 
              className="text-white hover:text-white/70 transition-colors duration-200"
              aria-label="Instagram"
            >
              <Instagram className="w-6 h-6" />
            </Link>
            <Link 
              href="#" 
              className="text-white hover:text-white/70 transition-colors duration-200"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-6 h-6" />
            </Link>
            <Link 
              href="#" 
              className="text-white hover:text-white/70 transition-colors duration-200"
              aria-label="YouTube"
            >
              <Youtube className="w-6 h-6" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}