interface ProjectPath {
	name: string;
	category: string;
}

export const getProjectPath = (path: string): ProjectPath | undefined => {
	const parts = path.split('/');

	const projectsIndex = parts.indexOf('projects');

	if (projectsIndex === -1 || projectsIndex + 2 >= parts.length) {
		return;
	}

	const category = parts[projectsIndex + 1];
	const name = parts[projectsIndex + 2];

	return { name, category };
};
