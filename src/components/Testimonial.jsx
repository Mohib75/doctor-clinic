// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react"

// Import Swiper styles
import "swiper/css"
import "swiper/css/pagination"

// import required modules
import { Pagination } from "swiper/modules"

const Testimonial = () => {
	return (
		<div className='flex flex-col gap-8 mt-40'>
			<div className='w-36 rounded-3xl border-[1px] border-solid border-[#4D4C7B] bg-[#FBFBFB] text-center px-6 py-2'>Testimonial</div>
			<h2>What they say about us</h2>

			<Swiper
				slidesPerView={3}
				spaceBetween={60}
				pagination={{
					clickable: true,
				}}
				modules={[Pagination]}
				className='mySwiper w-full !h-[280px]'>
				<SwiperSlide>
					<div className='w-96 h-60 rounded-2xl bg-[#FFFFF5] p-5 pr-12 flex flex-col gap-4 justify-between'>
						<h4>Expertise and Compassion Combined</h4>
						<p className='text-xs leading-4'>
							I can't thank enough for their exceptional care. The doctors and staff showed incredible expertise and compassion
							throughout my treatment journey. I felt truly cared for every step of the way.
						</p>
						<div className='flex gap-2 '>
							<div className=''>
								<img className='object-cover w-full rounded-full' src='/Images/testimonial-1.png' alt='' />
							</div>

							<div className='flex flex-col gap-2'>
								<p className='text-xs leading-4'>
									<span className='text-[#020043] font-semibold'>Sarah D,</span> IT Professional
								</p>

								<div className='flex gap-2'>
									<div className='w-[14px]'>
										<img className='w-full object-cover' src='/star.svg' alt='' />
									</div>
									<div className='w-[14px]'>
										<img className='w-full object-cover' src='/star.svg' alt='' />
									</div>
									<div className='w-[14px]'>
										<img className='w-full object-cover' src='/star.svg' alt='' />
									</div>
									<div className='w-[14px]'>
										<img className='w-full object-cover' src='/star.svg' alt='' />
									</div>
									<div className='w-[14px]'>
										<img className='w-full object-cover' src='/star.svg' alt='' />
									</div>
								</div>
							</div>
						</div>
					</div>
				</SwiperSlide>
				<SwiperSlide>
					<div className='w-96 h-60 rounded-2xl bg-[#FFFFF5] p-5 pr-12 flex flex-col gap-4 justify-between'>
						<h4>Life-Saving Care, Life-Changing Experience</h4>
						<p className='text-xs leading-4'>
							My experience at [Healthcare Provider Name] was life-changing. The prompt and accurate diagnosis, coupled with the
							advanced treatments they provided, saved my life.
						</p>
						<div className='flex gap-2'>
							<div className=''>
								<img className='object-cover w-full rounded-full' src='/Images/testimonial-2.png' alt='' />
							</div>

							<div className='flex flex-col gap-2'>
								<p className='text-xs leading-4'>
									<span className='text-[#020043] font-semibold'>Michael R,</span> Business Executive
								</p>

								<div className='flex gap-2'>
									<div className='w-[14px]'>
										<img className='w-full object-cover' src='/star.svg' alt='' />
									</div>
									<div className='w-[14px]'>
										<img className='w-full object-cover' src='/star.svg' alt='' />
									</div>
									<div className='w-[14px]'>
										<img className='w-full object-cover' src='/star.svg' alt='' />
									</div>
									<div className='w-[14px]'>
										<img className='w-full object-cover' src='/star.svg' alt='' />
									</div>
									<div className='w-[14px]'>
										<img className='w-full object-cover' src='/star.svg' alt='' />
									</div>
								</div>
							</div>
						</div>
					</div>
				</SwiperSlide>
				<SwiperSlide>
					<div className='w-96 h-60 rounded-2xl bg-[#FFFFF5] p-5 pr-12 flex flex-col gap-4 justify-between'>
						<h4 className='pr-20'>A Partner in Health and Wellness</h4>
						<p className='text-xs leading-4'>
							As a busy professional, I appreciate the convenience and quality of care I receive at [Healthcare Provider Name]. From
							telemedicine consultations to routine check-ups
						</p>
						<div className='flex gap-2'>
							<div className=''>
								<img className='object-cover w-full rounded-full' src='/Images/testimonial-3.png' alt='' />
							</div>

							<div className='flex flex-col gap-2'>
								<p className='text-xs leading-4'>
									<span className='text-[#020043] font-semibold'>David S,</span> Lawyer
								</p>

								<div className='flex gap-2'>
									<div className='w-[14px]'>
										<img className='w-full object-cover' src='/star.svg' alt='' />
									</div>
									<div className='w-[14px]'>
										<img className='w-full object-cover' src='/star.svg' alt='' />
									</div>
									<div className='w-[14px]'>
										<img className='w-full object-cover' src='/star.svg' alt='' />
									</div>
									<div className='w-[14px]'>
										<img className='w-full object-cover' src='/star.svg' alt='' />
									</div>
									<div className='w-[14px]'>
										<img className='w-full object-cover' src='/star.svg' alt='' />
									</div>
								</div>
							</div>
						</div>
					</div>
				</SwiperSlide>
				<SwiperSlide>
					<div className='w-96 h-60 rounded-2xl bg-[#FFFFF5] p-5 pr-12 flex flex-col gap-4 justify-between'>
						<h4>Expertise and Compassion Combined</h4>
						<p className='text-xs leading-4'>
							I can't thank enough for their exceptional care. The doctors and staff showed incredible expertise and compassion
							throughout my treatment journey. I felt truly cared for every step of the way.
						</p>
						<div className='flex gap-2 '>
							<div className=''>
								<img className='object-cover w-full rounded-full' src='/Images/testimonial-1.png' alt='' />
							</div>

							<div className='flex flex-col gap-2'>
								<p className='text-xs leading-4'>
									<span className='text-[#020043] font-semibold'>Sarah D,</span> IT Professional
								</p>

								<div className='flex gap-2'>
									<div className='w-[14px]'>
										<img className='w-full object-cover' src='/star.svg' alt='' />
									</div>
									<div className='w-[14px]'>
										<img className='w-full object-cover' src='/star.svg' alt='' />
									</div>
									<div className='w-[14px]'>
										<img className='w-full object-cover' src='/star.svg' alt='' />
									</div>
									<div className='w-[14px]'>
										<img className='w-full object-cover' src='/star.svg' alt='' />
									</div>
									<div className='w-[14px]'>
										<img className='w-full object-cover' src='/star.svg' alt='' />
									</div>
								</div>
							</div>
						</div>
					</div>
				</SwiperSlide>
				<SwiperSlide>
					<div className='w-96 h-60 rounded-2xl bg-[#FFFFF5] p-5 pr-12 flex flex-col gap-4 justify-between'>
						<h4>Life-Saving Care, Life-Changing Experience</h4>
						<p className='text-xs leading-4'>
							My experience at [Healthcare Provider Name] was life-changing. The prompt and accurate diagnosis, coupled with the
							advanced treatments they provided, saved my life.
						</p>
						<div className='flex gap-2'>
							<div className=''>
								<img className='object-cover w-full rounded-full' src='/Images/testimonial-2.png' alt='' />
							</div>

							<div className='flex flex-col gap-2'>
								<p className='text-xs leading-4'>
									<span className='text-[#020043] font-semibold'>Michael R,</span> Business Executive
								</p>

								<div className='flex gap-2'>
									<div className='w-[14px]'>
										<img className='w-full object-cover' src='/star.svg' alt='' />
									</div>
									<div className='w-[14px]'>
										<img className='w-full object-cover' src='/star.svg' alt='' />
									</div>
									<div className='w-[14px]'>
										<img className='w-full object-cover' src='/star.svg' alt='' />
									</div>
									<div className='w-[14px]'>
										<img className='w-full object-cover' src='/star.svg' alt='' />
									</div>
									<div className='w-[14px]'>
										<img className='w-full object-cover' src='/star.svg' alt='' />
									</div>
								</div>
							</div>
						</div>
					</div>
				</SwiperSlide>
				<SwiperSlide>
					<div className='w-96 h-60 rounded-2xl bg-[#FFFFF5] p-5 pr-12 flex flex-col gap-4 justify-between'>
						<h4 className='pr-20'>A Partner in Health and Wellness</h4>
						<p className='text-xs leading-4'>
							As a busy professional, I appreciate the convenience and quality of care I receive at [Healthcare Provider Name]. From
							telemedicine consultations to routine check-ups
						</p>
						<div className='flex gap-2'>
							<div className=''>
								<img className='object-cover w-full rounded-full' src='/Images/testimonial-3.png' alt='' />
							</div>

							<div className='flex flex-col gap-2'>
								<p className='text-xs leading-4'>
									<span className='text-[#020043] font-semibold'>David S,</span> Lawyer
								</p>

								<div className='flex gap-2'>
									<div className='w-[14px]'>
										<img className='w-full object-cover' src='/star.svg' alt='' />
									</div>
									<div className='w-[14px]'>
										<img className='w-full object-cover' src='/star.svg' alt='' />
									</div>
									<div className='w-[14px]'>
										<img className='w-full object-cover' src='/star.svg' alt='' />
									</div>
									<div className='w-[14px]'>
										<img className='w-full object-cover' src='/star.svg' alt='' />
									</div>
									<div className='w-[14px]'>
										<img className='w-full object-cover' src='/star.svg' alt='' />
									</div>
								</div>
							</div>
						</div>
					</div>
				</SwiperSlide>
			</Swiper>
		</div>
	)
}

export default Testimonial
