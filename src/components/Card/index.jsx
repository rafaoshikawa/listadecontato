// src/components/card/index.jsx

import { useState } from "react";
import { useDispatch, useSelector } from "react-redux"; // Importe useDispatch e useSelector
import * as Styled from "./style.jsx"; // Importe seus estilos
import Delete from "../../assets/delete.svg";
import Edit from "../../assets/edit.svg";
import Done from "../../assets/done.svg";
import {
  addContact,
  deleteContact,
  editContact,
} from "../redux/actions/contactActions"; // Importe as actions necessárias

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [isEditing, setIsEditing] = useState(false);
  const [editedIndex, setEditedIndex] = useState(null);

  const dispatch = useDispatch(); // Obtenha a função dispatch

  const contacts = useSelector((state) => state.contacts); // Obtenha os contatos do estado Redux

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name.trim() !== "" && email.trim() !== "" && phone.trim() !== "") {
      const newContact = {
        name: name,
        email: email,
        phone: phone,
      };
      if (isEditing) {
        dispatch(editContact(editedIndex, newContact)); // Despache a action de edição
        setIsEditing(false);
        setEditedIndex(null);
      } else {
        dispatch(addContact(newContact)); // Despache a action de adição
      }
      setName("");
      setEmail("");
      setPhone("");
    }
  };

  const handleDeleteContact = (index) => {
    dispatch(deleteContact(index));
  };

  const handleEditContact = (index) => {
    const contact = contacts[index];
    setName(contact.name);
    setEmail(contact.email);
    setPhone(contact.phone);
    setIsEditing(true);
    setEditedIndex(index);
  };

  return (
    <Styled.Container>
      <Styled.Tittle>Agenda de Contato</Styled.Tittle>
      <Styled.Form onSubmit={handleSubmit}>
        <Styled.Input
          type="text"
          placeholder="Nome"
          onChange={(e) => setName(e.target.value)}
          value={name}
        />
        <Styled.Input
          type="email"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
        <Styled.Input
          type="text"
          placeholder="Telefone"
          onChange={(e) => setPhone(e.target.value)}
          value={phone}
        />
        <div>
          <Styled.Button>{isEditing ? "Salvar" : "Adicionar"}</Styled.Button>
        </div>
      </Styled.Form>
      {/* Renderiza a lista de contatos */}
      {contacts.map((contact, index) => (
        <Styled.ContactContainer key={index}>
          {isEditing && editedIndex === index ? (
            <>
              <Styled.Input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <Styled.Input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <Styled.Input
                type="text"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
            </>
          ) : (
            <div>
              <p>
                <strong>Nome:</strong> {contact.name}
              </p>
              <p>
                <strong>Email:</strong> {contact.email}
              </p>
              <p>
                <strong>Telefone:</strong> {contact.phone}
              </p>
            </div>
          )}
          <Styled.ButtonContainer>
            {isEditing && editedIndex === index ? (
              <img src={Done} alt="Done Button" onClick={handleSubmit} />
            ) : (
              <img
                src={Edit}
                alt="Edit Button"
                onClick={() => handleEditContact(index)}
              />
            )}
            {/* Adiciona evento de clique ao ícone delete */}
            <img
              src={Delete}
              alt="Delete Button"
              onClick={() => handleDeleteContact(index)}
            />
          </Styled.ButtonContainer>
        </Styled.ContactContainer>
      ))}
    </Styled.Container>
  );
}
export default Contact;
