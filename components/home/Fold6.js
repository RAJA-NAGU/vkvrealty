"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { MagneticButton } from "@/components/ui/magnetic-button.tsx";
import fold6image1 from "@/images/home/fold6/fold6image1.png";
import LinearGradient from "@/components/LinearGradient.js";
import { TypingAnimation } from "@/components/ui/typing-animation";

export default function Fold6() {
	// Container animation for the entire section
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

	// Image animation - Simple zoom entrance
	const imageVariants = {
		hidden: { 
			opacity: 0, 
			scale: 0.7,
			rotate: -12,
			y: 40,
			filter: "blur(8px)"
		},
		visible: { 
			opacity: 1, 
			scale: 1,
			rotate: 0,
			y: 0,
			filter: "blur(0px)",
			transition: {
				duration: 1.2,
				ease: [0.23, 1, 0.32, 1], // Custom easing for smooth feel
				scale: {
					duration: 1.2,
					ease: [0.25, 0.46, 0.45, 0.94]
				},
				rotate: {
					duration: 1.4,
					ease: "easeOut"
				},
				filter: {
					duration: 0.8,
					ease: "easeOut"
				}
			}
		}
	};

	// Content area animation
	const contentVariants = {
		hidden: { 
			opacity: 0, 
			x: 30 
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

	// Gradient animation
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
				ease: "easeOut",
				delay: 2.5 // After typing animation completes
			}
		}
	};

	// Button animation
	const buttonVariants = {
		hidden: { 
			opacity: 0, 
			y: 30,
			scale: 0.9
		},
		visible: { 
			opacity: 1, 
			y: 0,
			scale: 1,
			transition: {
				duration: 0.7,
				ease: "easeOut",
				delay: 3 // After gradient appears
			}
		}
	};

	// Button hover effects
	const buttonHoverVariants = {
		hover: {
			scale: 1.05,
			boxShadow: "0 15px 35px rgba(243, 92, 37, 0.3)",
			transition: {
				duration: 0.3,
				ease: "easeOut"
			}
		},
		tap: {
			scale: 0.98,
			transition: {
				duration: 0.1
			}
		}
	};

	// Final tagline animation
	const taglineVariants = {
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
				ease: "easeOut",
				delay: 3.5 // After button appears
			}
		}
	};

	return (
		<motion.div
			variants={containerVariants}
			initial="hidden"
			whileInView="visible"
			viewport={{ once: true, margin: "-100px" }}
		>
			{/* Main CTA Section */}
			<div className="flex justify-center gap-[30px] items-center">
				{/* Simplified Animated Image with Zoom Effect */}
				<motion.div
					className="max-lg:hidden relative"
					variants={imageVariants}
				>
					{/* Reveal container with clip-path animation */}
					<motion.div
						className="relative overflow-hidden rounded-[10px]"
						initial={{ 
							clipPath: "polygon(0 0, 0 0, 0 100%, 0% 100%)" 
						}}
						animate={{ 
							clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)",
						}}
						transition={{
							duration: 1.5,
							ease: [0.25, 0.46, 0.45, 0.94],
							delay: 0.5
						}}
					>
						{/* Static image with hover effects only */}
						<motion.div
							whileHover={{
								scale: 1.05,
								transition: { 
									duration: 0.4,
									ease: "easeOut"
								}
							}}
							className="relative"
						>
							{/* Main image */}
							<motion.div
								whileHover={{
									filter: "brightness(1.1) contrast(1.05)",
									transition: { duration: 0.3 }
								}}
							>
								<Image 
									className="w-[470px] rounded-[10px] relative z-10" 
									src={fold6image1} 
									alt="Posh Building" 
									priority
								/>
							</motion.div>
							
							{/* Dynamic overlay effects */}
							<motion.div
								className="absolute inset-0 rounded-[10px] z-20"
								style={{
									background: "linear-gradient(135deg, rgba(47, 46, 117, 0.1) 0%, rgba(243, 92, 37, 0.1) 100%)"
								}}
								initial={{ opacity: 0 }}
								whileHover={{ 
									opacity: 1,
									transition: { duration: 0.3 }
								}}
							/>

							{/* Shimmer effect */}
							<motion.div
								className="absolute inset-0 rounded-[10px] z-30"
								style={{
									background: "linear-gradient(45deg, transparent 30%, rgba(255, 255, 255, 0.3) 50%, transparent 70%)",
									transform: "translateX(-100%)"
								}}
								whileHover={{
									transform: "translateX(100%)",
									transition: { 
										duration: 1.2,
										ease: "easeInOut"
									}
								}}
							/>
						</motion.div>

						{/* Background glow effect */}
						<motion.div
							className="absolute -inset-4 bg-gradient-to-r from-[#f35c25]/20 to-[#2F2E75]/20 rounded-[20px] blur-xl -z-10"
							initial={{ opacity: 0, scale: 0.8 }}
							animate={{ 
								opacity: 0.6, 
								scale: 1,
								transition: { 
									duration: 1.5,
									delay: 1
								}
							}}
							whileHover={{
								opacity: 1,
								scale: 1.1,
								transition: { duration: 0.3 }
							}}
						/>
					</motion.div>
				</motion.div>

				{/* Animated Content Area */}
				<motion.div variants={contentVariants}>
					{/* Typing Animation (preserved as-is) */}
					<TypingAnimation
						className="text-[40px] sm:w-[300px] font-['Montserrat'] text-[#2F2E75] text-left"
						text="Start Your Property Journey Today"
					/>
					
					{/* Animated Gradient */}
					<motion.div variants={gradientVariants}>
						<LinearGradient customStyle="mt-[30px] mb-[50px]" />
					</motion.div>
					
					{/* Animated Button */}
					<motion.div variants={buttonVariants}>
						<motion.a 
							href="/contact"
							className="block"
							whileHover={{ scale: 1.02 }}
							transition={{ duration: 0.2 }}
						>
							<MagneticButton>
								<motion.div 
									className="sm:w-[300px] mx-auto text-center bg-[#f35c25] hover:bg-[#e45420] py-[10px] px-[20px] rounded-[5px] cursor-pointer relative overflow-hidden"
									variants={buttonHoverVariants}
									whileHover="hover"
									whileTap="tap"
								>
									{/* Animated background pulse */}
									<motion.div
										className="absolute inset-0 bg-gradient-to-r from-[#f35c25] via-[#ff6b35] to-[#f35c25]"
										animate={{
											backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
										}}
										transition={{
											duration: 3,
											repeat: Infinity,
											ease: "linear"
										}}
									/>
									
									{/* Button text */}
									<motion.span 
										className="text-[#ffffff] tracking-tight font-semibold relative z-10"
										whileHover={{ 
											scale: 1.05,
											letterSpacing: "0.5px",
											transition: { duration: 0.2 }
										}}
									>
										Book a Consultation
									</motion.span>

									{/* Shine effect */}
									<motion.div
										className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full"
										whileHover={{
											translateX: "200%",
											transition: { 
												duration: 0.6,
												ease: "easeInOut"
											}
										}}
									/>
								</motion.div>
							</MagneticButton>
						</motion.a>
					</motion.div>
				</motion.div>
			</div>

			{/* Animated Final Tagline */}
			<motion.div 
				className="md:text-[36px] text-[24px] text-[#2F2E75] lg:w-[900px] text-center mx-auto my-[50px]"
				variants={taglineVariants}
			>
				<motion.span
					whileHover={{
						scale: 1.02,
						color: "#3F3E85",
						transition: { duration: 0.3 }
					}}
				>
					Let's turn your land goals into lasting value—with VKV Realty by your side.
				</motion.span>
			</motion.div>

			{/* Floating accent elements */}
			<motion.div
				className="absolute inset-0 pointer-events-none overflow-hidden"
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ delay: 4, duration: 1 }}
			>
				{/* Success indicators */}
				<motion.div
					className="absolute top-1/4 left-1/4 w-1 h-1 bg-[#2F2E75]/30 rounded-full"
					animate={{
						scale: [1, 1.8, 1],
						opacity: [0.3, 0.7, 0.3],
					}}
					transition={{
						duration: 3,
						repeat: Infinity,
						delay: 0.5
					}}
				/>
				<motion.div
					className="absolute top-1/3 right-1/4 w-1.5 h-1.5 bg-[#f35c25]/40 rounded-full"
					animate={{
						scale: [1, 1.5, 1],
						opacity: [0.2, 0.6, 0.2],
					}}
					transition={{
						duration: 4,
						repeat: Infinity,
						delay: 2
					}}
				/>
			</motion.div>
		</motion.div>
	);
}