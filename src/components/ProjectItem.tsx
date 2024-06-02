import { useEffect } from 'react';
import type Project from '../types/Project';
import type CustomDocument from '../types/CustomDocument';
import LazyLoad from "vanilla-lazyload";
import { NavLink } from 'react-router-dom';

declare global {
	interface Document extends CustomDocument { }
}

if (!document.lazyLoadInstance) {
	document.lazyLoadInstance = new LazyLoad({
		elements_selector: ".lazy"
	});
}

const ProjectItem = ({ cssClasses, project }: { cssClasses: string, project: Project }) => {
	useEffect(() => {
		document.lazyLoadInstance.update();
	}, []);

	return (
		<div className={cssClasses + ` relative`} >
			<div className={`h-[120dvw] xs:h-[65dvw] sm:h-[65dvw] md:h-[65dvw] lg:h-[50dvw] xl:h-[35vw] lazy`} data-bg={'/images/' + project.image}>
			</div>
			<div className="lg:absolute lg:left-[2.5rem] lg:bottom-[2.5rem]">
				<div className="font-primary font-normal text-[1.25rem] lg:text-[1.5625rem] text-white mt-[0.9375rem]">{project.name}</div>
				<div className="hidden lg:block font-primary font-medium text-[1.125rem] text-white mb-[1.875rem]">https://google.com</div>
				<NavLink to={`#`}>
					<div className="relative inline-block group">
						<div className="absolute left-0 bottom-[-0.3125rem] w-[50%] h-[0.0625rem] bg-white group-hover:w-full transition-all duration-300"></div>
						<span className="font-primary font-normal text-[0.875rem] lg:text-[0.9375rem] text-white tracking-widest uppercase">Visit<span className="hidden lg:inline"> Site</span></span>
					</div>
				</NavLink>
			</div>
		</div>
	);
}

export default ProjectItem;
