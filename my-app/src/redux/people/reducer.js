import { GET_PEOPLE_LIST, ADD_PERSON } from "./constants";

const initState = {
  peopleList: []
};

export default function(state = initState, action) {
  switch (action.type) {
    case GET_PEOPLE_LIST:
      return {
        ...state,
        peopleList: action.data
      };
    case ADD_PERSON:
      return {
        ...state,
        peopleList: [...state.peopleList, action.data]
      };
    default:
      return state;
  }
}
