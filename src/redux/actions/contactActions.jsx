// src/redux/actions/contactActions.jsx

export const addContact = (contact) => {
  return {
    type: "ADD_CONTACT",
    payload: contact,
  };
};

export const deleteContact = (index) => {
  return {
    type: "DELETE_CONTACT",
    payload: index,
  };
};

export const editContact = (index, contact) => {
  return {
    type: "EDIT_CONTACT",
    payload: { index, contact },
  };
};
