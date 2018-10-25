const hideLoading = () => ({
  type: 'HIDE_LOADING'
});

export const actions = {
  hideLoading
};
const initialState = {
  showLoading: true
};

const layout = (state = initialState, action = {}) => {
  switch (action.type) {
    case 'HIDE_LOADING':
      return Object.assign({}, state, {
        showLoading: false
      });
    default:
      return state;
  }
}

export default layout;