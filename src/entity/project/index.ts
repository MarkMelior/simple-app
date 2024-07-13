import { getProject, ProjectResponse } from './model/services/get-project';
import { getProjects, ProjectsResponse } from './model/services/get-projects';
import {
	getProjectsByCategory,
	ProjectsByCategoryResponse,
} from './model/services/get-projects-by-category';

export { getProject, getProjects, getProjectsByCategory };
export type { ProjectResponse, ProjectsByCategoryResponse, ProjectsResponse };
