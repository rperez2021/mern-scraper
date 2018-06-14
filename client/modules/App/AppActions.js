// Export Constants
export const TOGGLE_ADD_POST = 'TOGGLE_ADD_POST';
export const TOGGLE_VIEW_PROJECTS = 'TOOGLE_VIEW_PROJECTS'

// Export Actions
export function toggleAddPost() {
  return {
    type: TOGGLE_ADD_POST,
  };
}

export function toggleViewProjects() {
  return {
    type: TOGGLE_VIEW_PROJECTS
  }
}
