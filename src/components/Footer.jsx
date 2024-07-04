import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa"
import { TiSocialLinkedinCircular } from "react-icons/ti"

const Footer = () => {
	return (
		<div className='bg-[#020043] font-inter p-40'>
			<div className='container mx-auto max-w-[1160px] flex flex-col gap-8'>
				<div className='w-[125px]'>
					<img className='object-cover w-full' src='/Images/logo-light.png' alt='Logo' />
				</div>

				<div className='flex gap-4 justify-between'>
					<div className='flex flex-col gap-4'>
						<p className='text-base text-[#FFFFF5]'>
							123 Main Street Anytown, USA <br /> Postal Code: 12345 <br /> <br /> Support: support@oyolloo.com <br /> (Available :
							10:00am to 07:00pm)
						</p>
					</div>

					<div className='flex flex-col gap-4'>
						<ul className='text-sm font-semibold leading-9 capitalize text-[#FFFFF5]'>
							<li>
								<a>Home</a>
							</li>
							<li>
								<a>About Us</a>
							</li>
							<li>
								<a>Success Page</a>
							</li>
							<li>
								<a>Terms And Condition</a>
							</li>
						</ul>
					</div>

					<div className='flex flex-col gap-4'>
						<ul className='text-sm font-semibold leading-9 capitalize text-[#FFFFF5]'>
							<li>
								<a>Services</a>
							</li>
							<li>
								<a>Scheduling</a>
							</li>
							<li>
								<a>Contact Us</a>
							</li>
							<li>
								<a>Patient Portal</a>
							</li>
						</ul>
					</div>

					<div className='flex flex-col'>
						<p className='text-[#FFFFF5] font-semibold leading-10'>Follow Us</p>
						<div className='flex gap-6 items-center'>
							<FaFacebook className='text-[#CCCCD1] text-2xl' />
							<FaInstagram className='text-[#CCCCD1] text-2xl' />
							<TiSocialLinkedinCircular className='text-[#CCCCD1] text-3xl' />
							<FaYoutube className='text-[#CCCCD1] text-3xl' />
						</div>

						<p className='capitalize text-[#FFFFF5] mt-12'>@docplus 2024</p>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Footer
