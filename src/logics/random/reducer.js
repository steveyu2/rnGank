import { RANDOM } from '../../commons/actionTypes';
const initState = {
  data: []
};

function random(state = initState, action) {
  
  switch (action.type) {
    case RANDOM.REQUEST:
      return {
        ...state
      };
    case RANDOM.REFRESH:
      return {
        ...state
      };
    case RANDOM.SUCCESS:
      return {
        ...state
      };
    case RANDOM.FAILURE:
      return {
        ...state
      };
    default:
      return state
  }
}

export default random;