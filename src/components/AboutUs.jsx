import { MdArrowOutward } from "react-icons/md"
import Button from "./Button"

const AboutUs = () => {
	return (
		<div className='flex justify-between gap-4 mt-40'>
			<div className='flex flex-col gap-8 w-[40%]'>
				<div className='w-36 rounded-3xl border-[1px] border-solid border-[#343268] bg-[#FFFFF5] text-center px-6 py-2'>Who we are</div>

				<h2>
					We Help To Get <br /> Solutions
				</h2>

				<p className='text-base leading-6'>
					We are proud to be a trusted healthcare provider in our community, and we look forward to serving you and your family with
					excellence, integrity, and compassion. Your health is our priority, and we are here for you every step of the way. We believe in
					treating each patient with dignity, respect, and empathy, ensuring that they receive the attention and care they deserve.
				</p>

				<Button className='btn text-base w-[174px] font-medium rounded-xl border-none bg-[#FFC637] text-black hover:bg-[#FFC637] hover:scale-110 transform transition-all duration-500'>
					Learn More
					<MdArrowOutward className='text-2xl' />
				</Button>
			</div>

			<div className='w-[50%] relative'>
				<div className="rounded-[32px] bg-[url('/Images/Mission.png')] h-[90%] bg-cover bg-center"></div>

				<div className='w-[70%] rounded-[32px] bg-[#343268] p-7 py-10 flex flex-col gap-4 absolute bottom-0 left-[-15%]'>
					<h3 className='text-white '>Our mission is simple</h3>
					<p className='text-base text-[#FFFFFFCC]'>
						To provide high-quality healthcare services that are accessible, personalized, and patient-centered.
					</p>
				</div>
			</div>
		</div>
	)
}

export default AboutUs
