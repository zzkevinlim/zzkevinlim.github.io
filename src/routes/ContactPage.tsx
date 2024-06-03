import { NavLink } from 'react-router-dom';

const ContactPage = () => {
	return (
		<>
			<div className="flex flex-col xl:flex-row grow">
				<div className="relative pt-[40dvh] lg:pl-[4.375rem] xl:pl-[6.875rem]">
					<div className="font-primary font-normal text-[9dvw] xs:text-[9dvw] sm:text-[8dvw] md:text-[7dvw] lg:text-[6dvw] xl:text-[5.3125rem] leading-tight text-white bg-secondary-500 py-[0.9375rem]">Contact</div>
					<div className="hidden xl:block absolute z-[-1] top-0 left-[24.375rem] w-[0.0625rem] h-full bg-white"></div>
				</div>
				<div className="lg:pl-[70px] xl:pl-[10dvw] xl:pt-[calc(40dvh+1.875rem)]">
					<div className="font-primary font-light text-[1.875rem] text-white">Got an idea or just like to talk?</div>
					<NavLink to={`mailto:zzkevinlim@gmail.com`}>
						<div className="relative inline-block group">
							<div className="absolute left-0 bottom-[-0.3125rem] w-[50%] h-[0.0625rem] bg-white group-hover:w-full transition-all duration-300"></div>
							<span className="font-primary font-normal text-[0.875rem] lg:text-[0.9375rem] text-white tracking-widest uppercase">Email away</span>
						</div>
					</NavLink>
				</div>
			</div>
		</>
	);
};

export default ContactPage;
