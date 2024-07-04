const Faq = () => {
	return (
		<div className='flex flex-col gap-8 mt-40'>
			<div className='w-36 rounded-3xl border-[1px] border-solid border-[#4D4C7B] bg-[#FBFBFB] text-center px-6 py-2'>Faq</div>
			<h2>Frequntly Asked Question</h2>

			<div className='flex flex-col'>
				<div tabIndex={0} className='collapse collapse-arrow rounded-lg'>
					<input type='checkbox' className='peer' />
					<div className='collapse-title text-xl font-medium capitalize py-4 bg-[#FFFFF5] px-11'> What are your office hours?</div>
					<div className='collapse-content text-[#343268] capitalize px-11 bg-white transition-all duration-500'>
						<p className='bg-transparent py-4'>
							Our office hours vary by location, but typically we are open Monday through Friday from 8:00 AM to 5:00 PM. Some locations
							may offer extended hours or weekend appointments. Please contact your nearest clinic for specific hours.
						</p>
					</div>
				</div>

				<div tabIndex={0} className='collapse collapse-arrow rounded-lg mt-4'>
					<input type='checkbox' className='peer' />
					<div className='collapse-title text-xl font-medium capitalize py-4 bg-[#FFFFF5] px-11'>How can I schedule an appointment?</div>
					<div className='collapse-content text-[#343268] capitalize px-11 bg-white transition-all duration-500'>
						<p className='bg-transparent py-4'>You can contact us with our number and take an appointment.</p>
					</div>
				</div>

				<div tabIndex={0} className='collapse collapse-arrow rounded-lg mt-4'>
					<input type='checkbox' className='peer' />
					<div className='collapse-title text-xl font-medium capitalize py-4 bg-[#FFFFF5] px-11'>Do you accept insurance?</div>
					<div className='collapse-content text-[#343268] capitalize px-11 bg-white transition-all duration-500'>
						<p className='bg-transparent py-4'>Yes, we accept insurance. Just contact with us and we will share all the details.</p>
					</div>
				</div>

				<div tabIndex={0} className='collapse collapse-arrow rounded-lg mt-4'>
					<input type='checkbox' className='peer' />
					<div className='collapse-title text-xl font-medium capitalize py-4 bg-[#FFFFF5] px-11'>
						What should I bring to my appointment?
					</div>
					<div className='collapse-content text-[#343268] capitalize px-11 bg-white transition-all duration-500'>
						<p className='bg-transparent py-4'>You don't have to bring anything.</p>
					</div>
				</div>

				<div tabIndex={0} className='collapse collapse-arrow rounded-lg mt-4'>
					<input type='checkbox' className='peer' />
					<div className='collapse-title text-xl font-medium capitalize py-4 bg-[#FFFFF5] px-11'>
						Do you offer telemedicine appointments?
					</div>
					<div className='collapse-content text-[#343268] capitalize px-11 bg-white transition-all duration-500'>
						<p className='bg-transparent py-4'>
							Yes, we offer telemedicine appointments. Just contact with us and we will share all the details.
						</p>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Faq
