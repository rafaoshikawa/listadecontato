import { useState } from "react";
import * as Styled from "./style";
import Delete from "../../assets/delete.svg";
import Edit from "../../assets/edit.svg";
import Done from "../../assets/done.svg";

function Contact() {
  const [contacts, setContacts] = useState([]); // Estado para armazenar os contatos
  const [value, setValue] = useState(""); // Estado para armazenar o valor digitado pelo usuário
  const [isEditing, setIsEditing] = useState(false); // Estado para controlar se está editando um contato
  const [editedIndex, setEditedIndex] = useState(null); // Estado para armazenar o índice do contato sendo editado

  const handleSubmit = (e) => {
    e.preventDefault();
    // Verifica se o valor não está vazio antes de adicionar aos contatos
    if (value.trim() !== "") {
      if (isEditing) {
        // Se estiver editando, atualiza o contato existente
        const updatedContacts = [...contacts];
        updatedContacts[editedIndex] = value;
        setContacts(updatedContacts);
        setIsEditing(false);
        setEditedIndex(null);
      } else {
        // Caso contrário, adiciona um novo contato
        setContacts([...contacts, value]); // Adiciona o novo contato ao array de contatos
      }
      setValue(""); // Limpa o campo de input após o envio do formulário
    }
  };

  const handleDeleteContact = (index) => {
    const updatedContacts = [...contacts];
    updatedContacts.splice(index, 1); // Remove o contato correspondente do array de contatos
    setContacts(updatedContacts); // Atualiza o estado com a lista de contatos atualizada
  };

  const handleEditContact = (index) => {
    setValue(contacts[index]); // Define o valor do campo de input como o valor atual do contato
    setIsEditing(true); // Define o estado de edição como verdadeiro
    setEditedIndex(index); // Define o índice do contato sendo editado
  };

  return (
    <Styled.Container>
      <Styled.Tittle>Agenda de Contato</Styled.Tittle>
      <Styled.Form onSubmit={handleSubmit}>
        <Styled.Input
          type="text"
          placeholder="Digite o seu Contato"
          onChange={(e) => setValue(e.target.value)}
          value={value}
        />
        <Styled.Button>{isEditing ? "Salvar" : "Adicionar"}</Styled.Button>
      </Styled.Form>
      {/* Renderiza a lista de contatos */}
      {contacts.map((contact, index) => (
        <Styled.ContactContainer key={index}>
          {isEditing && editedIndex === index ? (
            <Styled.Input
              type="text"
              value={value}
              onChange={(e) => setValue(e.target.value)}
            />
          ) : (
            <p>{contact}</p>
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
