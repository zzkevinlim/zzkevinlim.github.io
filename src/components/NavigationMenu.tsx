import { useState } from 'react';
import { Sling as HamburgerMenu } from "hamburger-react";
import styled from 'styled-components';

const TextColourAnimationOnHover = styled.a`
	background-clip: text;
	-webkit-background-clip: text;

	text-fill-color: transparent;
	-webkit-text-fill-color: transparent;

	background-size: 200% 100%;
	background-position: 100%;

	transition: background-position 300ms ease;

	&:hover {
		background-position: 0 100%;
	}
`;

const NavigationMenu = () => {
	const [isOpen, setOpen] = useState(false);

	return (
		<>
			<div className="fixed left-0 top-0 w-[13.125rem] xl:w-[17.1875rem] h-full bg-secondary-500 hidden lg:flex flex-col items-end justify-between pr-[1.875rem] xl:pr-[3.4375rem] py-[3.4375rem]">
				<div className="flex flex-col items-end">
					<TextColourAnimationOnHover href="/" className="font-primary font-semibold text-[1.625rem] xl:text-[2rem] bg-gradient-to-r from-primary-500 via-primary-500 to-white from-0% via-50% to-50% transition-all duration-300">kevinlim.dev</TextColourAnimationOnHover>
					<div className="relative inline-block mt-[3.4375rem] mb-[1.5625rem] group">
						<a href="#" className="absolute inset-0"></a>
						<div className="absolute left-0 bottom-0 w-0 h-[0.0625rem] bg-white group-hover:w-full transition-all duration-300"></div>
						<span className="font-primary text-[1.125rem] xl:text-[1.1875rem] text-white tracking-wider">Work</span>
					</div>
					<div className="relative inline-block group">
						<a href="#" className="absolute inset-0"></a>
						<div className="absolute left-0 bottom-0 w-0 h-[0.0625rem] bg-white group-hover:w-full transition-all duration-300"></div>
						<span className="font-primary text-[1.125rem] xl:text-[1.1875rem] text-white tracking-wider">Contact</span>
					</div>
				</div>
				<div className="flex flex-col items-end">
					<div className="relative inline-block mb-[1.25rem] group hover:bg-primary-500 transition-all duration-300">
						<a href="https://www.google.com/maps/place/Auckland/@-36.8594224,174.5413148,11z" target="_blank" className="absolute inset-0"></a>
						<div className="absolute left-0 bottom-0 w-0 h-[0.0625rem] bg-black group-hover:w-full transition-all duration-300"></div>
						<span className="font-primary text-[1rem] xl:text-[1.0625rem] text-white tracking-wide group-hover:text-black transition-all duration-300">Auckland, NZ</span>
					</div>
					<div className="relative inline-block mb-[5rem] group hover:bg-primary-500 transition-all duration-300">
						<a href="mailto:zzkevinlim@gmail.com" className="absolute inset-0"></a>
						<div className="absolute left-0 bottom-0 w-full h-[0.0625rem] bg-secondary-300 group-hover:bg-black transition-all duration-300"></div>
						<span className="font-primary text-[1rem] xl:text-[1.0625rem] text-white tracking-wide group-hover:text-black transition-all duration-300">Email</span>
					</div>
					<div className="font-primary text-[0.875rem] text-secondary-200 tracking-wide">Ownership of</div>
					<div className="font-primary text-[0.875rem] text-secondary-200 tracking-wide">showcased projects'</div>
					<div className="relative inline-block group hover:bg-primary-500 transition-all duration-300">
						<div className="absolute left-0 bottom-0 w-full h-[0.0625rem] bg-secondary-300 group-hover:bg-black transition-all duration-300"></div>
						<span className="font-primary text-[0.875rem] text-secondary-200 tracking-wide group-hover:text-black transition-all duration-300">source code is ensured</span>
					</div>
				</div>
			</div>
			<div className={`fixed left-0 top-0 w-full h-[5rem] flex lg:hidden items-center justify-between px-[0.9375rem] md:px-[4.6875rem] transition-all duration-300 ${isOpen ? 'bg-white' : 'drop-shadow-md bg-secondary-500'}`}>
				<TextColourAnimationOnHover href="/" className={`font-primary font-semibold text-[1.625rem] from-0% via-50% to-50% transition-all duration-300 ${isOpen ? 'bg-gradient-to-r from-primary-500 via-primary-500 to-secondary-500' : 'bg-gradient-to-r from-primary-500 via-primary-500 to-white'}`}>kevinlim.dev</TextColourAnimationOnHover>
				<HamburgerMenu size={25} color={`${isOpen ? '#384051' : '#FFFFFF'}`} toggled={isOpen} toggle={setOpen} />
			</div>
			<div className={`fixed block lg:hidden inset-0 bg-white px-[0.9375rem] md:px-[4.6875rem] mt-[5rem] transition-all duration-300 ${isOpen ? 'opacity-1 visible' : 'opacity-0 invisible'}`}>
				<div>
					<div className="relative inline-block my-[30px] group">
						<a href="#" className="absolute inset-0"></a>
						<div className="absolute left-0 bottom-0 w-0 h-[0.0625rem] bg-secondary-500 group-hover:w-full transition-all duration-300"></div>
						<span className="font-primary font-medium text-[1.5625rem] md:text-[1.875rem] text-secondary-500">Work</span>
					</div>
				</div>
				<div>
					<div className="relative inline-block mb-[60px] group">
						<a href="#" className="absolute inset-0"></a>
						<div className="absolute left-0 bottom-0 w-0 h-[0.0625rem] bg-secondary-500 group-hover:w-full transition-all duration-300"></div>
						<span className="font-primary font-medium text-[1.5625rem] md:text-[1.875rem] text-secondary-500">Contact</span>
					</div>
				</div>
				<div className="w-full h-[1px] bg-secondary-500 mb-[30px]"></div>
				<div className="flex flex-col items-start">
					<div className="relative inline-block mb-[15px] group hover:bg-primary-500 transition-all duration-300">
						<a href="https://www.google.com/maps/place/Auckland/@-36.8594224,174.5413148,11z" target="_blank" className="absolute inset-0"></a>
						<div className="absolute left-0 bottom-0 w-0 h-[0.0625rem] bg-black group-hover:w-full transition-all duration-300"></div>
						<span className="font-primary text-[1rem] md:text-[1.0625rem] text-secondary-500 tracking-wide group-hover:text-black transition-all duration-300">Auckland, NZ</span>
					</div>
					<div className="relative inline-block mb-[30px] group hover:bg-primary-500 transition-all duration-300">
						<a href="mailto:zzkevinlim@gmail.com" className="absolute inset-0"></a>
						<div className="absolute left-0 bottom-0 w-full h-[0.0625rem] bg-secondary-300 group-hover:bg-black transition-all duration-300"></div>
						<span className="font-primary text-[1rem] md:text-[1.0625rem] text-secondary-500 tracking-wide group-hover:text-black transition-all duration-300">Email</span>
					</div>
					<div className="w-full h-[1px] bg-secondary-500 mb-[30px]"></div>
					<div>
						<div className="inline-block font-primary text-[0.875rem] text-secondary-200 tracking-wide">Ownership of showcased projects'&nbsp;</div>
						<div className="relative inline-block hover:bg-primary-500 transition-all duration-300">
							<div className="absolute left-0 bottom-0 w-full h-[0.0625rem] bg-secondary-300 group-hover:bg-black transition-all duration-300"></div>
							<span className="font-primary text-[0.875rem] text-secondary-200 tracking-wide group-hover:text-black transition-all duration-300">source code is ensured</span>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}

export default NavigationMenu

