"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import FormComponent from "@/components/FormComponent.js";
import HeadingMultiColour from "@/components/HeadingMultiColour.js";
import Fold1Image1 from "@/images/home/fold1/fold1image1.png";

export default function Fold1() {
	const containerVariants = {
		hidden: { opacity: 0 },
		visible: {
			opacity: 1,
			transition: {
				duration: 0.6,
				staggerChildren: 0.2,
				delayChildren: 0.1,
			},
		},
	};

	const slideInLeft = {
		hidden: { opacity: 0, x: -60, y: 20 },
		visible: {
			opacity: 1,
			x: 0,
			y: 0,
			transition: {
				duration: 0.8,
				ease: [0.25, 0.25, 0.25, 0.75],
			},
		},
	};

	const slideInRight = {
		hidden: { opacity: 0, x: 60, scale: 0.95 },
		visible: {
			opacity: 1,
			x: 0,
			scale: 1,
			transition: {
				duration: 1,
				ease: [0.25, 0.25, 0.25, 0.75],
				delay: 0.3,
			},
		},
	};

	const fadeInUp = {
		hidden: { opacity: 0, y: 30 },
		visible: {
			opacity: 1,
			y: 0,
			transition: {
				duration: 0.7,
				ease: "easeOut",
			},
		},
	};

	const scaleIn = {
		hidden: { opacity: 0, scale: 0.9, y: 20 },
		visible: {
			opacity: 1,
			scale: 1,
			y: 0,
			transition: {
				duration: 0.6,
				ease: "easeOut",
			},
		},
	};

	return (
		<motion.div
			className="mt-[50px] sm:flex justify-between items-center sm:gap-[10px] font-['Proxima Nova']"
			variants={containerVariants}
			initial="hidden"
			animate="visible"
			viewport={{ once: true, margin: "-100px" }}
		>
			{/* Left Section */}
			<div className="lg:w-[600px]">
				<motion.div variants={slideInLeft}>
					<HeadingMultiColour
						customStyle="xl:text-[65px] text-[48px] leading-[68px] my-[10px] font-bold font-['Benton Sans']"
						textLeft="VKV Realty – "
						textRight="Building Trust Since 1985"
					/>
				</motion.div>

				<motion.div className="font-bold my-[30px]" variants={fadeInUp}>
					Turning Your Land Dreams into Landmarks
				</motion.div>

				<motion.div
					className="font-light text-[#5C727D] leading-[28px]"
					variants={fadeInUp}
				>
					With a legacy that spans nearly four decades, VKV Realty has been
					shaping the skyline of Tamil Nadu—plot by plot. Whether you&apos;re
					looking to build your dream home or make a solid investment, we make
					the journey seamless, secure, and satisfying.
				</motion.div>

				<motion.div variants={scaleIn}>
					<FormComponent />
				</motion.div>
			</div>

			{/* Right Image Section */}
			<motion.div
				layout="position"
				className="max-lg:hidden w-[700px] will-change-transform"
				variants={slideInRight}
			>
				<div className="relative overflow-hidden rounded-[20px]">
					<Image
						src={Fold1Image1}
						className="rounded-[20px] block"
						alt="Modern Building Architecture"
						priority
					/>
					{/* Removed overlay */}
				</div>
			</motion.div>
		</motion.div>
	);
}
