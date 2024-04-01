import { useState } from "react";
import * as Styled from "./style";
import Delete from "../../assets/delete.svg";
import Edit from "../../assets/edit.svg";
import Done from "../../assets/done.svg";

function Contact() {
  const [contacts, setContacts] = useState([]); // Estado para armazenar os contatos
  const [name, setName] = useState(""); // Estado para armazenar o nome digitado pelo usuário
  const [email, setEmail] = useState(""); // Estado para armazenar o email digitado pelo usuário
  const [phone, setPhone] = useState(""); // Estado para armazenar o telefone digitado pelo usuário
  const [isEditing, setIsEditing] = useState(false); // Estado para controlar se está editando um contato
  const [editedIndex, setEditedIndex] = useState(null); // Estado para armazenar o índice do contato sendo editado

  const handleSubmit = (e) => {
    e.preventDefault();
    // Verifica se o valor não está vazio antes de adicionar aos contatos
    if (name.trim() !== "" && email.trim() !== "" && phone.trim() !== "") {
      const newContact = {
        name: name,
        email: email,
        phone: phone,
      };
      if (isEditing) {
        // Se estiver editando, atualiza o contato existente
        const updatedContacts = [...contacts];
        updatedContacts[editedIndex] = newContact;
        setContacts(updatedContacts);
        setIsEditing(false);
        setEditedIndex(null);
      } else {
        // Caso contrário, adiciona um novo contato
        setContacts([...contacts, newContact]); // Adiciona o novo contato ao array de contatos
      }
      // Limpa os campos de input após o envio do formulário
      setName("");
      setEmail("");
      setPhone("");
    }
  };

  const handleDeleteContact = (index) => {
    const updatedContacts = [...contacts];
    updatedContacts.splice(index, 1); // Remove o contato correspondente do array de contatos
    setContacts(updatedContacts); // Atualiza o estado com a lista de contatos atualizada
  };

  const handleEditContact = (index) => {
    const contact = contacts[index];
    setName(contact.name); // Define o valor do campo de nome como o valor atual do contato
    setEmail(contact.email); // Define o valor do campo de email como o valor atual do contato
    setPhone(contact.phone); // Define o valor do campo de telefone como o valor atual do contato
    setIsEditing(true); // Define o estado de edição como verdadeiro
    setEditedIndex(index); // Define o índice do contato sendo editado
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
