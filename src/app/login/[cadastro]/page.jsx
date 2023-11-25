"use client";
import React from "react";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import "./cadastro.modules.css"

export default function Cadastro() {
  const navigate = useRouter();

  const [usuario, setUsuario] = useState({
    id: "",
    nome: "",
    senha: "",
    nascimento: "",
    cpf: "",
    email: "",
    peso: "",
    altura: ""
  });

  const [msg, setMsg] = useState("");
  const [classeLoginMsg, setClasseLoginMsg] = useState("");

  useEffect(() => {
    if (msg == "Cadastro realizado com sucesso!") {
      setClasseLoginMsg("login-sucesso");
    } else if (msg == "Ocorreu um erro no preenchimento.") {
      setClasseLoginMsg("login-erro");
    } else {
      setClasseLoginMsg("login-none");
    }
  }, [msg]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUsuario({ ...usuario, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:3000/api/base/base-cadastro", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(usuario),
      });

      if (response.ok) {
        const obj = await response.json();
        if (obj) {
          setMsg("Cadastro realizado com sucesso!");

          setTimeout(() => {
            setMsg("");
            navigate.push("/");
          }, 5000);
        } else {
          setMsg("Ocorreu um erro no preenchimento.");
          setTimeout(() => {
            setMsg("");
            setUsuario({
                id: "",
                senha: "",
                nome: "",
                nascimento: "",
                cpf: "",
                email: "",
                peso: "",
                altura: ""
            });
          }, 5000);
        }
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <div className="cadastroForms">
        <h2 className={classeLoginMsg}>{msg}</h2>
        <form onSubmit={handleSubmit}>
          <fieldset>
            <div>
              <label htmlFor="idNome">Nome:</label>
              <input
                type="text"
                name="nome"
                id="idNome"
                placeholder="Digite seu Nome."
                value={usuario.nome}
                onChange={handleChange}
              />
            </div>
            <div>
              <label htmlFor="idSenha">Senha:</label>
              <input
                type="password"
                name="senha"
                id="idSenha"
                placeholder="Digite sua Senha."
                value={usuario.senha}
                onChange={handleChange}
              />
            </div>
            <div>
              <label htmlFor="idEmail">Email:</label>
              <input
                type="text"
                name="email"
                id="idEmail"
                placeholder="Digite seu Email."
                value={usuario.email}
                onChange={handleChange}
              />
            </div>
            <div>
              <label htmlFor="idCpf">CPF:</label>
              <input
                type="number"
                name="cpf"
                id="idCpf"
                placeholder="Digite seu CPF."
                value={usuario.cpf}
                onChange={handleChange}
              />
            </div>
            <div>
              <label htmlFor="idNascimento">Nascimento:</label>
              <input
                type="date"
                name="nascimento"
                id="idNascimento"
                placeholder="Digite sua data de nascimento."
                value={usuario.nascimento}
                onChange={handleChange}
              />
            </div>
            <div>
              <label htmlFor="idPeso">Peso:</label>
              <input
                type="number"
                name="peso"
                id="idPeso"
                placeholder="Digite seu peso em kg."
                value={usuario.peso}
                onChange={handleChange}
              />
            </div>
            <legend className="cadastroPaciente">Cadastro</legend>
            <div>
              <label htmlFor="idAltura">Altura:</label>
              <input
                type="number"
                name="altura"
                id="idAltura"
                placeholder="Digite a altura em cm."
                value={usuario.altura}
                onChange={handleChange}
              />
            </div>
            <div className="button">
              <button>CADASTRAR</button>
            </div>
            <div>
              <p>
                Se você já possui registro.{" "}
                <Link href="/login">CLIQUE AQUI</Link>
              </p>
            </div>
          </fieldset>
        </form>
      </div>
    </>
  );
}