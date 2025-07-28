export default function HeadingMultiColour({textLeft, textRight, customStyle}) {
	return(
		<div className={`font-['News_Cycle'] font-semibold ${customStyle}`}>
			<span className="text-[#F15B26]">{`${textLeft}`}</span>
			<span className="text-[#2F2E75]">{textRight}</span>
		</div>
	)
}