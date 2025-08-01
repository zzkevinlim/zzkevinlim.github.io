import NavigationMenu from "../components/NavigationMenu";
import Footer from "../components/Footer";

const ErrorPage = () => {
	return (
		<div className='px-4 lg:px-0 lg:ml-[13.125rem] xl:ml-[17.1875rem]'>
			<NavigationMenu />
			<div className='ml-0 xs:ml-0 sm:ml-0 md:ml-[6dvw] lg:ml-[6dvw] xl:ml-[6.875rem] mt-[10rem] xs:mt-[10rem] sm:mt-[10.625rem] md:mt-[11.25rem] lg:mt-[15.625rem] xl:mt-[15.625rem] mb-[3.75rem] xs:mb-[3.75rem] sm:mb-[3.75rem] md:mb-[5.625rem] lg:mb-[5.625rem] xl:mb-[5.625rem]'>
				<div className='font-primary font-normal text-[9dvw] xs:text-[9dvw] sm:text-[8dvw] md:text-[7dvw] lg:text-[6dvw] xl:text-[5.3125rem] leading-tight text-white'>Page not found</div>
				<div className='font-primary font-normal text-[1.25rem] leading-tight text-white '>Unfortunately the page you searched for is no longer available.</div>
			</div>
			<div className='w-full h-[0.0625rem] bg-white'></div>
			<Footer />
		</div>
	);
};

export default ErrorPage;
