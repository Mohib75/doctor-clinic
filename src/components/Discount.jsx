import { MdArrowOutward } from "react-icons/md"
import Button from "./Button"

const Discount = () => {
	return (
		<>
			<div className="w-full h-[477px] rounded-[32px] bg-[url('/Images/Discount.png')] bg-cover bg-center custom-shadow my-40">
				<div className='bg-custom-radial w-full h-full flex justify-between p-10 rounded-[32px]'>
					<div className='flex flex-col justify-center gap-4'>
						<h1 className='text-[#FFFFF5] leading-[60px]'>
							Get Your <br /> First Appointment at <br /> 50% Off!
						</h1>

						<div className='flex gap-4'>
							<Button className='btn text-base w-[174px] font-medium rounded-xl border-none bg-[#FFC637] hover:bg-[#FFC637] text-black hover:scale-110 transform transition-all duration-500'>
								Appointment
								<MdArrowOutward className='text-2xl' />
							</Button>

							<Button className='btn text-white text-base w-[174px] bg-transparent rounded-xl border-solid border-[#FFFFF5] border-[1px] hover:bg-[#FFC637] hover:text-black hover:border-none hover:scale-110 transform transition-all duration-500'>
								Learn More
								<MdArrowOutward className='text-2xl' />
							</Button>
						</div>
					</div>
					<div className='w-[125px]'>
						<img className='object-cover w-full' src='/Images/logo-light.png' alt='Logo' />
					</div>
				</div>
			</div>
		</>
	)
}

export default Discount
