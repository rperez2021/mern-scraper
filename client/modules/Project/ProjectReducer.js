import { ADD_PROJECTS, DELETE_PROJECT } from './ProjectActions';

// Initial State
const initialState = { data: [] };

const ProjectReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_PROJECTS :
      return {
        data: action.projects,
      };
      
    case DELETE_PROJECT :
      return {
        data: state.data.filter(project => project.cuid !== action.cuid),
      };

    default:
      return state;
  }
};

/* Selectors */

// Get all posts
export const getProjects = state => state.projects.data;

// Export Reducer
export default ProjectReducer;
