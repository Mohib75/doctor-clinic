import "./App.css"
import AboutUs from "./components/AboutUs"
import Discount from "./components/Discount"
import Faq from "./components/Faq"
import Footer from "./components/Footer"
import Header from "./components/Header"
import Navbar from "./components/Navbar"
import Service from "./components/Service"
import Testimonial from "./components/Testimonial"

function App() {
	return (
		<>
			<div className='container mx-auto max-w-[1160px] font-inter'>
				{/* navbar */}
				<Navbar />
				{/* banner */}
				<div className='w-full h-[470px] rounded-[48px] bg-custom-banner-image bg-cover bg-center custom-shadow mt-8'></div>
				{/* header */}
				<Header />
				{/* about us */}
				<AboutUs />
				{/* service */}
				<Service />
				{/* testimonial */}
				<Testimonial />
				{/* faq */}
				<Faq />
				{/* discount */}
				<Discount />
			</div>

			<Footer />
		</>
	)
}

export default App
