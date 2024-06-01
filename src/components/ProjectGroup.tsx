import type Project from '../types/Project';
import ProjectItem from './ProjectItem';

const ProjectGroup = ({ projects }: { projects: Project[] }) => {
	const projectCount = projects.length;

	let randomLayout: number;

	switch (projectCount) {
		case 1:
			return (
				<ProjectItem cssClasses={'col-span-12'} project={projects[0]} />
			);
		case 2:
			randomLayout = Math.floor(Math.random() * 3) + 1;

			switch (randomLayout) {
				case 1:
					return (
						<>
							<ProjectItem cssClasses={'col-span-6 xl:col-span-4'} project={projects[0]} />
							<ProjectItem cssClasses={'col-span-6 xl:col-span-8'} project={projects[1]} />
						</>
					);
				case 2:
					return (
						<>
							<ProjectItem cssClasses={'col-span-6 xl:col-span-8'} project={projects[0]} />
							<ProjectItem cssClasses={'col-span-6 xl:col-span-4'} project={projects[1]} />
						</>
					);
				case 3:
					return (
						<>
							<ProjectItem cssClasses={'col-span-6'} project={projects[0]} />
							<ProjectItem cssClasses={'col-span-6'} project={projects[1]} />
						</>
					);
			}

			break;
	}
}

export default ProjectGroup;
