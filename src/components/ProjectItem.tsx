import { useEffect } from 'react';
import type Project from '../types/Project';
import type CustomDocument from '../types/CustomDocument';
import LazyLoad from "vanilla-lazyload";

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
		<div className={'lazy ' + cssClasses + ''} data-bg={'/images/' + project.image}>
			<div className="h-[70dvh]">
				<div>{project.name}</div>
			</div>
		</div>
	);
}

export default ProjectItem;
