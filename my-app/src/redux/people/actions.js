import { GET_PEOPLE_LIST, ADD_PERSON } from "./constants";
import mockdata from "../../mockdata/people.json";

const getPeopleList = () => async dispatch => {
  dispatch({
    type: GET_PEOPLE_LIST,
    data: mockdata
  });
};

const addPerson = () => async dispatch => {
  const person = {
    _id: "5df45951ac4535345dce28",
    age: "34",
    name: "Reginald Randolph",
    company: "Lockheed Martin",
    email: "reginald.randolph@lmco.com",
    balance: "$1,000,000"
  };

  dispatch({
    type: ADD_PERSON,
    data: person
  });
};

const actionCreators = {
  getPeopleList,
  addPerson
};

export default actionCreators;
