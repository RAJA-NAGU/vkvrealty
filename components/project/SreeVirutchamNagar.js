"use client";
import { motion } from "framer-motion";
import HeadingMultiColour from "@/components/HeadingMultiColour.js";
import Image from 'next/image';

import fold1icon1 from "@/images/project/sree-virutcham-nagar/fold1icon1.svg";
import fold1icon2 from "@/images/project/sree-virutcham-nagar/fold1icon2.svg";
import fold1icon3 from "@/images/project/sree-virutcham-nagar/fold1icon3.svg";
import fold1icon4 from "@/images/project/sree-virutcham-nagar/fold1icon4.svg";
import fold1icon5 from "@/images/project/sree-virutcham-nagar/fold1icon5.svg";

import fold2image1 from "@/images/project/sree-virutcham-nagar/fold2image1.png";
import fold3image1 from "@/images/project/sree-virutcham-nagar/fold3image1.png";

import fold4icon1 from "@/images/project/sree-virutcham-nagar/fold4icon1.svg";
import fold4icon2 from "@/images/project/sree-virutcham-nagar/fold4icon2.svg";
import fold4icon3 from "@/images/project/sree-virutcham-nagar/fold4icon3.svg";
import fold4icon4 from "@/images/project/sree-virutcham-nagar/fold4icon4.svg";

export default function SreeVirutchamNagar() {
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
			value: 'Pollachi to Aliyar Road, Near Rangasamudram, Pollachi, Tamil Nadu',
		},
		{
			icon: fold1icon2,
			title: 'Starting Price',
			value: '₹ 6 Lakhs per Cent',
		},
		{
			icon: fold1icon3,
			title: 'Land Area',
			value: '5 Acres',
		},
		{
			icon: fold1icon4,
			title: 'Available Units',
			value: '98 Plots',
		},
		{
			icon: fold1icon5,
			title: 'Development Stage',
			value: 'Ready-to-Move',
		}
	];

	const whySreeVirutchamNagar = [
		{
			icon: fold4icon1,
			title: 'Incredible Value:',
			description: 'Starting at ₹6 Lakhs per Cent, it\'s one of the most affordable options in the area.'
		},
		{
			icon: fold4icon2,
			title: 'Complete Amenities:',
			description: 'Gated community, children\'s park, street lights, wide internal roads, and more'
		},
		{
			icon: fold4icon3,
			title: 'Invest in Peace of Mind:',
			description: 'With DTCP and RERA approvals, your investment is safe and secure.'
		},
		{
			icon: fold4icon4,
			title: 'High Appreciation Potential:',
			description: 'Enjoy a solid return with 8-10% annual appreciation in the rapidly growing Pollachi area.'
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
							textLeft="Sree Virutcham Nagar – " 
							textRight="Your Affordable Path to Investment" 
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

			{/* Affordable Excellence Section */}
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
										alt="Aerial view of Sree Virutcham Nagar development"
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

								{/* Affordable investment glow */}
								<motion.div
									className="absolute -inset-4 bg-gradient-to-r from-green-500/20 to-[#FF5A3C]/20 rounded-xl blur-xl -z-10"
									initial={{ opacity: 0, scale: 0.8 }}
									animate={{ 
										opacity: 0.3, 
										scale: 1,
										transition: { 
											duration: 1.5,
											delay: 0.8
										}
									}}
									whileHover={{
										opacity: 0.6,
										scale: 1.1,
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
									Affordable Excellence at Sree Virutcham Nagar
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
									Looking for a secure, budget-friendly investment with all the right 
									amenities? Sree Virutcham Nagar offers exactly that, with plots 
									starting from ₹6 Lakhs per Cent. Ideal for both first-time 
									buyers and seasoned investors. Located just minutes from 
									Pollachi, this project features DTCP-approved plots with clear legal 
									titles, ensuring peace of mind for you and your family.
								</motion.p>

								<motion.p 
									className="text-lg leading-relaxed"
									variants={fadeInUp}
									whileHover={{
										x: 5,
										transition: { duration: 0.2 }
									}}
								>
									With 98 plots on 5 acres of lush land, you get flexibility in plot 
									sizes (ranging from 2 to 5 cents), tailored to suit your budget and 
									requirements. The ready-to-move status ensures that 
									you can start building your dream home immediately.
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
								Strategic Location and Key Connectivity
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
										600m to Rangasamudram Bus Stop, 5 km to Pollachi, and 50 km 
										to Coimbatore International Airport.
									</p>
								</div>
							</motion.div>

							{/* Local Amenities Section */}
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
										Local Amenities:
									</motion.h3>
									<p className="text-lg text-[#071C1F] leading-relaxed">
										Schools, hospitals, and grocery stores are just a stone&apos;s throw 
										away, making life easy and convenient.
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
										alt="Aerial view showing location and connectivity of Sree Virutcham Nagar"
										className="w-full"
									/>
								</motion.div>

								{/* Overlay effect */}
								<motion.div
									className="absolute inset-0 bg-gradient-to-br from-green-500/10 to-[#FF5A3C]/10 opacity-0 rounded-lg"
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

					{/* Why Sree Virutcham Nagar Section */}
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
							Why Sree Virutcham Nagar Stands Out:
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
						{whySreeVirutchamNagar.map((feature, index) => (
							<motion.div
								key={index}
								className="bg-white rounded-lg p-4 shadow-sm hover:shadow-lg transition-shadow duration-300 border border-[#FF5A3C1A] relative overflow-hidden"
								variants={cardVariants}
								whileHover={{
									y: -8,
									scale: 1.02,
									boxShadow: "0 20px 40px rgba(34, 197, 94, 0.15)",
									transition: { duration: 0.3, ease: "easeOut" }
								}}
							>
								{/* Background gradient on hover - green theme for affordability */}
								<motion.div
									className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-[#FF5A3C]/5 opacity-0"
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

								{/* Affordable investment accent */}
								<motion.div
									className="absolute top-2 right-2 w-1 h-1 bg-green-500/40 rounded-full"
									animate={{
										scale: [1, 1.3, 1],
										opacity: [0.4, 0.8, 0.4],
									}}
									transition={{
										duration: 2.8,
										repeat: Infinity,
										delay: index * 0.4
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