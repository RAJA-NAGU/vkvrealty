'use client';
import { motion } from "framer-motion";
import Image from "next/image";

import Header from "@/components/Header.js";
import Footer from "@/components/Footer.js";
import HeadingMultiColour from "@/components/HeadingMultiColour.js";
import LinearGradient from "@/components/LinearGradient.js";
import KarunGarden from "./KarunGarden.js";
import NavalNagar from "./NavalNagar.js";
import SreeVirutchamNagar from "./SreeVirutchamNagar.js";

import fold1image1 from "@/images/project/fold1image1.png";

export default function Product() {
	// Animation variants for the hero section
	const containerVariants = {
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

	const headingVariants = {
		hidden: { 
			opacity: 0, 
			y: 30,
			scale: 0.95
		},
		visible: { 
			opacity: 1, 
			y: 0,
			scale: 1,
			transition: {
				duration: 0.8,
				ease: [0.25, 0.25, 0.25, 0.75]
			}
		}
	};

	const gradientVariants = {
		hidden: { 
			opacity: 0, 
			scaleX: 0,
			y: 10
		},
		visible: { 
			opacity: 1, 
			scaleX: 1,
			y: 0,
			transition: {
				duration: 0.8,
				ease: "easeOut"
			}
		}
	};

	const textVariants = {
		hidden: { 
			opacity: 0, 
			y: 20 
		},
		visible: { 
			opacity: 1, 
			y: 0,
			transition: {
				duration: 0.7,
				ease: "easeOut"
			}
		}
	};

	const imageVariants = {
		hidden: { 
			opacity: 0, 
			scale: 0.8,
			y: 40,
			filter: "blur(4px)"
		},
		visible: { 
			opacity: 1, 
			scale: 1,
			y: 0,
			filter: "blur(0px)",
			transition: {
				duration: 1,
				ease: [0.23, 1, 0.32, 1],
				scale: {
					duration: 1,
					ease: [0.25, 0.46, 0.45, 0.94]
				},
				filter: {
					duration: 0.6,
					ease: "easeOut"
				}
			}
		}
	};

	return (
		<>
			<Header currentTab="project" />
			
			{/* Animated Hero Section */}
			<motion.div 
				className="bg-linear-to-r from-[#FF5A3C05] to-[#2F2E7505]"
				initial={{ opacity: 0, y: 20 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.8, ease: "easeOut" }}
			>
				<motion.div 
					className="max-w-[1300px] mx-auto sm:px-[50px] px-[10px] pt-5"
					variants={containerVariants}
					initial="hidden"
					animate="visible"
				>
					{/* Animated Heading */}
					<motion.div variants={headingVariants}>
						<HeadingMultiColour 
							customStyle="text-center text-[40px]" 
							textLeft="Our " 
							textRight="Ongoing Projects" 
						/>
					</motion.div>

					{/* Animated Gradient */}
					<motion.div variants={gradientVariants}>
						<LinearGradient customStyle="mx-auto my-10" />
					</motion.div>

					{/* Animated Description Text */}
					<motion.div 
						className="text-[24px] text-center max-w-5xl mx-auto"
						variants={textVariants}
						whileHover={{
							scale: 1.02,
							color: "#2F2E75",
							transition: { duration: 0.3 }
						}}
					>
						Discover premium residential plots that promise exceptional value, strategic locations, and high-growth potential. Explore our latest developments, where quality meets affordability.
					</motion.div>

					{/* Animated Hero Image */}
					<motion.div
						variants={imageVariants}
						whileHover={{
							scale: 1.03,
							y: -5,
							transition: { duration: 0.4, ease: "easeOut" }
						}}
						className="mt-10 mx-auto w-fit relative"
					>
						<motion.div
							whileHover={{
								filter: "brightness(1.05) contrast(1.05)",
								transition: { duration: 0.3 }
							}}
							className="relative overflow-hidden rounded-lg"
						>
							<Image 
								src={fold1image1} 
								alt="Premium residential building development" 
								className="mx-auto"
							/>
							
							{/* Subtle overlay effect */}
							<motion.div
								className="absolute inset-0 bg-gradient-to-tr from-[#FF5A3C]/10 to-[#2F2E75]/10 opacity-0 rounded-lg"
								whileHover={{ 
									opacity: 1,
									transition: { duration: 0.3 }
								}}
							/>

							{/* Shimmer effect */}
							<motion.div
								className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full rounded-lg"
								whileHover={{
									translateX: "200%",
									transition: { 
										duration: 1,
										ease: "easeInOut"
									}
								}}
							/>
						</motion.div>

						{/* Background glow effect */}
						<motion.div
							className="absolute -inset-4 bg-gradient-to-r from-[#FF5A3C]/20 to-[#2F2E75]/20 rounded-xl blur-xl -z-10"
							initial={{ opacity: 0, scale: 0.8 }}
							animate={{ 
								opacity: 0.4, 
								scale: 1,
								transition: { 
									duration: 1.5,
									delay: 1.2
								}
							}}
							whileHover={{
								opacity: 0.8,
								scale: 1.1,
								transition: { duration: 0.3 }
							}}
						/>
					</motion.div>
				</motion.div>

				{/* Floating accent elements */}
				<motion.div
					className="absolute inset-0 pointer-events-none overflow-hidden"
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ delay: 1.5, duration: 1 }}
				>
					{/* Premium project indicators */}
					<motion.div
						className="absolute top-1/4 left-1/4 w-1 h-1 bg-[#FF5A3C]/40 rounded-full"
						animate={{
							scale: [1, 1.5, 1],
							opacity: [0.4, 0.8, 0.4],
						}}
						transition={{
							duration: 3,
							repeat: Infinity,
							delay: 0.5
						}}
					/>
					<motion.div
						className="absolute top-1/3 right-1/4 w-1.5 h-1.5 bg-[#2F2E75]/30 rounded-full"
						animate={{
							scale: [1, 1.3, 1],
							opacity: [0.3, 0.7, 0.3],
						}}
						transition={{
							duration: 3.5,
							repeat: Infinity,
							delay: 1
						}}
					/>
					<motion.div
						className="absolute bottom-1/4 left-1/3 w-0.5 h-0.5 bg-[#FF5A3C]/30 rounded-full"
						animate={{
							scale: [1, 2, 1],
							opacity: [0.2, 0.6, 0.2],
						}}
						transition={{
							duration: 4,
							repeat: Infinity,
							delay: 1.8
						}}
					/>
				</motion.div>
			</motion.div>

			{/* Project Components (Not Animated) */}
			<KarunGarden />
			<NavalNagar />
			<SreeVirutchamNagar />
			<Footer />
		</>
	);
}