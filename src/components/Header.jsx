const Header = () => {
	return (
		<div className='flex mt-16 relative justify-between'>
			<h1 className='absolute top-0 left-1/2 transform -translate-x-1/2 text-center'>Comprehensive Care for Every Patient</h1>
			<div className='w-52 rounded-3xl border-[0.5px] border-solid border-[#02004333] bg-[#FBFBFB] flex flex-col p-5 pr-8 gap-4 self-end mt-6'>
				<h1>90%</h1>
				<p className='text-[#020043]'>Patient satisfaction rate, reflecting our commitment.</p>
				<div className='w-full flex justify-between'>
					<div></div>
					<div className='w-32'>
						<img className='w-full object-cover' src='/patient-1.svg' alt='' />
					</div>
				</div>
			</div>

			<div className='w-52 rounded-3xl border-[0.5px] border-solid border-[#02004333] bg-[#FBFBFB] flex flex-col p-5 pr-8 self-end mt-6'>
				<h1>500+</h1>
				<p className='text-[#020043]'>Board-certified doctors</p>
				<div className='w-full flex justify-between'>
					<div></div>
					<div className='w-[77px]'>
						<img className='w-full object-cover' src='/patient-2.svg' alt='' />
					</div>
				</div>
			</div>

			<div className='w-52 rounded-3xl border-[0.5px] border-solid border-[#02004333] bg-[#FBFBFB] flex flex-col p-5 pr-8 self-end mt-6'>
				<div className='flex gap-2 items-center'>
					<h1>4.8</h1>
					<div className='w-8'>
						<img className='w-full object-cover' src='/star.svg' alt='' />
					</div>
				</div>
				<p className='text-[#020043]'>Over 20,000 Patient</p>
				<div className='flex items-center w-full mt-2'>
					<img className='w-full object-cover' src='/Images/avatar-1.png' alt='' />
					<img className='w-full object-cover' src='/Images/avatar-2.png' alt='' />
					<img className='w-full object-cover' src='/Images/avatar-3.png' alt='' />
					<img className='w-full object-cover' src='/Images/avatar-4.png' alt='' />
				</div>
			</div>

			<div className='w-52 rounded-3xl border-[0.5px] border-solid border-[#02004333] bg-[#FBFBFB] flex flex-col p-5 pr-8 self-end mt-6'>
				<h1>$5000</h1>
				<p className='text-[#020043]'>Money spend for poor patient</p>
				<div className='w-full flex justify-between'>
					<div></div>
					<div className='w-[91px]'>
						<img className='w-full object-cover' src='/patient-3.svg' alt='' />
					</div>
				</div>
			</div>

			<div className='w-52 rounded-3xl border-[0.5px] border-solid border-[#02004333] bg-[#FBFBFB] flex flex-col p-5 pr-8 gap-4 self-end mt-6'>
				<h1>90%</h1>
				<p className='text-[#020043]'>Patient satisfaction rate, reflecting our commitment.</p>
				<div className='w-full flex justify-between'>
					<div></div>
					<div className='w-32'>
						<img className='w-full object-cover' src='/patient-4.svg' alt='' />
					</div>
				</div>
			</div>
		</div>
	)
}

export default Header
