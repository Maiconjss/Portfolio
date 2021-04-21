import React, { useState } from "react";
import { TextField, DefaultButton, Label } from "@fluentui/react";
import axios from "axios";
import Button from "../Button/Button";

const Contact = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const onChangeEmail = (e: any) => {
    setEmail(e.target.value);
  };

  const onChangeMessage = (e: any) => {
    setMessage(e.target.value);
  };

  const flowEmail =
    "https://prod-176.westus.logic.azure.com:443/workflows/1cc307693b18478cb65d7f034668a3a5/triggers/manual/paths/invoke?api-version=2016-06-01&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=NML6V1GT4xWdu24U7wVykE7wVOMCAHfDhXFwwfEqKkc";

  const sendMessage = () => {
    email && message !== ""
      ? axios
          .post(flowEmail, {
            message: message,
            email: email,
          })
          .then((response) => {
            alert("Mensagem enviada com sucesso!");
            window.location.reload();
          })
      : alert("Preencha os dados obrigatórios!");
  };

  return (
    <div>
      <Label>CONTATO</Label>
      <TextField
        required
        label="Qual o seu email ?"
        value={email}
        onChange={onChangeEmail}
      />
      <TextField
        required
        multiline
        resizable={true}
        label="Escreva sua mensagem"
        value={message}
        onChange={onChangeMessage}
      />
      <Button
        text="ENVIAR"
        handleClick={sendMessage}
      />
    </div>
  );
};

export default Contact;
