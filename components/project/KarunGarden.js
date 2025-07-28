"use client";
import { motion } from "framer-motion";
import HeadingMultiColour from "@/components/HeadingMultiColour.js";
import Image from 'next/image';

import fold1icon1 from "@/images/project/karun-garden/fold1icon1.svg";
import fold1icon2 from "@/images/project/karun-garden/fold1icon2.svg";
import fold1icon3 from "@/images/project/karun-garden/fold1icon3.svg";
import fold1icon4 from "@/images/project/karun-garden/fold1icon4.svg";
import fold1icon5 from "@/images/project/karun-garden/fold1icon5.svg";

import fold2image1 from "@/images/project/karun-garden/fold2image1.jpg";
import fold3image1 from "@/images/project/karun-garden/fold3image1.png";

import fold4icon1 from "@/images/project/karun-garden/fold4icon1.svg";
import fold4icon2 from "@/images/project/karun-garden/fold4icon2.svg";
import fold4icon3 from "@/images/project/karun-garden/fold4icon3.svg";
import fold4icon4 from "@/images/project/karun-garden/fold4icon4.svg";

export default function KarunGarden() {
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

	// const scaleIn = {
	// 	hidden: { 
	// 		opacity: 0, 
	// 		scale: 0.8 
	// 	},
	// 	visible: { 
	// 		opacity: 1, 
	// 		scale: 1,
	// 		transition: {
	// 			duration: 0.8,
	// 			ease: "easeOut"
	// 		}
	// 	}
	// };

	const features = [
		{
			icon: fold1icon1,
			title: 'Location',
			value: 'Arasampalayam, Kinathukadavu, Coimbatore District, Tamil Nadu',
		},
		{
			icon: fold1icon2,
			title: 'Starting Price',
			value: '₹ 3.5 Lakhs per Cent',
		},
		{
			icon: fold1icon3,
			title: 'Land Area',
			value: '8.47 Acres',
		},
		{
			icon: fold1icon4,
			title: 'Available Units',
			value: '42 Plots',
		},
		{
			icon: fold1icon5,
			title: 'Development Stage',
			value: 'Ready-to-Move',
		}
	];

	const whyKarunGarden = [
		{
			icon: fold4icon1,
			title: 'Affordable Pricing:',
			description: 'Starting at just ₹3.5 Lakhs per Cent, the most competitive in the area.'
		},
		{
			icon: fold4icon2,
			title: 'Immediate Possession:',
			description: 'With our ready-to-move status, you can begin building without delay'
		},
		{
			icon: fold4icon3,
			title: 'Excellent Infrastructure:',
			description: 'Enjoy wide 30ft/25ft tar roads, water supply, drainage, and planned security features.'
		},
		{
			icon: fold4icon4,
			title: 'High Appreciation Potential:',
			description: 'With 7-8% annual appreciation, this is not just a plot, but a growing asset for the future.'
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
							textLeft="Karun Garden – " 
							textRight="The Ideal Affordable Plot in the Heart of Coimbatore" 
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

			{/* Discover Section */}
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
										alt="Aerial view of Karun Garden development"
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
									Discover Karun Garden
								</motion.h2>
								<motion.p 
									className="text-xl lg:text-2xl text-white font-light"
									variants={fadeInUp}
								>
									Where Dreams Meet Reality
								</motion.p>
							</motion.div>

							{/* Description Paragraphs */}
							<motion.div 
								className="space-y-6 text-white"
								variants={sectionVariants}
							>
								<motion.p 
									className="text-lg leading-relaxed"
									variants={fadeInUp}
								>
									Step into a world of affordability, comfort, and growth with Karun 
									Garden, a premium residential plot development nestled in the 
									picturesque Kinathukadavu area, just 3 km off the Pollachi-Coimbatore 
									Highway. Priced from ₹3.5 Lakhs per Cent, Karun Garden offers the 
									perfect investment opportunity with ready-to-move plots that save you 
									from construction delays, unlike many under-construction developments 
									in the area.
								</motion.p>

								<motion.p 
									className="text-lg leading-relaxed"
									variants={fadeInUp}
								>
									Whether you&apos;re a first-time buyer or an investor, Karun Garden 
									provides exceptional value with its Vastu-compliant plots and 
									high-quality infrastructure.
								</motion.p>
							</motion.div>
						</motion.div>
					</div>
				</div>
			</motion.div>

			{/* Location & Connectivity Section */}
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
								Unbeatable Location and Connectivity
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
										Only 1 km to Arasampalayam Bus Stop, 3 km to Kinathukadavu 
										Railway Station, and 38 km to Coimbatore International Airport.
									</p>
								</div>
							</motion.div>

							{/* Nearby Essentials Section */}
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
										Nearby<br className="hidden sm:block" />
										Essentials:
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
										alt="Aerial view showing location and connectivity of Karun Garden"
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
							</div>
						</motion.div>
					</div>

					{/* Why Karun Garden Section */}
					<motion.div 
						className="text-center mb-16 mt-20"
						variants={fadeInUp}
						initial="hidden"
						whileInView="visible"
						viewport={{ once: true, margin: "-50px" }}
					>
						<h2 className="text-3xl lg:text-[24px] font-light text-[#071C1F] leading-tight">
							Why Karun Garden is the Smart Choice
						</h2>
					</motion.div>

					{/* Animated Features Grid */}
					<motion.div 
						className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
						variants={sectionVariants}
						initial="hidden"
						whileInView="visible"
						viewport={{ once: true, margin: "-50px" }}
					>
						{whyKarunGarden.map((feature, index) => (
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
							</motion.div>
						))}
					</motion.div>
				</div>
			</motion.div>
		</>
	);
}