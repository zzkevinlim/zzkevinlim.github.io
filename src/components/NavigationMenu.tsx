import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { Sling as HamburgerMenu } from "hamburger-react";

const TextHoverAnimation = styled.div`
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

	useEffect(() => {
		if (isOpen) {
			document.documentElement.style.setProperty('--scrollbar-track', '#ffffff');
			document.documentElement.style.setProperty('--scrollbar-thumb', '#ffffff');
			document.documentElement.style.setProperty('--scrollbar-thumb-hover', '#ffffff');

		} else {
			document.documentElement.style.setProperty('--scrollbar-track', '#384051');
			document.documentElement.style.setProperty('--scrollbar-thumb', '#ffc91e');
			document.documentElement.style.setProperty('--scrollbar-thumb-hover', '#ad8500');
		}
	}, [isOpen]);

	return (
		<>
			<div className='fixed z-[50] left-0 top-0 w-[13.125rem] xl:w-[17.1875rem] h-full bg-secondary-500 hidden lg:flex flex-col items-end justify-between pr-[1.875rem] xl:pr-[3.4375rem] py-[3.4375rem]'>
				<div className='flex flex-col items-end'>
					<a href='/'>
						<TextHoverAnimation className='font-primary font-semibold text-[1.625rem] xl:text-[2rem] bg-gradient-to-r from-primary-500 via-primary-500 to-white from-0% via-50% to-50% transition-all duration-300'>kevinlim.dev</TextHoverAnimation>
					</a>
					<NavLink to={`/`} className={({ isActive }: { isActive: boolean }) => isActive ? 'text-primary-500' : 'text-white'}>
						<div className='relative inline-block mt-[3.4375rem] mb-[1.5625rem] group'>
							<div className='absolute left-0 bottom-0 w-0 h-[0.0625rem] bg-white group-hover:w-full transition-all duration-300'></div>
							<span className='font-primary text-[1.125rem] xl:text-[1.1875rem] tracking-wider'>Work</span>
						</div>
					</NavLink>
					<NavLink to={`/contact`} className={({ isActive }: { isActive: boolean }) => isActive ? 'text-primary-500' : 'text-white'}>
						<div className='relative inline-block group'>
							<div className='absolute left-0 bottom-0 w-0 h-[0.0625rem] bg-white group-hover:w-full transition-all duration-300'></div>
							<span className='font-primary text-[1.125rem] xl:text-[1.1875rem] tracking-wider'>Contact</span>
						</div>
					</NavLink>
				</div>
				<div className='flex flex-col items-end'>
					<NavLink to={`https://www.google.com/maps/place/Auckland/@-36.8594224,174.5413148,11z`} target='_blank'>
						<div className='relative inline-block mb-[1.25rem] group hover:bg-primary-500 transition-all duration-300'>
							<div className='absolute left-0 bottom-0 w-0 h-[0.0625rem] bg-black group-hover:w-full transition-all duration-300'></div>
							<span className='font-primary text-[1rem] xl:text-[1.0625rem] text-white tracking-wide group-hover:text-black transition-all duration-300'>Auckland, NZ</span>
						</div>
					</NavLink>
					<NavLink to={`mailto:zzkevinlim@gmail.com`}>
						<div className='relative inline-block mb-[5rem] group hover:bg-primary-500 transition-all duration-300'>
							<div className='absolute left-0 bottom-0 w-full h-[0.0625rem] bg-secondary-200 group-hover:bg-black transition-all duration-300'></div>
							<span className='font-primary text-[1rem] xl:text-[1.0625rem] text-white tracking-wide group-hover:text-black transition-all duration-300'>Email</span>
						</div>
					</NavLink>
					<div className='font-primary text-[0.875rem] text-secondary-200 tracking-wide'>Ownership of</div>
					<div className='font-primary text-[0.875rem] text-secondary-200 tracking-wide'>showcased projects'</div>
					<div className='relative inline-block group hover:bg-primary-500 transition-all duration-300'>
						<div className='absolute left-0 bottom-0 w-full h-[0.0625rem] bg-secondary-200 group-hover:bg-black transition-all duration-300'></div>
						<span className='font-primary text-[0.875rem] text-secondary-200 tracking-wide group-hover:text-black transition-all duration-300'>source code is ensured</span>
					</div>
				</div>
			</div>
			<div className={`fixed z-[50] left-0 top-0 w-full h-[5rem] flex lg:hidden items-center justify-between px-[0.9375rem] md:px-[4.6875rem] transition-all duration-300 ${isOpen ? 'bg-white' : 'drop-shadow-md bg-secondary-500'}`}>
				<NavLink to={`/`}>
					<TextHoverAnimation className={`font-primary font-semibold text-[1.625rem] from-0% via-50% to-50% transition-all duration-300 ${isOpen ? 'bg-gradient-to-r from-primary-500 via-primary-500 to-secondary-500' : 'bg-gradient-to-r from-primary-500 via-primary-500 to-white'}`}>kevinlim.dev</TextHoverAnimation>
				</NavLink>
				<div className={`${isOpen ? 'mr-[-1.25rem]' : 'mr-[-0.625rem]'} transiion-all duration-300`}>
					<HamburgerMenu size={25} color={`${isOpen ? '#384051' : '#ffffff'}`} toggled={isOpen} toggle={setOpen} />
				</div>
			</div>
			<div className={`fixed z-[50] block lg:hidden inset-0 bg-white px-[0.9375rem] md:px-[4.6875rem] mt-[5rem] transition-all duration-300 ${isOpen ? 'opacity-1 visible' : 'opacity-0 invisible'}`}>
				<div>
					<NavLink to={`/`} className={({ isActive }: { isActive: boolean }) => isActive ? 'text-primary-500' : 'text-secondary-500'} onClick={() => setOpen((open) => !open)}>
						<div className='relative inline-block my-[1.875rem] group'>
							<div className='absolute left-0 bottom-0 w-0 h-[0.0625rem] bg-secondary-500 group-hover:w-full transition-all duration-300'></div>
							<span className='font-primary font-medium text-[1.5625rem] md:text-[1.875rem]'>Work</span>
						</div>
					</NavLink>
				</div>
				<div>
					<NavLink to={`/contact`} className={({ isActive }: { isActive: boolean }) => isActive ? 'text-primary-500' : 'text-secondary-500'} onClick={() => setOpen((open) => !open)}>
						<div className='relative inline-block mb-[3.75rem] group'>
							<div className='absolute left-0 bottom-0 w-0 h-[0.0625rem] bg-secondary-500 group-hover:w-full transition-all duration-300'></div>
							<span className='font-primary font-medium text-[1.5625rem] md:text-[1.875rem]'>Contact</span>
						</div>
					</NavLink>
				</div>
				<div className='w-full h-[0.0625rem] bg-secondary-500 mb-[1.875rem]'></div>
				<div className='flex flex-col items-start'>
					<NavLink to={`https://www.google.com/maps/place/Auckland/@-36.8594224,174.5413148,11z`} target='_blank'>
						<div className='relative inline-block mb-[0.9375rem] group hover:bg-primary-500 transition-all duration-300'>
							<div className='absolute left-0 bottom-0 w-0 h-[0.0625rem] bg-black group-hover:w-full transition-all duration-300'></div>
							<span className='font-primary text-[1rem] md:text-[1.0625rem] text-secondary-500 tracking-wide group-hover:text-black transition-all duration-300'>Auckland, NZ</span>
						</div>
					</NavLink>
					<NavLink to={`mailto:zzkevinlim@gmail.com`}>
						<div className='relative inline-block mb-[1.875rem] group hover:bg-primary-500 transition-all duration-300'>
							<div className='absolute left-0 bottom-0 w-full h-[0.0625rem] bg-secondary-200 group-hover:bg-black transition-all duration-300'></div>
							<span className='font-primary text-[1rem] md:text-[1.0625rem] text-secondary-500 tracking-wide group-hover:text-black transition-all duration-300'>Email</span>
						</div>
					</NavLink>
					<div className='w-full h-[0.0625rem] bg-secondary-500 mb-[1.875rem]'></div>
					<div>
						<div className='inline-block font-primary text-[0.875rem] text-secondary-200 tracking-wide'>Ownership of showcased projects'&nbsp;</div>
						<div className='relative inline-block hover:bg-primary-500 transition-all duration-300'>
							<div className='absolute left-0 bottom-0 w-full h-[0.0625rem] bg-secondary-200 group-hover:bg-black transition-all duration-300'></div>
							<span className='font-primary text-[0.875rem] text-secondary-200 tracking-wide group-hover:text-black transition-all duration-300'>source code is ensured</span>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default NavigationMenu;
