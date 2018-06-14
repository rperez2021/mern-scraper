// Import Actions
import { TOGGLE_ADD_POST, TOGGLE_VIEW_PROJECTS } from './AppActions';

// Initial State
const initialState = {
  showAddPost: false,
  showProjects: false,
};

const AppReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_ADD_POST:
      return {
        showAddPost: !state.showAddPost,
      };
    case TOGGLE_VIEW_PROJECTS:
      return {
        showProjects: !state.showProjects,
      };

    default:
      return state;
  }
};

/* Selectors */

// Get showAddPost
export const getShowAddPost = state => state.app.showAddPost;
export const getShowProjects = state => state.app.showProjects;

// Export Reducer
export default AppReducer;
