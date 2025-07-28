'use client';
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

import Header from '@/components/Header.js';
import Footer from '@/components/Footer.js';
import HeadingMultiColour from '@/components/HeadingMultiColour.js';
import LinearGradient from '@/components/LinearGradient.js';

import fold2icon1 from '@/images/aboutus/fold2icon1.svg';
import fold2icon2 from '@/images/aboutus/fold2icon2.svg';
import fold2image1 from '@/images/aboutus/fold2image1.png';

import fold3icon1 from '@/images/aboutus/fold3icon1.svg';
import fold3icon2 from '@/images/aboutus/fold3icon2.svg';
import fold3icon3 from '@/images/aboutus/fold3icon3.svg';
import fold3icon4 from '@/images/aboutus/fold3icon4.svg';
import fold3icon5 from '@/images/aboutus/fold3icon5.svg';
import fold3icon6 from '@/images/aboutus/fold3icon6.svg';
import fold3icon7 from '@/images/aboutus/fold3icon7.svg';

import fold4image1 from '@/images/aboutus/fold4image1.png';

import fold5icon1 from '@/images/aboutus/fold5icon1.svg';
import fold5icon2 from '@/images/aboutus/fold5icon2.svg';
import fold5icon3 from '@/images/aboutus/fold5icon3.svg';
import fold5icon4 from '@/images/aboutus/fold5icon4.svg';
import fold5icon5 from '@/images/aboutus/fold5icon5.svg';
import fold5icon6 from '@/images/aboutus/fold5icon6.svg';

// Animated Reusable Components
const FeatureCard = ({ icon, title, description, isLast, index }) => {
  const cardVariants = {
    hidden: { 
      opacity: 0, 
      x: -30,
      scale: 0.95
    },
    visible: { 
      opacity: 1, 
      x: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
        delay: index * 0.1
      }
    }
  };

  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
    >
      <motion.div 
        className="flex max-md:flex-col flex-row items-center gap-6 py-8 justify-between"
        whileHover={{
          x: 10,
          transition: { duration: 0.3, ease: "easeOut" }
        }}
      >
        <motion.div
          whileHover={{
            scale: 1.1,
            rotate: 5,
            transition: { duration: 0.2 }
          }}
        >
          <Image
            src={icon}
            alt={title}
            className="w-[64px] h-[64px]"
          />
        </motion.div>
        
        <motion.h3 
          className="text-[20px] font-bold text-gray-900 mb-2 text-left w-[250px]"
          whileHover={{
            color: "#FF5A3C",
            transition: { duration: 0.2 }
          }}
        >
          {title}
        </motion.h3>
        
        <motion.p 
          className="text-gray-600 text-sm leading-relaxed max-w-[300px]"
          whileHover={{
            color: "#4B5563",
            transition: { duration: 0.2 }
          }}
        >
          {description}
        </motion.p>
      </motion.div>
      
      {!isLast && (
        <motion.div 
          className="border-t border-gray-200"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        />
      )}
    </motion.div>
  );
};

const CoreValueCard = ({ icon, title, description, index }) => {
  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 50,
      scale: 0.9
    },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.25, 0.25, 0.75],
        delay: index * 0.1
      }
    }
  };

  return (
    <motion.div 
      className="group"
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      whileHover={{
        y: -8,
        transition: { duration: 0.3, ease: "easeOut" }
      }}
    >
      <div className="bg-white border border-gray-200 rounded-lg p-6 text-center hover:shadow-lg transition-shadow duration-300 object-cover transition-transform duration-300 group-hover:scale-105 min-h-[300px] relative overflow-hidden">
        {/* Animated background */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-[#FF5A3C]/5 to-[#2F2E75]/5 opacity-0"
          whileHover={{ 
            opacity: 1,
            transition: { duration: 0.3 }
          }}
        />
        
        <div className="relative z-10">
          <motion.div 
            className="mb-6 flex justify-center"
            whileHover={{
              scale: 1.1,
              rotate: 360,
              transition: { duration: 0.6, ease: "easeInOut" }
            }}
          >
            <div className="w-16 h-16 bg-[#FF5A3C] rounded-full flex items-center justify-center">
              <Image
                src={icon}
                alt={title}
                width={32}
                height={32}
                className="w-8 h-8"
              />
            </div>
          </motion.div>
          
          <motion.h3 
            className="text-xl font-bold text-[#2F2E75] mb-4 leading-tight"
            whileHover={{
              scale: 1.05,
              color: "#FF5A3C",
              transition: { duration: 0.2 }
            }}
          >
            {title}
          </motion.h3>
          
          <motion.p 
            className="text-gray-600 leading-relaxed"
            whileHover={{
              color: "#374151",
              transition: { duration: 0.2 }
            }}
          >
            {description}
          </motion.p>
        </div>
      </div>
    </motion.div>
  );
};

const Aboutus = () => {
  // Animation variants for sections
  const sectionVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const fadeInUp = {
    hidden: { 
      opacity: 0, 
      y: 30 
    },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const slideInLeft = {
    hidden: { 
      opacity: 0, 
      x: -60 
    },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const slideInRight = {
    hidden: { 
      opacity: 0, 
      x: 60 
    },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const scaleIn = {
    hidden: { 
      opacity: 0, 
      scale: 0.8 
    },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const coreValues = [
    {
      icon: fold3icon1,
      title: "Leadership in Real Estate:",
      description: "40+ years of expertise in delivering impactful projects"
    },
    {
      icon: fold3icon2,
      title: "Excellence in Every Detail:",
      description: "Strategic planning and flawless execution for every development."
    },
    {
      icon: fold3icon3,
      title: "Customer-First Approach:",
      description: "Clear communication, trust, and understanding in every project."
    },
    {
      icon: fold3icon4,
      title: "Financial Integrity:",
      description: "Sustainable investments that protect your future"
    },
    {
      icon: fold3icon5,
      title: "Branding That Matters:",
      description: "Strong marketing strategies and a brand you can rely on"
    },
    {
      icon: fold3icon6,
      title: "Compliance with Confidence:",
      description: "Adherence to all regulations for a smooth journey"
    },
    {
      icon: fold3icon7,
      title: "Sustainability at Heart:",
      description: "Developments designed to last for generations."
    }
  ];

  const whyVKVFeatures = [
    {
      icon: fold5icon1,
      title: "Proven Track Record:",
      description: "40+ years of successful projects, top-notch construction, and excellent customer service."
    },
    {
      icon: fold5icon2,
      title: "Expert Advice, Always:",
      description: "From investment tips to property suggestions, we guide you every step of the way."
    },
    {
      icon: fold5icon3,
      title: "Innovative Solutions:",
      description: "Adapting to the latest trends to meet your needs."
    },
    {
      icon: fold5icon4,
      title: "Trust You Can Count On:",
      description: "Built on solid foundations of customer loyalty and community service."
    },
    {
      icon: fold5icon5,
      title: "Exclusive Opportunities:",
      description: "Access to premium projects and investments with unbeatable value."
    },
    {
      icon: fold5icon6,
      title: "Sustainable Future:",
      description: "Creating developments that not only stand the test of time but contribute to a greener tomorrow."
    }
  ];

  return (
    <div className="min-h-screen bg-white font-sans">
      <Header currentTab="about" />
      
      {/* Hero Section */}
      <motion.section 
        className="bg-linear-to-r from-[#FF5A3C05] to-[#2F2E7505] py-12"
        variants={sectionVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="max-w-6xl mx-auto px-6">
          <motion.div variants={fadeInUp}>
            <HeadingMultiColour 
              customStyle="text-[40px] leading-[50px] my-[10px] font-bold font-['Benton Sans'] text-center max-w-2xl mx-auto" 
              textLeft="Welcome to VKV Realty - " 
              textRight="Building Dreams, Shaping Tomorrow!" 
            />
          </motion.div>
          
          <motion.div 
            variants={fadeInUp}
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <LinearGradient customStyle="mx-auto my-10" />
          </motion.div>
          
          <div className="grid lg:grid-cols-3 gap-8 items-start">
            {/* Our Vision */}
            <motion.div 
              className="space-y-4"
              variants={slideInLeft}
            >
              <motion.div 
                className="flex items-center gap-3"
                whileHover={{
                  x: 5,
                  transition: { duration: 0.2 }
                }}
              >
                <motion.div 
                  className="bg-[#FF5A3C] rounded p-2"
                  whileHover={{
                    scale: 1.1,
                    rotate: 5,
                    transition: { duration: 0.2 }
                  }}
                >
                  <Image src={fold2icon1} alt="Vision" className="w-[48px] h-[48px] text-white" />
                </motion.div>
                <h2 className="text-[24px] font-bold text-gray-900">Our Vision</h2>
              </motion.div>
              <motion.p 
                className="text-[#5C727D] leading-relaxed"
                whileHover={{
                  color: "#374151",
                  transition: { duration: 0.2 }
                }}
              >
                At VKV Realty, we&apos;re not just about building properties; we&apos;re about building the future. As Coimbatore&apos;s most trusted real estate developer, our goal is to create innovative, sustainable living spaces that enrich the lives of people while contributing to the city&apos;s vibrant development. With over 40 years of heritage, we&apos;re dedicated to transforming the landscape with projects that blend modern living with Coimbatore&apos;s timeless charm. We&apos;re building more than just homes; we&apos;re creating lasting connections and dreams that stand the test of time
              </motion.p>
            </motion.div>

            {/* Central Image */}
            <motion.div 
              className="flex justify-center my-auto"
              variants={scaleIn}
              whileHover={{
                scale: 1.05,
                transition: { duration: 0.3 }
              }}
            >
              <Image
                src={fold2image1}
                alt="VKV Property"
                className="rounded-lg shadow-lg"
              />
            </motion.div>

            {/* Our Mission */}
            <motion.div 
              className="space-y-4"
              variants={slideInRight}
            >
              <motion.div 
                className="flex items-center gap-3"
                whileHover={{
                  x: -5,
                  transition: { duration: 0.2 }
                }}
              >
                <motion.div 
                  className="bg-[#FF5A3C] rounded p-2"
                  whileHover={{
                    scale: 1.1,
                    rotate: -5,
                    transition: { duration: 0.2 }
                  }}
                >
                  <Image src={fold2icon2} alt="Mission" className="w-[48px] h-[48px] text-white" />
                </motion.div>
                <h2 className="text-[24px] font-bold text-gray-900">Our Mission</h2>
              </motion.div>
              <motion.p 
                className="text-[#5C727D] leading-relaxed"
                whileHover={{
                  color: "#374151",
                  transition: { duration: 0.2 }
                }}
              >
                We&apos;re on a mission to meet the evolving needs of Coimbatore&apos;s people by offering thoughtfully planned residential, commercial, and industrial spaces that fuel growth and long-term value. Our goal is simple—enhance the city&apos;s livability, preserve its unique identity, and provide real estate solutions that promote sustainability, ethical practices, and customer satisfaction. With a commitment to transparency and integrity, we&apos;re here to build relationships that last and make your vision a reality!
              </motion.p>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Core Values Section */}
      <motion.section 
        className="py-16 bg-white"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        <div className="max-w-7xl mx-auto px-6">
          <motion.div 
            className="text-center mb-12"
            variants={fadeInUp}
          >
            <h2 className="text-[24px] font-bold text-gray-900">Core Values That Drive Us</h2>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8"
            variants={sectionVariants}
          >
            {coreValues.slice(0, 4).map((value, index) => (
              <CoreValueCard
                key={index}
                icon={value.icon}
                title={value.title}
                description={value.description}
                index={index}
              />
            ))}
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto"
            variants={sectionVariants}
          >
            {coreValues.slice(4).map((value, index) => (
              <CoreValueCard
                key={index + 4}
                icon={value.icon}
                title={value.title}
                description={value.description}
                index={index + 4}
              />
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Journey Section */}
      <motion.section 
        className="py-16 bg-[#2F2E75] text-white"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        <div className="max-w-7xl mx-auto px-6">
          <motion.h2 
            className="text-[40px] font-bold text-center"
            variants={fadeInUp}
            whileHover={{
              scale: 1.02,
              transition: { duration: 0.2 }
            }}
          >
            Our Journey - Crafting a Legacy
          </motion.h2>
          
          <motion.p 
            className="text-[24px] text-center mt-5"
            variants={fadeInUp}
          >
            Since 1985, VKV Realty has been shaping Coimbatore&apos;s skyline, one landmark at a time.
          </motion.p>
          
          <div className="flex lg:flex-row flex-col items-center gap-20 mt-20">
            <motion.div
              variants={slideInLeft}
              whileHover={{
                scale: 1.05,
                transition: { duration: 0.3 }
              }}
            >
              <Image 
                src={fold4image1}
                alt="Coimbatore Cityscape"
                className="max-lg:mx-auto"
              />
            </motion.div>
            
            <motion.div 
              className="space-y-6 max-w-lg text-lg max-lg:mx-auto"
              variants={slideInRight}
            >
              <motion.p 
                className="text-white leading-relaxed"
                variants={fadeInUp}
              >
                With over 30 successful projects, we&apos;ve built more than just plots—we&apos;ve built communities, trust, and futures. Our journey has been fueled by a passion for excellence and a commitment to customer satisfaction.
              </motion.p>
              
              <motion.p 
                className="text-white leading-relaxed"
                variants={fadeInUp}
              >
                Today, we continue to build on that legacy, delivering premium living spaces and investment opportunities that stand the test of time.
              </motion.p>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Why VKV Section */}
      <motion.section 
        className="py-16 bg-white"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        <div className="max-w-6xl mx-auto px-6">
          <motion.div 
            className="text-center mb-12"
            variants={fadeInUp}
          >
            <HeadingMultiColour 
              customStyle="text-[40px] leading-[50px] my-[10px] font-bold font-['Benton Sans'] text-center max-w-2xl mx-auto" 
              textLeft="Why " 
              textRight="VKV Realty" 
            />
            <motion.p 
              className="text-[24px] text-[#071C1F] mt-5"
              variants={fadeInUp}
            >
              Here&apos;s What Sets Us Apart:
            </motion.p>
          </motion.div>

          <motion.div 
            className="max-w-7xl mx-auto"
            variants={sectionVariants}
          >
            {whyVKVFeatures.map((feature, index) => (
              <FeatureCard
                key={index}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
                index={index}
                isLast={index === whyVKVFeatures.length - 1}
              />
            ))}
          </motion.div>
        </div>
      </motion.section>
      
      <Footer />
    </div>
  );
};

export default Aboutus;