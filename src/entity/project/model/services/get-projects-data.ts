import { readdirSync } from 'fs';
import path from 'path';
import { getProjectData, ProjectData } from './get-project-data';

export async function getProjectsData(): Promise<ProjectData[]> {
	try {
		//Read the /blog folder at root dir
		const projectsDir = path.resolve(process.cwd(), 'projects');
		const fileList: string[] = readdirSync(projectsDir);

		//Load each file
		if (fileList.length > 0) {
			const result = fileList.map(async (file) => {
				//Remove extension to get blogId
				const filename = file.substring(0, file.lastIndexOf('.')) || file;

				return await getProjectData(filename);
			});

			return Promise.all(result);
		}
	} catch (error) {}
	return [];
}
