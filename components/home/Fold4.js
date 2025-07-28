"use client";
import { motion } from "framer-motion";
import HeadingMultiColour from "@/components/HeadingMultiColour.js";
import { MagneticButton } from "@/components/ui/magnetic-button.tsx";

export default function Fold4() {
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

	// Heading animation
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

	// Description text animation
	const descriptionVariants = {
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

	// Button container animation
	const buttonContainerVariants = {
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
				ease: "easeOut"
			}
		}
	};

	// Button hover effects
	const buttonVariants = {
		hover: {
			scale: 1.05,
			boxShadow: "0 10px 30px rgba(243, 92, 37, 0.3)",
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

	// Floating animation for the entire section
	const floatingVariants = {
		animate: {
			y: [0, -5, 0],
			transition: {
				duration: 3,
				repeat: Infinity,
				ease: "easeInOut"
			}
		}
	};

	return (
		<motion.div 
			className="py-[50px] sm:w-[550px] mx-auto"
			variants={containerVariants}
			initial="hidden"
			whileInView="visible"
			viewport={{ once: true, margin: "-100px" }}
		>
			{/* Animated Heading */}
			<motion.div variants={headingVariants}>
				<HeadingMultiColour 
					customStyle="text-center sm:text-[40px] text-[32px] tracking-[0%]" 
					textLeft="30+ Completed Projects – " 
					textRight="A Track Record You Can Walk On" 
				/>
			</motion.div>

			{/* Animated Description */}
			<motion.div 
				className="text-[#7B7B7B] font-['Lexend'] text-center my-[30px]"
				variants={descriptionVariants}
			>
				We&apos;re not just talking—we&apos;ve delivered. Over 30 successful developments across Tamil Nadu stand as proof of our dedication to quality, transparency, and customer delight.
			</motion.div>

			{/* Animated Button Container */}
			<motion.div variants={buttonContainerVariants}>
				<motion.a 
					href="/contact"
					className="block"
					whileHover={{ scale: 1.02 }}
					transition={{ duration: 0.2 }}
				>
					<MagneticButton>
						<motion.div 
							className="sm:w-[400px] mx-auto text-center bg-[#f35c25] hover:bg-[#e45420] py-[10px] px-[20px] rounded-[5px] cursor-pointer relative overflow-hidden"
							variants={buttonVariants}
							whileHover="hover"
							whileTap="tap"
						>
							{/* Animated background gradient */}
							<motion.div
								className="absolute inset-0 bg-gradient-to-r from-[#f35c25] via-[#ff6b35] to-[#f35c25] opacity-0"
								whileHover={{ 
									opacity: 1,
									backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
									transition: { 
										duration: 2, 
										repeat: Infinity,
										ease: "linear"
									}
								}}
							/>
							
							{/* Button text with animation */}
							<motion.span 
								className="text-[#ffffff] tracking-tight font-semibold relative z-10"
								whileHover={{ 
									scale: 1.05,
									letterSpacing: "0.5px",
									transition: { duration: 0.2 }
								}}
							>
								Book Your Visit Today
							</motion.span>

							{/* Subtle shine effect */}
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

			{/* Optional: Floating accent elements */}
			<motion.div
				className="absolute inset-0 pointer-events-none"
				variants={floatingVariants}
				animate="animate"
			>
				{/* Subtle decorative elements */}
				<motion.div
					className="absolute top-10 left-10 w-2 h-2 bg-[#f35c25]/20 rounded-full"
					animate={{
						scale: [1, 1.2, 1],
						opacity: [0.3, 0.6, 0.3],
					}}
					transition={{
						duration: 2,
						repeat: Infinity,
						delay: 0.5
					}}
				/>
				<motion.div
					className="absolute bottom-10 right-10 w-3 h-3 bg-[#f35c25]/15 rounded-full"
					animate={{
						scale: [1, 1.3, 1],
						opacity: [0.2, 0.5, 0.2],
					}}
					transition={{
						duration: 2.5,
						repeat: Infinity,
						delay: 1
					}}
				/>
			</motion.div>
		</motion.div>
	);
}