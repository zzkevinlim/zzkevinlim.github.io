import projects from '../assets/projects.json'

function ProjectList() {
	return (
		<>
			<div className="space-y-8 mt-8">
				{projects.map((project, index) => (
					<div key={index} className="w-[75dvw] h-[70dvh]" style={{ backgroundImage: 'url("' + project.image + '")' }}>
						<div>{project.name}</div>
					</div>
				))}
			</div>
		</>
	)
}

export default ProjectList
