"use client";
import { motion } from "framer-motion";
import HeadingMultiColour from "@/components/HeadingMultiColour.js";
import Image from 'next/image';

import fold1icon1 from "@/images/project/naval-nagar/fold1icon1.svg";
import fold1icon2 from "@/images/project/naval-nagar/fold1icon2.svg";
import fold1icon3 from "@/images/project/naval-nagar/fold1icon3.svg";
import fold1icon4 from "@/images/project/naval-nagar/fold1icon4.svg";
import fold1icon5 from "@/images/project/naval-nagar/fold1icon5.svg";

import fold2image1 from "@/images/project/naval-nagar/fold2image1.png";
import fold3image1 from "@/images/project/naval-nagar/fold3image1.png";

import fold4icon1 from "@/images/project/naval-nagar/fold4icon1.svg";
import fold4icon2 from "@/images/project/naval-nagar/fold4icon2.svg";
import fold4icon3 from "@/images/project/naval-nagar/fold4icon3.svg";
import fold4icon4 from "@/images/project/naval-nagar/fold4icon4.svg";

export default function NavalNagar() {
	// Animation variants
	const sectionVariants = {
		hidden: { opacity: 0 },
		visible: {
			opacity: 1,
			transition: {
				duration: 0.6,
				staggerChildren: 0.1,
				delayChildren: 0.2
			}
		}
	};

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

	const fadeInUp = {
		hidden: { 
			opacity: 0, 
			y: 30 
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

	const features = [
		{
			icon: fold1icon1,
			title: 'Location',
			value: 'Pollachi-Coimbatore Highway (NH83), Kinathukadavu, Coimbatore District, Tamil Nadu',
		},
		{
			icon: fold1icon2,
			title: 'Starting Price',
			value: '₹ 1 Lakhs per Cent',
		},
		{
			icon: fold1icon3,
			title: 'Land Area',
			value: '1 Acre',
		},
		{
			icon: fold1icon4,
			title: 'Available Units',
			value: '20 Plots',
		},
		{
			icon: fold1icon5,
			title: 'Development Stage',
			value: 'Ready-to-Move',
		}
	];

	const whyNavalNagar = [
		{
			icon: fold4icon1,
			title: 'Exclusive Pricing:',
			description: '₹ 1 Lakhs per Cent, offering excellent value for a premium lifestyle.'
		},
		{
			icon: fold4icon2,
			title: 'All-Inclusive Amenities:',
			description: 'Gated community, solar street lights, 30ft/25ft tar roads, and stormwater drainage - everything you need for comfort.'
		},
		{
			icon: fold4icon3,
			title: 'Exclusivity:',
			description: 'Only 20 plots available, offering privacy and a sense of community.'
		},
		{
			icon: fold4icon4,
			title: 'High Potential for Growth:',
			description: 'With easy access to major highways and ongoing industrial growth in the region, expect steady appreciation.'
		}
	];

	return (
		<>
			{/* Hero Section */}
			<motion.div 
				className="bg-white"
				initial={{ opacity: 0 }}
				whileInView={{ opacity: 1 }}
				viewport={{ once: true }}
				transition={{ duration: 0.6 }}
			>
				<div className="max-w-[1300px] mx-auto sm:px-[50px] px-[10px] py-10">
					<motion.div
						initial={{ opacity: 0, y: 30 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.8, ease: "easeOut" }}
					>
						<HeadingMultiColour 
							customStyle="text-center text-[40px] max-w-3xl mx-auto my-10" 
							textLeft="Naval Nagar – " 
							textRight="Luxury Meets Exclusivity" 
						/>
					</motion.div>

					<motion.div 
						className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 lg:gap-8"
						variants={sectionVariants}
						initial="hidden"
						whileInView="visible"
						viewport={{ once: true, margin: "-50px" }}
					>
						{features.map((feature, index) => (
							<motion.div
								key={index}
								className="flex flex-col items-center text-center space-y-4"
								variants={cardVariants}
								whileHover={{
									y: -8,
									scale: 1.02,
									transition: { duration: 0.3, ease: "easeOut" }
								}}
							>
								{/* Animated Icon */}
								<motion.div 
									className="w-16 h-16 flex items-center justify-center"
									whileHover={{
										scale: 1.1,
										rotate: 5,
										transition: { duration: 0.2 }
									}}
								>
									<Image
										src={feature.icon}
										alt={feature.title}
										width={64}
										height={64}
										className="w-full h-full object-contain text-red-500"
									/>
								</motion.div>

								{/* Animated Title */}
								<motion.h3 
									className="text-[20px] font-bold text-gray-900 leading-tight"
									whileHover={{
										color: "#FF5A3C",
										transition: { duration: 0.2 }
									}}
								>
									{feature.title}
								</motion.h3>

								{/* Animated Value */}
								<motion.div 
									className="space-y-1"
									whileHover={{
										scale: 1.02,
										transition: { duration: 0.2 }
									}}
								>
									<p className="text-[#5C727D] font-medium leading-relaxed">
										{feature.value}
									</p>
								</motion.div>
							</motion.div>
						))}
					</motion.div>
				</div>
			</motion.div>

			{/* Premium Lifestyle Section */}
			<motion.div 
				className="bg-[#2F2E75]"
				initial={{ opacity: 0 }}
				whileInView={{ opacity: 1 }}
				viewport={{ once: true }}
				transition={{ duration: 0.8 }}
			>
				<div className="max-w-[1300px] mx-auto sm:px-[50px] px-[10px] py-10">
					<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
						{/* Animated Image Section */}
						<motion.div 
							className="order-2 lg:order-1"
							variants={slideInLeft}
							initial="hidden"
							whileInView="visible"
							viewport={{ once: true, margin: "-50px" }}
							whileHover={{
								scale: 1.02,
								transition: { duration: 0.3 }
							}}
						>
							<div className="relative overflow-hidden shadow-2xl rounded-lg">
								<motion.div
									whileHover={{
										scale: 1.05,
										transition: { duration: 0.4, ease: "easeOut" }
									}}
								>
									<Image
										src={fold2image1}
										alt="Aerial view of Naval Nagar development"
										className="rounded-lg"
									/>
								</motion.div>

								{/* Subtle overlay effect */}
								<motion.div
									className="absolute inset-0 bg-gradient-to-tr from-white/10 to-transparent opacity-0 rounded-lg"
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
							</div>
						</motion.div>

						{/* Animated Content Section */}
						<motion.div 
							className="order-1 lg:order-2 text-white space-y-6"
							variants={slideInRight}
							initial="hidden"
							whileInView="visible"
							viewport={{ once: true, margin: "-50px" }}
						>
							{/* Main Heading */}
							<motion.div 
								className="space-y-4"
								variants={fadeInUp}
							>
								<motion.h2 
									className="text-4xl lg:text-5xl font-bold leading-tight"
									whileHover={{
										scale: 1.02,
										transition: { duration: 0.2 }
									}}
								>
									Step Into a Premium Lifestyle at Naval Nagar
								</motion.h2>
							</motion.div>

							{/* Description Paragraphs */}
							<motion.div 
								className="space-y-6 text-white"
								variants={sectionVariants}
							>
								<motion.p 
									className="text-lg leading-relaxed"
									variants={fadeInUp}
									whileHover={{
										x: 5,
										transition: { duration: 0.2 }
									}}
								>
									Welcome to Naval Nagar, where luxury living meets exclusivity. 
									Situated along the bustling NH183, this meticulously planned 
									premium plot project is a perfect escape for those who seek 
									privacy, serenity, and convenience. With only 20 plots available, 
									you can enjoy an intimate, close-knit community, ideal for those 
									looking for a premium experience at an affordable price.
								</motion.p>

								<motion.p 
									className="text-lg leading-relaxed"
									variants={fadeInUp}
									whileHover={{
										x: 5,
										transition: { duration: 0.2 }
									}}
								>
									Priced from ₹1 Lakhs per Cent, Naval Nagar stands out with its 
									top-tier amenities and superior infrastructure, setting it apart from 
									nearby developments
								</motion.p>
							</motion.div>
						</motion.div>
					</div>
				</div>
			</motion.div>

			{/* Strategic Location Section */}
			<motion.div 
				className="bg-white"
				initial={{ opacity: 0 }}
				whileInView={{ opacity: 1 }}
				viewport={{ once: true }}
				transition={{ duration: 0.6 }}
			>
				<div className="max-w-[1300px] mx-auto sm:px-[50px] px-[10px] py-10">
					<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
						{/* Animated Content Section */}
						<motion.div 
							className="space-y-8"
							variants={slideInLeft}
							initial="hidden"
							whileInView="visible"
							viewport={{ once: true, margin: "-50px" }}
						>
							{/* Main Heading */}
							<motion.h2 
								className="text-3xl lg:text-[24px] font-normal text-[#071C1F] leading-tight"
								whileHover={{
									color: "#2F2E75",
									scale: 1.02,
									transition: { duration: 0.2 }
								}}
							>
								Strategic Location, Unmatched Connectivity
							</motion.h2>

							{/* Proximity Section */}
							<motion.div 
								className="space-y-4"
								variants={fadeInUp}
								whileHover={{
									x: 5,
									transition: { duration: 0.2 }
								}}
							>
								<div className="flex flex-col sm:flex-row sm:items-start gap-4">
									<motion.h3 
										className="text-xl font-bold text-[#071C1F] min-w-fit"
										whileHover={{
											color: "#FF5A3C",
											transition: { duration: 0.2 }
										}}
									>
										Proximity:
									</motion.h3>
									<p className="text-lg text-[#071C1F] leading-relaxed">
										Just 600m to Rangasamudram Bus Stop, 5 km to Pollachi, and 35 
										km to Coimbatore International Airport.
									</p>
								</div>
							</motion.div>

							{/* Surroundings Section */}
							<motion.div 
								className="space-y-4"
								variants={fadeInUp}
								whileHover={{
									x: 5,
									transition: { duration: 0.2 }
								}}
							>
								<div className="flex flex-col sm:flex-row sm:items-start gap-4">
									<motion.h3 
										className="text-xl font-bold text-[#071C1F] min-w-fit whitespace-nowrap"
										whileHover={{
											color: "#FF5A3C",
											transition: { duration: 0.2 }
										}}
									>
										Surroundings:
									</motion.h3>
									<p className="text-lg text-[#071C1F] leading-relaxed">
										Schools, banks, hospitals, and grocery stores are just minutes 
										away, ensuring convenience at your doorstep.
									</p>
								</div>
							</motion.div>
						</motion.div>

						{/* Animated Image Section */}
						<motion.div 
							className="order-first lg:order-last"
							variants={slideInRight}
							initial="hidden"
							whileInView="visible"
							viewport={{ once: true, margin: "-50px" }}
							whileHover={{
								scale: 1.02,
								y: -5,
								transition: { duration: 0.3 }
							}}
						>
							<div className="relative rounded-lg overflow-hidden shadow-lg">
								<motion.div
									whileHover={{
										scale: 1.05,
										transition: { duration: 0.4, ease: "easeOut" }
									}}
								>
									<Image
										src={fold3image1}
										alt="Aerial view showing location and connectivity of Naval Nagar"
										className="w-full"
									/>
								</motion.div>

								{/* Overlay effect */}
								<motion.div
									className="absolute inset-0 bg-gradient-to-br from-[#FF5A3C]/10 to-[#2F2E75]/10 opacity-0 rounded-lg"
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
							</div>
						</motion.div>
					</div>

					{/* Why Choose Naval Nagar Section */}
					<motion.div 
						className="text-center mb-16 mt-20"
						variants={fadeInUp}
						initial="hidden"
						whileInView="visible"
						viewport={{ once: true, margin: "-50px" }}
					>
						<motion.h2 
							className="text-3xl lg:text-[24px] font-light text-[#071C1F] leading-tight"
							whileHover={{
								color: "#2F2E75",
								scale: 1.02,
								transition: { duration: 0.2 }
							}}
						>
							Why Choose Naval Nagar?
						</motion.h2>
					</motion.div>

					{/* Animated Features Grid */}
					<motion.div 
						className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
						variants={sectionVariants}
						initial="hidden"
						whileInView="visible"
						viewport={{ once: true, margin: "-50px" }}
					>
						{whyNavalNagar.map((feature, index) => (
							<motion.div
								key={index}
								className="bg-white rounded-lg p-4 shadow-sm hover:shadow-lg transition-shadow duration-300 border border-[#FF5A3C1A] relative overflow-hidden"
								variants={cardVariants}
								whileHover={{
									y: -8,
									scale: 1.02,
									boxShadow: "0 20px 40px rgba(255, 90, 60, 0.15)",
									transition: { duration: 0.3, ease: "easeOut" }
								}}
							>
								{/* Background gradient on hover */}
								<motion.div
									className="absolute inset-0 bg-gradient-to-br from-[#FF5A3C]/5 to-transparent opacity-0"
									whileHover={{ 
										opacity: 1,
										transition: { duration: 0.3 }
									}}
								/>

								<div className="relative z-10">
									{/* Animated Icon */}
									<motion.div 
										className="mb-6"
										whileHover={{
											scale: 1.1,
											rotate: 5,
											transition: { duration: 0.2 }
										}}
									>
										<div className="w-16 h-16 flex items-center justify-center">
											<Image
												src={feature.icon}
												alt={feature.title}
												width={64}
												height={64}
												className="w-full h-full object-contain"
											/>
										</div>
									</motion.div>

									{/* Animated Title */}
									<motion.h3 
										className="text-[20px] font-medium text-orange-600 mb-4 leading-tight h-[50px] mb-5"
										whileHover={{
											color: "#E5492E",
											scale: 1.02,
											transition: { duration: 0.2 }
										}}
									>
										{feature.title}
									</motion.h3>

									{/* Animated Description */}
									<motion.p 
										className="text-[#7B7B7B] text-[14px] leading-relaxed text-base"
										whileHover={{
											color: "#666666",
											transition: { duration: 0.2 }
										}}
									>
										{feature.description}
									</motion.p>
								</div>

								{/* Subtle pulsing accent */}
								<motion.div
									className="absolute top-2 right-2 w-1 h-1 bg-[#FF5A3C]/30 rounded-full"
									animate={{
										scale: [1, 1.2, 1],
										opacity: [0.3, 0.6, 0.3],
									}}
									transition={{
										duration: 2.5,
										repeat: Infinity,
										delay: index * 0.3
									}}
								/>
							</motion.div>
						))}
					</motion.div>
				</div>
			</motion.div>
		</>
	);
}