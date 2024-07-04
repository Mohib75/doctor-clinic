import { MdArrowOutward } from "react-icons/md"
import Button from "./Button"

const Service = () => {
	return (
		<div className='flex flex-col gap-12 mt-40 h-[832px] bg-[#FFFFF5] rounded-[32px] p-8'>
			<div className='flex justify-between gap-8'>
				<div className='flex flex-col gap-8 w-[50%]'>
					<div className='w-36 rounded-3xl border-[1px] border-solid border-[#4D4C7B] bg-[#FBFBFB] text-center px-6 py-2'>Service</div>

					<h2>
						Empowering Health, <br /> Enriching Lives
					</h2>

					<p className='text-base leading-6 pr-28'>
						We are committed to providing high-quality, compassionate care to every patient we serve. Whatever your healthcare needs may
						be, you can trust us to be your partner in health and wellness.
					</p>

					<Button className='btn text-base w-[174px] font-medium rounded-xl border-none bg-[#FFC637] text-black hover:bg-[#FFC637] hover:scale-110 transform transition-all duration-500'>
						Appointment
						<MdArrowOutward className='text-2xl' />
					</Button>
				</div>

				<div className="rounded-[32px] w-[50%] bg-[url('/Images/Service-1.png')] bg-cover bg-center relative">
					<div className='w-[65%] h-[144px] rounded-[20px] opacity-60 bg-[#020043] absolute bottom-8 left-8'></div>
					<div className='w-[65%] p-7 flex gap-4 absolute bottom-8 left-8'>
						<div className='flex flex-col gap-4'>
							<h3 className='text-[#FFFFF5] text-xl font-semibold'>Advanced Technology</h3>
							<p className='text-[#FFFFF5] text-xs opacity-90'>
								Our surgeons are trained in the latest robotic surgical techniques, which allow for greater precision
							</p>
						</div>
						<div className='flex flex-col self-end'>
							<div className='w-12 h-12 rounded-full bg-[#FFC637] flex items-center justify-center'>
								<MdArrowOutward className='text-white text-2xl' />
							</div>
						</div>
					</div>
				</div>
			</div>

			<div className='flex justify-between gap-8 h-full'>
				<div className="rounded-[32px] w-[50%] bg-[url('/Images/Service-2.png')] bg-cover bg-center relative">
					<div className='w-[65%] h-[144px] rounded-[20px] opacity-60 bg-[#020043] absolute bottom-8 left-8'></div>
					<div className='w-[65%] p-7 flex gap-4 absolute bottom-8 left-8'>
						<div className='flex flex-col gap-4'>
							<h3 className='text-[#FFFFF5] text-xl font-semibold'>Online Doctor Meet</h3>
							<p className='text-[#FFFFF5] text-xs opacity-90'>
								Our surgeons are trained in the latest robotic surgical techniques, which allow for greater precision
							</p>
						</div>
						<div className='flex flex-col self-end'>
							<div className='w-12 h-12 rounded-full bg-[#FFC637] flex items-center justify-center'>
								<MdArrowOutward className='text-white text-2xl' />
							</div>
						</div>
					</div>
				</div>

				<div className="rounded-[32px] w-[50%] bg-[url('/Images/Service-3.png')] bg-cover bg-center relative">
					<div className='w-[65%] h-[144px] rounded-[20px] opacity-60 bg-[#020043] absolute bottom-8 left-8'></div>
					<div className='w-[65%] p-7 flex gap-4 absolute bottom-8 left-8'>
						<div className='flex flex-col gap-4'>
							<h3 className='text-[#FFFFF5] text-xl font-semibold'>Consultancy your health</h3>
							<p className='text-[#FFFFF5] text-xs opacity-90'>
								Our surgeons are trained in the latest robotic surgical techniques, which allow for greater precision
							</p>
						</div>
						<div className='flex flex-col self-end'>
							<div className='w-12 h-12 rounded-full bg-[#FFC637] flex items-center justify-center'>
								<MdArrowOutward className='text-white text-2xl' />
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Service
