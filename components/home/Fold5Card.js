"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import fold5image1 from "@/images/home/fold5/fold5image1.svg";

export default function Fold5Card({ data, index = 0 }) {
	// Safety check for data
	if (!data) {
		console.error('Fold5Card: data prop is undefined');
		return null;
	}

	// Title animation
	const titleVariants = {
		hidden: { 
			opacity: 0, 
			x: -20 
		},
		visible: { 
			opacity: 1, 
			x: 0,
			transition: {
				duration: 0.5,
				ease: "easeOut",
				delay: 0.2
			}
		}
	};

	// Features container animation
	const featuresContainerVariants = {
		hidden: { opacity: 0 },
		visible: {
			opacity: 1,
			transition: {
				staggerChildren: 0.08,
				delayChildren: 0.3
			}
		}
	};

	// Individual feature animation
	const featureVariants = {
		hidden: { 
			opacity: 0, 
			x: -10
		},
		visible: { 
			opacity: 1, 
			x: 0,
			transition: {
				duration: 0.4,
				ease: "easeOut"
			}
		}
	};

	return (
		<motion.div 
			className={`
				w-full
				max-w-[450px] 
				p-[30px] 
				border-solid 
				border-[1px] 
				border-[#FF5A3C1A] 
				rounded-[10px] 
				bg-white
				hover:bg-[radial-gradient(circle_at_center,rgba(0,0,0,0.02)_1px,transparent_1px)] 
				hover:dark:bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.2)_1px,transparent_1px)] 
				hover:bg-[length:4px_4px]
				hover:shadow-lg
				hover:border-[#FF5A3C]/20
				will-change-transform
				transition-all 
				duration-300
				cursor-pointer
				relative
				overflow-hidden
				${data?.customStyle || ''}
			`}
			initial="hidden"
			animate="visible"
			whileHover={{
				y: -8,
				scale: 1.02,
				boxShadow: "0 20px 40px rgba(255, 90, 60, 0.1)",
				transition: {
					duration: 0.3,
					ease: "easeOut"
				}
			}}
		>
			{/* Animated background effect */}
			<motion.div
				className="absolute inset-0 bg-gradient-to-br from-[#FF5A3C]/5 to-transparent opacity-0"
				whileHover={{ 
					opacity: 1,
					transition: { duration: 0.3 }
				}}
			/>

			{/* Content container */}
			<div className="relative z-10">
				{/* Animated Title */}
				<motion.div 
					className="text-[#FF5A3C] text-[20px] font-semibold mb-[20px]"
					variants={titleVariants}
					whileHover={{
						color: "#E5492E",
						transition: { duration: 0.2 }
					}}
				>
					{data?.title || 'Project Title'}
				</motion.div>

				{/* Animated Features List */}
				<motion.div 
					className="flex flex-col gap-[15px] text-[#7B7B7B]"
					variants={featuresContainerVariants}
				>
					{data?.features?.map((item, featureIndex) => (
						<motion.div 
							key={featureIndex} 
							className="flex items-start gap-[12px]"
							variants={featureVariants}
							whileHover={{
								x: 3,
								transition: { duration: 0.2 }
							}}
						>
							{/* Animated Icon */}
							<motion.div 
								className="flex-shrink-0 mt-[2px]"
								whileHover={{
									scale: 1.1,
									rotate: 5,
									transition: { duration: 0.2 }
								}}
							>
								<Image 
									src={fold5image1} 
									alt="Pointer" 
									className="h-[20px] w-[20px]" 
								/>
							</motion.div>

							{/* Animated Feature Text */}
							<div className="flex-1 text-[14px] leading-[22px]">
								{item?.type === "plain" ? (
									<motion.span
										whileHover={{
											color: "#666666",
											transition: { duration: 0.2 }
										}}
									>
										{item?.feature || 'Feature description'}
									</motion.span>
								) : (
									<motion.span>
										<motion.span 
											className="text-[#2F2E75] font-semibold"
											whileHover={{
												scale: 1.02,
												transition: { duration: 0.2 }
											}}
										>
											{"Price: "}
										</motion.span>
										<motion.span 
											className="font-medium text-[#2F2E75]"
											whileHover={{
												fontWeight: "600",
												transition: { duration: 0.2 }
											}}
										>
											{item?.feature || 'Price information'}
										</motion.span>
									</motion.span>
								)}
							</div>
						</motion.div>
					)) || null}
				</motion.div>
			</div>

			{/* Floating accent for "hot picks" effect */}
			<motion.div
				className="absolute top-4 right-4 w-2 h-2 bg-[#FF5A3C]/40 rounded-full"
				animate={{
					scale: [1, 1.3, 1],
					opacity: [0.4, 0.8, 0.4],
				}}
				transition={{
					duration: 2.5,
					repeat: Infinity,
					delay: index * 0.3
				}}
			/>
		</motion.div>
	);
}