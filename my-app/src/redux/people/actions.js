import {
  GET_PEOPLE_LIST,
  ADD_PERSON,
  UPDATE_PERSON,
  GET_PERSON,
  REMOVE_PERSON
} from "./constants";
import mockdata from "../../mockdata/people.json";

const getPeopleList = () => async dispatch => {
  const dbData = await fetch("http://localhost:4000/api/people").then(res =>
    res.json()
  );
  dispatch({
    type: GET_PEOPLE_LIST,
    data: dbData
  });
};

const getPerson = id => async dispatch => {
  console.log(id);
  const person = await fetch(`http://localhost:4000/api/people/${id}`, {
    method: "GET",
    headers: { "Content-Type": "application/json" }
  }).then(res => res.json());
  dispatch({
    type: GET_PERSON,
    data: person
  });
};

const addPerson = person => async dispatch => {
  await fetch("http://localhost:4000/api/people", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(person)
  });

  dispatch({
    type: ADD_PERSON,
    data: person
  });
};

//removes person
const removePerson = id => async (dispatch, getState) => {
  await fetch(`http://localhost:4000/api/people/${id}`, {
    method: "DELETE",
    headers: { "Content-Type": "application/json" }
  }).then(res => res.json());
  const people = getState().people.peopleList.filter(
    person => person._id != id
  );
  dispatch({
    type: REMOVE_PERSON,
    data: people
  });
};

const updatePersonBtnClick = id => async (getState, dispatch) => {
  getPerson(id);
  //console.log(person);
};

const updatePerson = person => async dispatch => {
  // await fetch("http://localhost:4000/api/people", {
  //   method: "PUT",
  //   headers: { "Content-Type": "application/json" },
  //   body: JSON.stringify(person)
  // });

  dispatch({
    type: UPDATE_PERSON,
    data: person
  });
};

const actionCreators = {
  getPeopleList,
  getPerson,
  addPerson,
  updatePerson,
  updatePersonBtnClick,
  removePerson
};

export default actionCreators;
