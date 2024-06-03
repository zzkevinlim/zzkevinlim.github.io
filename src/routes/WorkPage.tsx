import projects from '../assets/projects.json'
import type Project from '../types/Project';
import ProjectGroup from '../components/ProjectGroup';
import TagLine from '../components/TagLine';

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

const WorkPage = () => {
	return (
		<>
			<TagLine />
			<div className="grid grid-cols-12 gap-x-[0.9375rem] gap-y-[5.625rem] lg:gap-y-[0.9375rem] mb-[5.625rem]">
				{groupedProjects.map((groupedProject, index) => (
					<ProjectGroup key={index} projects={groupedProject} />
				))}
			</div>
		</>

	);
}

export default WorkPage
