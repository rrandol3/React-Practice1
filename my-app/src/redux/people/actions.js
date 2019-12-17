import {
  GET_PEOPLE_LIST,
  ADD_PERSON,
  UPDATE_PERSON,
  GET_PERSON,
  REMOVE_PERSON
} from "./constants";

//get person list
const getPeopleList = () => async dispatch => {
  const dbData = await fetch("http://localhost:4000/api/people").then(res =>
    res.json()
  );
  dispatch({
    type: GET_PEOPLE_LIST,
    data: dbData
  });
};

//get person by id
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

//add person
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

//responds to update person btn click to populate person form
const updatePersonBtnClick = id => async (getState, dispatch) => {
  getPerson(id);
};

//update person
const updatePerson = person => async dispatch => {
  await fetch(`http://localhost:4000/api/people/${person._id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(person)
  }).then(res => res.json());

  console.log("updatePerson person:", person);

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
