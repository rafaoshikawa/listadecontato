// src/redux/reducers/contactReducer.jsx

const initialState = {
  contacts: [],
};

const contactReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_CONTACT":
      return {
        ...state,
        contacts: [...state.contacts, action.payload],
      };
    case "DELETE_CONTACT":
      return {
        ...state,
        contacts: state.contacts.filter((_, index) => index !== action.payload),
      };
    case "EDIT_CONTACT":
      const { index, contact } = action.payload;
      const updatedContacts = [...state.contacts];
      updatedContacts[index] = contact;
      return {
        ...state,
        contacts: updatedContacts,
      };
    default:
      return state;
  }
};

export default contactReducer;
