"use client";
import { motion } from "framer-motion";
import HeadingMultiColour from "@/components/HeadingMultiColour.js";
import LinearGradient from "@/components/LinearGradient.js";
import Fold2and3Card from "./Fold2and3Card.js";
import { fold3Object } from "./Variables.js";

export default function Fold3() {
	// Debug log to check if fold3Object is loading correctly
	console.log('fold3Object:', fold3Object);
	
	// Container animation for the entire section
	const containerVariants = {
		hidden: { opacity: 0 },
		visible: {
			opacity: 1,
			transition: {
				duration: 0.6,
				staggerChildren: 0.15,
				delayChildren: 0.2
			}
		}
	};

	// Animation for heading and gradient
	const headerVariants = {
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

	// Animation for the gradient line
	const gradientVariants = {
		hidden: { 
			opacity: 0, 
			scaleX: 0 
		},
		visible: { 
			opacity: 1, 
			scaleX: 1,
			transition: {
				duration: 0.8,
				ease: "easeOut",
				delay: 0.3
			}
		}
	};

	// Grid container animation
	const gridVariants = {
		hidden: { opacity: 0 },
		visible: {
			opacity: 1,
			transition: {
				staggerChildren: 0.12,
				delayChildren: 0.4
			}
		}
	};

	return (
		<motion.div 
			className="my-[100px]"
			variants={containerVariants}
			initial="hidden"
			whileInView="visible"
			viewport={{ once: true, margin: "-100px" }}
		>
			{/* Animated Heading */}
			<motion.div variants={headerVariants}>
				<HeadingMultiColour 
					customStyle="text-center text-[40px]" 
					textLeft="What " 
					textRight="We Offer" 
				/>
			</motion.div>

			{/* Animated Gradient Line */}
			<motion.div variants={gradientVariants}>
				<LinearGradient customStyle="mx-auto mt-[20px]" />
			</motion.div>

			{/* Animated Grid of Cards */}
			<motion.div 
				className="mt-[50px] grid xl:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-[20px]"
				variants={gridVariants}
			>
				{fold3Object?.map((item, index) => (
					<Fold2and3Card key={index} data={item} index={index} />
				)) || null}
			</motion.div>
		</motion.div>
	);
}