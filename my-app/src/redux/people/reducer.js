import {
  GET_PEOPLE_LIST,
  ADD_PERSON,
  UPDATE_PERSON,
  GET_PERSON,
  REMOVE_PERSON
} from "./constants";

const initState = {
  peopleList: [],
  redirectToPerson: false,
  redirectToPeople: false,
  person: {}
};

export default function(state = initState, action) {
  switch (action.type) {
    case GET_PEOPLE_LIST:
      return {
        ...state,
        peopleList: action.data,
        redirectToPeople: false
      };
    case GET_PERSON:
      return {
        ...state,
        person: action.data,
        redirectToPerson: true
      };
    case ADD_PERSON:
      return {
        ...state,
        peopleList: [...state.peopleList, action.data],
        redirectToPeople: true
      };
    case REMOVE_PERSON:
      return {
        ...state,
        peopleList: action.data
      };
    case UPDATE_PERSON:
      return {
        ...state,
        peopleList: [...state.peopleList, action.data]
      };
    default:
      return state;
  }
}
