'use client';
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

import Header from '@/components/Header.js';
import Footer from '@/components/Footer.js';
import HeadingMultiColour from '@/components/HeadingMultiColour.js';

import fold1icon1 from '@/images/contact/fold1icon1.svg';
import fold1icon2 from '@/images/contact/fold1icon2.svg';
import fold1icon3 from '@/images/contact/fold1icon3.svg';

export default function Contact() {
	const contactsList = [
		{
			title: '(+91) 87788-99100',
			icon: fold1icon1,
			link: 'tel: +918778899100',
		},
		{
			title: 'info@vkvrealty.com',
			icon: fold1icon2,
			link: 'mailto: info@vkvrealty.com',
		},
		{
			title: 'E1, Vijyasurya Residency, Appanaicken Palayam, Thudiyalur, Coimbatore – 641 034',
			icon: fold1icon3,
			link: 'https://maps.app.goo.gl/oXTjPR8GF64zKa6k8',
		},
	]
	const [formData, setFormData] = useState({
	    firstName: '',
	    lastName: '',
	    email: '',
	    phone: '',
	    message: ''
	  });

	  const [errors, setErrors] = useState({});
	  const [isSubmitting, setIsSubmitting] = useState(false);

	  const handleInputChange = (e) => {
	    const { name, value } = e.target;
	    setFormData(prev => ({
	      ...prev,
	      [name]: value
	    }));
	    
	    // Clear error when user starts typing
	    if (errors[name]) {
	      setErrors(prev => ({
	        ...prev,
	        [name]: ''
	      }));
	    }
	  };

	  const validateForm = () => {
	    const newErrors = {};

	    // Required fields validation
	    if (!formData.firstName.trim()) {
	      newErrors.firstName = 'First name is required';
	    }

	    if (!formData.lastName.trim()) {
	      newErrors.lastName = 'Last name is required';
	    }

	    if (!formData.email.trim()) {
	      newErrors.email = 'Email is required';
	    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
	      newErrors.email = 'Please enter a valid email address';
	    }

	    if (!formData.message.trim()) {
	      newErrors.message = 'Message is required';
	    }

	    // Optional phone validation
	    if (formData.phone && !/^[\+]?[1-9][\d]{0,15}$/.test(formData.phone.replace(/[\s\-\(\)]/g, ''))) {
	      newErrors.phone = 'Please enter a valid phone number';
	    }

	    return newErrors;
	  };

	  const handleSubmit = async () => {
	    const formErrors = validateForm();
	    
	    if (Object.keys(formErrors).length > 0) {
	      setErrors(formErrors);
	      return;
	    }

	    setIsSubmitting(true);
	    
	    try {
	      // Prepare data for API call
	      const submissionData = {
	        firstName: formData.firstName.trim(),
	        lastName: formData.lastName.trim(),
	        email: formData.email.trim(),
	        phone: formData.phone.trim(),
	        message: formData.message.trim(),
	        timestamp: new Date().toISOString()
	      };

	      console.log('Form data ready for API:', submissionData);
	      
	      // TODO: Replace with actual API call
	      // await submitContactForm(submissionData);
	      
	      // Simulate API call
	      await new Promise(resolve => setTimeout(resolve, 1000));
	      
	      // Reset form on success
	      setFormData({
	        firstName: '',
	        lastName: '',
	        email: '',
	        phone: '',
	        message: ''
	      });
	      
	      alert('Thank you! Your inquiry has been submitted successfully.');
	      
	    } catch (error) {
	      console.error('Form submission error:', error);
	      alert('Something went wrong. Please try again.');
	    } finally {
	      setIsSubmitting(false);
	    }
	  };
	return(
		<>
			<Header currentTab="contact" />
			<div className="bg-linear-to-r from-[#FF5A3C05] to-[#2F2E7505]">
				<div className="max-w-[1300px] mx-auto sm:px-[50px] px-[10px] py-5 flex lg:flex-row flex-col gap-10 justify-between">
					{/* Left Side - Heading and Map */}
		            <div>
		            	<HeadingMultiColour customStyle="text-[40px] leading-[50px] my-[10px] font-bold font-['Benton Sans'] max-w-2xl" textLeft="Get in " textRight="Touch" />
		            	<div className="text-[#677788] my-5">
		            		We&apos;d love to talk about how we can help you.
		            	</div>
		            	<div className="flex flex-col gap-5">
			            	{contactsList.map((feature, index) => (
			            		<Link key={index} href={feature.link}>
					              <div className="flex items-center gap-6">
					              	<div className="bg-[#FF5A3C] p-5 rounded-full">
					              		<Image src={feature.icon} alt={feature.title} className="min-w-8 min-h-8" />
					              	</div>
					              	<div className="max-w-[300px]">{feature.title}</div>
					              </div>
					            </Link>
				            ))}
				        </div>
		            </div>

		            {/* Right Side - Contact Form */}
		            <div className="bg-white rounded-md p-6 shadow-xl border border-gray-200">
		              <div className="space-y-6">
		                {/* Name Fields */}
		                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
		                  <div>
		                    <label htmlFor="firstName" className="block text-md font-normal text-[#1E2022] mb-2">
		                      First name
		                    </label>
		                    <input
		                      type="text"
		                      id="firstName"
		                      name="firstName"
		                      value={formData.firstName}
		                      onChange={handleInputChange}
		                      className={`w-full px-4 py-3 border rounded-lg ${
		                        errors.firstName ? 'border-red-500' : 'border-gray-300'
		                      }`}
		                      placeholder="First name"
		                    />
		                    {errors.firstName && (
		                      <p className="mt-1 text-sm text-red-600">{errors.firstName}</p>
		                    )}
		                  </div>

		                  <div>
		                    <label htmlFor="lastName" className="block text-md font-normal text-[#1E2022] mb-2">
		                      Last name
		                    </label>
		                    <input
		                      type="text"
		                      id="lastName"
		                      name="lastName"
		                      value={formData.lastName}
		                      onChange={handleInputChange}
		                      className={`w-full px-4 py-3 border rounded-md ${
		                        errors.lastName ? 'border-red-500' : 'border-gray-300'
		                      }`}
		                      placeholder="Last name"
		                    />
		                    {errors.lastName && (
		                      <p className="mt-1 text-sm text-red-600">{errors.lastName}</p>
		                    )}
		                  </div>
		                </div>

		                {/* Email and Phone */}
		                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
		                  <div>
		                    <label htmlFor="email" className="block text-md font-normal text-[#1E2022] mb-2">
		                      Email address
		                    </label>
		                    <input
		                      type="email"
		                      id="email"
		                      name="email"
		                      value={formData.email}
		                      onChange={handleInputChange}
		                      className={`w-full px-4 py-3 border rounded-md ${
		                        errors.email ? 'border-red-500' : 'border-gray-300'
		                      }`}
		                      placeholder="email@site.com"
		                    />
		                    {errors.email && (
		                      <p className="mt-1 text-sm text-red-600">{errors.email}</p>
		                    )}
		                  </div>

		                  <div>
		                    <label htmlFor="phone" className="block text-md font-normal text-[#1E2022] mb-2">
		                      Phone <span className="text-gray-500">(Optional)</span>
		                    </label>
		                    <input
		                      type="tel"
		                      id="phone"
		                      name="phone"
		                      value={formData.phone}
		                      onChange={handleInputChange}
		                      className={`w-full px-4 py-3 border rounded-md ${
		                        errors.phone ? 'border-red-500' : 'border-gray-300'
		                      }`}
		                      placeholder="+X(XXX)XXX-XX-XX"
		                    />
		                    {errors.phone && (
		                      <p className="mt-1 text-sm text-red-600">{errors.phone}</p>
		                    )}
		                  </div>
		                </div>

		                {/* Message */}
		                <div>
		                  <label htmlFor="message" className="block text-md font-normal text-[#1E2022] mb-2">
		                    Message
		                  </label>
		                  <textarea
		                    id="message"
		                    name="message"
		                    rows={4}
		                    value={formData.message}
		                    onChange={handleInputChange}
		                    className={`w-full px-4 py-3 border rounded-md ${
		                      errors.message ? 'border-red-500' : 'border-gray-300'
		                    }`}
		                    placeholder="Tell us about your ..."
		                  />
		                  {errors.message && (
		                    <p className="mt-1 text-sm text-red-600">{errors.message}</p>
		                  )}
		                </div>

		                {/* Submit Button */}
		                <button
		                    onClick={handleSubmit}
		                    disabled={isSubmitting}
		                    className="w-full py-3 bg-[#2F2E75] text-white px-6 rounded-md font-semibold hover:bg-blue-900 transition-colors disabled:opacity-50 disabled:cursor-not-allowed hover:cursor-pointer"
		                > 
		                    <span className="whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight text-white dark:from-white dark:to-slate-900/10 lg:text-lg">
		                      {isSubmitting ? 'Sending...' : 'Send inquiry'}
		                    </span>
		                </button> 

		                {/* Response Time Notice */}
		                <p className="text-center text-sm text-gray-500">
		                  We&apos;ll get back to you in 1-2 business days.
		                </p>
		              </div>
		            </div>
				</div>
			</div>
			<Footer />
		</>
	)
}