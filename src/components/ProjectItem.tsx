import { useState, useRef, useEffect } from "react";
import type Project from "../types/Project";
import type CustomDocument from "../types/CustomDocument";
import LazyLoad from "vanilla-lazyload";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import { Zoom } from "yet-another-react-lightbox/plugins";

declare global {
	interface Document extends CustomDocument { }
}

if (!document.lazyLoadInstance) {
	document.lazyLoadInstance = new LazyLoad({
		elements_selector: '.lazy',
		class_loaded: 'image-loading-animation',
	});
}

const ProjectItem = ({ cssClasses, project }: { cssClasses: string, project: Project }) => {
	const [isOpen, setOpen] = useState(false);
	const zoomRef = useRef(null);

	useEffect(() => {
		document.lazyLoadInstance.update();

		if (isOpen) {
			document.documentElement.style.setProperty('--scrollbar-track', '#384051');
			document.documentElement.style.setProperty('--scrollbar-thumb', '#384051');
			document.documentElement.style.setProperty('--scrollbar-thumb-hover', '#384051');

		} else {
			document.documentElement.style.setProperty('--scrollbar-track', '#384051');
			document.documentElement.style.setProperty('--scrollbar-thumb', '#ffc91e');
			document.documentElement.style.setProperty('--scrollbar-thumb-hover', '#ad8500');
		}
	}, [isOpen]);

	return (
		<div className={cssClasses}>
			<div className='relative h-[120dvw] xs:h-[65dvw] sm:h-[65dvw] md:h-[65dvw] lg:h-[50dvw] xl:h-[35dvw] bg-top bg-cover bg-no-repeat lazy opacity-0 transition-all duration-1000 group/ancestor' data-bg={'/images/' + project.image}>
				<div className='hidden lg:block absolute inset-0 bg-secondary-500 bg-opacity-25 group-hover/ancestor:bg-opacity-0 transition-all duration-1000'></div>
				<div className='hidden lg:block absolute inset-0 bg-gradient-to-r from-primary-500 to-[125%] opacity-0 group-hover/ancestor:opacity-100 transition-all duration-1000'></div>
				<div className='hidden lg:block absolute left-[2.5rem] bottom-[2.5rem] overflow-hidden'>
					<div className='hidden lg:block translate-y-[70%] group-hover/ancestor:translate-y-0 duration-300' style={{ transition: 'transform 0.6s cubic-bezier(0.68, -0.6, 0.32, 1.6)' }}>
						<div className='font-primary font-medium text-[1.25rem] text-white mt-0 group-hover/ancestor:text-secondary-500 transition-all duration-300'>{project.name}</div>
						<div className='font-primary font-medium text-[1.125rem] text-white mb-[1.25rem] group-hover/ancestor:text-secondary-500 transition-all duration-300'>{project.description}</div>
						<div onClick={() => setOpen(true)} className='cursor-pointer'>
							<div className='relative inline-block group mb-[0.3125rem]'>
								<div className='absolute left-0 bottom-[-0.3125rem] w-[50%] h-[0.0625rem] bg-white group-hover:w-full transition-all duration-300'></div>
								<span className='font-primary font-normal text-[0.9375rem] text-white tracking-widest uppercase'>Take a Look</span>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className='block lg:hidden mt-[0.9375rem]'>
				<div className='font-primary font-medium text-[1.25rem] text-white mb-[0.625rem]'>{project.name}</div>
				<div onClick={() => setOpen(true)} className='cursor-pointer'>
					<div className='relative inline-block group mb-[0.3125rem]'>
						<div className='absolute left-0 bottom-[-0.3125rem] w-[50%] h-[0.0625rem] bg-white group-hover:w-full transition-all duration-300'></div>
						<span className='font-primary font-normal text-[0.875rem] text-white tracking-widest uppercase'>Take a Look</span>
					</div>
				</div>
			</div>
			<Lightbox
				open={isOpen}
				close={() => setOpen(false)}
				slides={[
					{ src: '/images/' + project.image },
				]}
				render={{
					buttonPrev: () => null,
					buttonNext: () => null,
				}}
				plugins={[Zoom]}
				zoom={{ ref: zoomRef }}
			/>
		</div>
	);
}

export default ProjectItem;
