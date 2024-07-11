import { StackVariants } from '@/shared/ui';

export interface ProjectData {
	id: string;
	note: string;
	title: string;
	description: string;
	tags?: StackVariants[];
}

export async function getProjectData(name: string): Promise<ProjectData> {
	//Lazy load the mdx file for the project
	try {
		const file = (await import(`/projects/${name}/page.mdx`)) as Partial<{
			metadata: ProjectData;
		}>;

		if (file?.metadata) {
			return { ...file.metadata, id: file.metadata.title };
		} else {
			throw new Error(`Unable to find metadata in file ${name}.mdx`);
		}
	} catch (error: any) {
		console.log(error?.message);

		return {
			id: '',
			note: '',
			title: '',
			description: '',
			tags: [],
		};
	}
}
