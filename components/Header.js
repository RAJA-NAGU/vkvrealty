'use client';
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import logo from '@/images/logo.jpg';
import phone from '@/images/phone.svg';
import { MagneticButton } from "@/components/ui/magnetic-button.tsx";
import { Menu, X } from 'lucide-react';

export default function Header({currentTab, isLandingPage = false}) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
  	<div className="bg-[#ffffff] top-[0px] sticky z-[1] font-['Proxima Nova']">
			<div className="max-w-[1300px] mx-auto sm:px-[50px] px-[10px] py-5">
        <div className="flex items-center justify-between h-16 lg:h-20 gap-8">
          {/* Logo */}
          <div className="flex-shrink-0">
          	<Link href="/">
	            <Image 
	              src={logo} 
	              alt="VKV Realty 1985"
	              className="sm:w-[200px] w-[150px] sm:h-[100px] h-[75px]"
	            />
	        </Link>
          </div>

          {/* Desktop Navigation */}
          {!isLandingPage && 
	          <div className="hidden lg:flex items-center space-x-8 ml-auto font-semibold">
		          <nav className="flex items-center space-x-8">
		            <Link 
		              href="/" 
		              className={`${currentTab == 'home' ? 'text-[#FF5A3C]' : 'text-[#2F2E75]'}`}
		            >
		              Home
		            </Link>
		            <Link 
		              href="/about" 
		              className={`${currentTab == 'about' ? 'text-[#FF5A3C]' : 'text-[#2F2E75]'}`}
		            >
		              About
		            </Link>
		            <Link 
		              href="/project" 
		              className={`${currentTab == 'project' ? 'text-[#FF5A3C]' : 'text-[#2F2E75]'}`}
		            >
		              Project
		            </Link>
		            <Link 
		              href="/careers" 
		              className={`${currentTab == 'careers' ? 'text-[#FF5A3C]' : 'text-[#2F2E75]'}`}
		            >
		              Careers
		            </Link>
		            <Link 
		              href="/contact" 
		              className={`${currentTab == 'contact' ? 'text-[#FF5A3C]' : 'text-[#2F2E75]'}`}
		            >
		              Contact
		            </Link>
		          </nav>
		        </div>
		      }

          {/* Call Button - Desktop */}
          <div id="callUsNowButton" className="call-us-button ">
						<Link href="tel:+91 8778899100">
							<MagneticButton>
								<button className={`${isLandingPage ? '' : 'max-lg:hidden'} cursor-pointer bg-[#FF5A3C] hover:bg-[#e45420] transition-colors px-4 text-lg text-white py-3 rounded-[5] flex gap-[10px] cursor-pointer`}>
									<Image src={phone} alt="Phone" />
									<span className="text-[18px] font-semibold">Call Us <span className="max-sm:hidden">Now</span></span>
								</button>
							</MagneticButton>
						</Link>
					</div>

          {/* Mobile menu button */}
          {!isLandingPage && 
	          <div className="lg:hidden">
	            <button
	              onClick={toggleMenu}
	              className="text-[#2F2E75]"
	            >
	              {isMenuOpen ? (
	                <X className="w-6 h-6" />
	              ) : (
	                <Menu className="w-6 h-6" />
	              )}
	            </button>
	          </div>
	        }
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden">
            <div className="px-2 pt-10 pb-3 space-y-1 bg-white">
              <Link
                href="/"
                className={`block px-3 py-2 text-center ${currentTab == 'home' ? 'text-[#FF5A3C]' : 'text-[#2F2E75]'}`}
              >
                Home
              </Link>
              <Link
                href="/about"
                className={`block px-3 py-2 text-center ${currentTab == 'about' ? 'text-[#FF5A3C]' : 'text-[#2F2E75]'}`}
              >
                About
              </Link>
              <Link
                href="/project"
                className={`block px-3 py-2 text-center ${currentTab == 'project' ? 'text-[#FF5A3C]' : 'text-[#2F2E75]'}`}
              >
                Project
              </Link>
              <Link 
		              href="/careers" 
		              className={`block px-3 py-2 text-center ${currentTab == 'careers' ? 'text-[#FF5A3C]' : 'text-[#2F2E75]'}`}
		            >
		              Careers
		          </Link>
              <Link
                href="/contact"
                className={`block px-3 py-2 text-center ${currentTab == 'contact' ? 'text-[#FF5A3C]' : 'text-[#2F2E75]'}`}
              >
                Contact
              </Link>
              <div className="px-3 py-2">
                <button className="w-full bg-[#FF5A3C] text-white px-4 py-3 rounded-sm font-medium hover:bg-[#e54a33] transition-colors duration-200 flex items-center justify-center space-x-2">
                  <Image src={phone} alt="Phone" />
                  <span>Call Us Now</span>
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}