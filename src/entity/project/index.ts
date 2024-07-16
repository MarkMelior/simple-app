import { getProject } from './model/services/get-project';
import { getProjects } from './model/services/get-projects';
import { getProjectsByCategory } from './model/services/get-projects-by-category';
import { ProjectResponse, ProjectsResponse } from './model/types/project.type';

export { getProject, getProjects, getProjectsByCategory };
export type { ProjectResponse, ProjectsResponse };
