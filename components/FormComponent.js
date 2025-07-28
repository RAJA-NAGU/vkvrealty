"use client";
import { MagneticButton } from "@/components/ui/magnetic-button.tsx";

export default function FormComponent() {
	let emailregex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
	let phoneregex = /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/;

	function onInputClicked(inputId) {
		let inputDiv = document.getElementById(inputId);
		let inputLabel = inputDiv.getElementsByTagName("label")[0];
		inputLabel.style.animationName = "decreaseFontsize";
		inputLabel.style.animationDuration = "0.2s";

		setTimeout(function () {
			inputLabel.classList.remove("text-[#677788]");
			inputLabel.classList.add("text-[12px]");
			inputLabel.classList.add("mb-[50px]");
			inputLabel.classList.add("text-[#37405E]");
		}, 100);

		// hide error
		switch (inputId) {
			case "fullName":
				document.getElementById("errorName").classList.add("invisible");
				break;
			case "email":
				document.getElementById("errorEmail").classList.add("invisible");
				break;
			case "phoneNumber":
				document.getElementById("errorPhonenumber").classList.add("invisible");
				break;
		}
	}

	function onInputFocusOut(inputId) {
		let inputDiv = document.getElementById(inputId);
		let inputLabel = inputDiv.getElementsByTagName("label")[0];
		let inputText = inputDiv.getElementsByTagName("input")[0];

		if (!inputText.value.trim()) {
			inputLabel.style.animationName = "increaseFontsize";
			inputLabel.style.animationDuration = "0.2s";

			setTimeout(function () {
				inputLabel.classList.add("text-[#677788]");
				inputLabel.classList.remove("text-[12px]");
				inputLabel.classList.remove("mb-[50px]");
				inputLabel.classList.remove("text-[#37405E]");
			}, 100);
		}
	}

	function validateInput() {
		let fname = document.getElementById("fname");
		let femail = document.getElementById("femail");
		let fphonenumber = document.getElementById("fphonenumber");

		let errorName = document.getElementById("errorName");
		let errorEmail = document.getElementById("errorEmail");
		let errorPhonenumber = document.getElementById("errorPhonenumber");

		let isError = false;

		if (!fname.value.trim()) {
			errorName.classList.remove("invisible");
			isError = true;
		}
		if (!emailregex.test(femail.value)) {
			errorEmail.classList.remove("invisible");
			isError = true;
		}
		if (!phoneregex.test(fphonenumber.value)) {
			errorPhonenumber.classList.remove("invisible");
			isError = true;
		}

		if (!isError) {
			window.centilio_connector_init.submit();

			fname.value = "";
			onInputFocusOut("fullName");

			femail.value = "";
			onInputFocusOut("email");

			fphonenumber.value = "";
			onInputFocusOut("phoneNumber");

			openThankYouModal();
			setTimeout(closeThankYouModal, 5000);
		}
	}

	function closeThankYouModal() {
		document.getElementById("thankYouModal").classList.add("hidden");
		document.getElementById("modalOverlay").classList.add("hidden");
	}

	function openThankYouModal() {
		document.getElementById("thankYouModal").classList.remove("hidden");
		document.getElementById("modalOverlay").classList.remove("hidden");
	}

	return (
		<>
			<div className="mt-[20px] flex flex-col gap-[10px] sm:w-[90%] max-w-[400px]">
				{/* Full Name */}
				<div>
					<div
						id="fullName"
						className="flex border border-[#37405E] rounded-[5px] h-[50px] items-center relative"
						onClick={() => onInputClicked("fullName")}
					>
						<label className="ml-[5px] absolute text-[#677788] cursor-text bg-white px-[10px] pointer-events-none">
							Full name
						</label>
						<input
							id="fname"
							name="fname"
							type="text"
							placeholder=""
							className="outline-none mx-[10px] w-full centilio-input-last-name"
							onBlur={() => onInputFocusOut("fullName")}
						/>
					</div>
					<div id="errorName" className="text-right mt-[2px] text-[12px] text-[#ff3f3f] invisible">
						Full name cannot be empty
					</div>
				</div>

				{/* Email */}
				<div>
					<div
						id="email"
						className="flex border border-[#37405E] rounded-[5px] h-[50px] items-center relative"
						onClick={() => onInputClicked("email")}
					>
						<label className="ml-[5px] absolute text-[#677788] cursor-text bg-white px-[10px] pointer-events-none">
							Email
						</label>
						<input
							id="femail"
							name="femail"
							type="text"
							placeholder=""
							className="outline-none mx-[10px] w-full centilio-input-email"
							onBlur={() => onInputFocusOut("email")}
						/>
					</div>
					<div id="errorEmail" className="text-right mt-[2px] text-[12px] text-[#ff3f3f] invisible">
						Please provide a valid email
					</div>
				</div>

				{/* Phone Number */}
				<div>
					<div
						id="phoneNumber"
						className="flex border border-[#37405E] rounded-[5px] h-[50px] items-center relative"
						onClick={() => onInputClicked("phoneNumber")}
					>
						<label className="ml-[5px] absolute text-[#677788] cursor-text bg-white px-[10px] pointer-events-none">
							Phone Number
						</label>
						<input
							id="fphonenumber"
							name="fphonenumber"
							type="text"
							placeholder=""
							className="outline-none mx-[10px] w-full centilio-input-mobile"
							onBlur={() => onInputFocusOut("phoneNumber")}
						/>
					</div>
					<div id="errorPhonenumber" className="text-right mt-[2px] text-[12px] text-[#ff3f3f] invisible">
						Please provide valid phone number
					</div>
				</div>

				{/* Submit Button */}
				<div id="bookVisitNowButton" className="book-visit-button" onClick={() => validateInput()}>
					<MagneticButton className="w-full">
						<button className="cursor-pointer bg-[#f35c25] hover:bg-[#e45420] transition-colors px-4 text-lg text-white py-3 rounded-[5px] w-full">
							<span className="text-[18px] font-semibold text-center">Book Your Visit Today</span>
						</button>
					</MagneticButton>
				</div>
			</div>

			{/* Modal */}
			<div id="modalOverlay" className="w-full bg-[#000000ab] fixed top-0 left-0 h-full z-[5] hidden">
				<div id="thankYouModal" className="w-full h-full bg-[#7f808080] fixed z-[6] text-center hidden">
					<div
						className="text-[#37405E] fixed bg-[#c2d9ff] top-1/2 left-1/2 py-[30px] px-[10px] sm:w-[400px] w-[90%] rounded-[10px] z-[5] leading-[35px] border border-[#37405E]"
						style={{ transform: "translate(-50%, -50%)" }}
					>
						<div className="bg-[#37405E] w-max px-[15px] py-[18px] rounded-full mx-auto">
							<svg width="30" height="24" viewBox="0 0 10 8" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path
									d="M8.01587 1.77777L3.65079 6.22222L1.66667 4.20201"
									stroke="#FFFFFF"
									strokeWidth="1"
									strokeLinecap="round"
									strokeLinejoin="round"
								/>
							</svg>
						</div>
						<div className="text-[30px] font-semibold my-[20px]">Thank You!</div>
						<div>We&apos;ll reach you out soon!</div>
						<div
							className="bg-[#dc3737] text-white cursor-pointer rounded-[5px] my-[20px] w-max mx-auto px-[20px] font-medium"
							onClick={() => closeThankYouModal()}
						>
							Close
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
