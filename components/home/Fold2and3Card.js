"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Fold2and3Card({ data, index }) {
	// Card animation variants
	const cardVariants = {
		hidden: { 
			opacity: 0, 
			y: 50,
			scale: 0.95
		},
		visible: { 
			opacity: 1, 
			y: 0,
			scale: 1,
			transition: {
				duration: 0.6,
				ease: [0.25, 0.25, 0.25, 0.75],
				delay: index * 0.1 // Additional stagger based on index
			}
		}
	};

	// Image animation variants
	const imageVariants = {
		hidden: { 
			opacity: 0, 
			scale: 0.8,
			rotate: -5
		},
		visible: { 
			opacity: 1, 
			scale: 1,
			rotate: 0,
			transition: {
				duration: 0.7,
				ease: "easeOut",
				delay: 0.2
			}
		}
	};

	// Text animation variants
	const textVariants = {
		hidden: { 
			opacity: 0, 
			y: 20 
		},
		visible: { 
			opacity: 1, 
			y: 0,
			transition: {
				duration: 0.5,
				ease: "easeOut",
				delay: 0.3
			}
		}
	};

	// Hover animation
	const hoverVariants = {
		hover: {
			y: -8,
			scale: 1.02,
			boxShadow: "0 20px 40px rgba(255, 90, 60, 0.15)",
			transition: {
				duration: 0.3,
				ease: "easeOut"
			}
		}
	};

	return (
		<motion.div 
			className={`${data.customStyle} cursor-pointer`}
			variants={cardVariants}
			whileHover="hover"
			initial="hidden"
			animate="visible"
		>
			<motion.div
				variants={hoverVariants}
				className="h-full bg-white rounded-lg overflow-hidden transition-shadow duration-300 hover:shadow-lg"
			>
				{/* Animated Image */}
				<motion.div 
					variants={imageVariants}
					className="p-[20px] pb-0"
				>
					<motion.div
						whileHover={{ 
							scale: 1.1,
							rotate: 3,
							transition: { duration: 0.3 }
						}}
						className="overflow-hidden"
					>
						<Image 
							className={`${data.customImageStyle} transition-transform duration-300`} 
							src={data.imageUrl} 
							alt={data.title} 
						/>
					</motion.div>
				</motion.div>

				{/* Animated Text Content */}
				<motion.div 
					className="p-[20px]"
					variants={textVariants}
				>
					{/* Animated Title */}
					<motion.div 
						className="text-[18px] text-[#FF5A3C] my-[20px] h-[60px] font-semibold"
						whileHover={{ 
							color: "#E5492E",
							transition: { duration: 0.2 }
						}}
					>
						{data.title}
					</motion.div>

					{/* Animated Description */}
					<motion.div 
						className="leading-[30px] text-[#7B7B7B] text-[14px]"
						initial={{ opacity: 0.8 }}
						whileHover={{ 
							opacity: 1,
							color: "#666666",
							transition: { duration: 0.2 }
						}}
					>
						{data.description}
					</motion.div>
				</motion.div>

				{/* Subtle animated border effect */}
				<motion.div
					className="absolute inset-0 border-2 border-transparent rounded-lg"
					whileHover={{
						borderColor: "rgba(255, 90, 60, 0.2)",
						transition: { duration: 0.3 }
					}}
				/>
			</motion.div>
		</motion.div>
	);
}