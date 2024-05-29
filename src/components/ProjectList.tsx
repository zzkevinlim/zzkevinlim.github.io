import projects from '../assets/projects.json'

function ProjectList() {
	const randomNumber = Math.random();

	return (
		<>
			<p>Random Number: {randomNumber}</p>
			<div className="space-y-8">
				{projects.map((project, index) => (
					<div key={index} className="w-[77dvw] h-[70dvh]" style={{ backgroundImage: 'url("/images/' + project.image + '")' }}>
						<div>{project.name}</div>
					</div>
				))}
			</div>
		</>
	)
}

export default ProjectList
