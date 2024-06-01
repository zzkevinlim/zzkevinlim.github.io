import projects from '../assets/projects.json'
import type Project from '../types/Project';
import ProjectGroup from './ProjectGroup';

const groupAndShuffleProjects = (projects: Project[]): Project[][] => {
	const groups: Project[][] = [];
	let i = 0;

	while (i < projects.length) {
		const randomGroupSize = Math.floor(Math.random() * 2) + 1;
		groups.push(projects.slice(i, i + randomGroupSize));

		for (let i = groups.length - 1; i > 0; i--) {
			const j = Math.floor(Math.random() * (i + 1));
			[groups[i], groups[j]] = [groups[j], groups[i]];
		}

		i += randomGroupSize;
	}

	return groups;
}

const groupedProjects = groupAndShuffleProjects(projects);

const ProjectList = () => {
	return (
		<div className="grid grid-cols-12 gap-x-4 gap-y-4">
			{groupedProjects.map((groupedProject, index) => (
				<ProjectGroup key={index} projects={groupedProject} />
			))}
		</div>
	)
}

export default ProjectList
