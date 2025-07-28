"use client";
import { motion } from "framer-motion";
import HeadingMultiColour from "@/components/HeadingMultiColour.js";
import LinearGradient from "@/components/LinearGradient.js";
import Fold5Card from "./Fold5Card.js";
import { fold5Object } from "./Variables.js";

export default function Fold5() {
	// Debug log to check if fold5Object is loading correctly
	console.log('fold5Object:', fold5Object);

	// Container animation for the entire section
	const containerVariants = {
		hidden: { opacity: 0 },
		visible: {
			opacity: 1,
			transition: {
				duration: 0.6,
				staggerChildren: 0.15,
				delayChildren: 0.1
			}
		}
	};

	// Header container animation (heading + gradient)
	const headerContainerVariants = {
		hidden: { opacity: 0 },
		visible: {
			opacity: 1,
			transition: {
				staggerChildren: 0.2
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
				ease: "easeOut"
			}
		}
	};

	// Grid container animation
	const gridVariants = {
		hidden: { opacity: 0 },
		visible: {
			opacity: 1,
			transition: {
				staggerChildren: 0.15,
				delayChildren: 0.3
			}
		}
	};

	// Individual project card animation (simplified)
	const cardVariants = {
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
				duration: 0.6,
				ease: "easeOut"
			}
		}
	};

	return (
		<motion.div 
			className="py-[50px]"
			variants={containerVariants}
			initial="hidden"
			whileInView="visible"
			viewport={{ once: true, margin: "-100px" }}
		>
			{/* Animated Header Section */}
			<motion.div 
				className="sm:w-[550px] mx-auto"
				variants={headerContainerVariants}
			>
				{/* Animated Heading */}
				<motion.div variants={headingVariants}>
					<HeadingMultiColour 
						customStyle="text-center sm:text-[40px] text-[32px] tracking-[0%]" 
						textLeft="Hot Picks – " 
						textRight="Ongoing Projects You Can Own Today" 
					/>
				</motion.div>

				{/* Animated Gradient */}
				<motion.div variants={gradientVariants}>
					<LinearGradient customStyle="mx-auto mt-[30px] mb-[50px]" />
				</motion.div>
			</motion.div>

			{/* Animated Projects Grid */}
			<motion.div 
				className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 justify-items-center gap-[30px] max-w-[1400px] mx-auto px-4"
				variants={gridVariants}
			>
				{fold5Object?.map((item, index) => (
					<motion.div
						key={index}
						variants={cardVariants}
						whileHover={{
							y: -5,
							transition: {
								duration: 0.2,
								ease: "easeOut"
							}
						}}
					>
						<Fold5Card data={item} index={index} />
					</motion.div>
				)) || null}
			</motion.div>

			{/* Floating accent elements for "Hot Picks" theme */}
			<motion.div
				className="absolute inset-0 pointer-events-none overflow-hidden"
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ delay: 1, duration: 1 }}
			>
				{/* Hot pick indicators */}
				<motion.div
					className="absolute top-20 left-1/4 w-1 h-1 bg-[#f35c25] rounded-full"
					animate={{
						scale: [1, 1.5, 1],
						opacity: [0.4, 0.8, 0.4],
					}}
					transition={{
						duration: 2,
						repeat: Infinity,
						delay: 0.5
					}}
				/>
				<motion.div
					className="absolute top-32 right-1/4 w-1.5 h-1.5 bg-[#f35c25]/60 rounded-full"
					animate={{
						scale: [1, 1.3, 1],
						opacity: [0.3, 0.7, 0.3],
					}}
					transition={{
						duration: 2.5,
						repeat: Infinity,
						delay: 1
					}}
				/>
				<motion.div
					className="absolute bottom-20 left-1/3 w-0.5 h-0.5 bg-[#f35c25]/40 rounded-full"
					animate={{
						scale: [1, 2, 1],
						opacity: [0.2, 0.6, 0.2],
					}}
					transition={{
						duration: 3,
						repeat: Infinity,
						delay: 1.5
					}}
				/>
			</motion.div>
		</motion.div>
	);
}