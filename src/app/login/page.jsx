"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import "./login.modules.css";

export default function Login() {
  const navigate = useRouter();

  const [usuario, setUsuario] = useState({
    senha: "",
    email: "",
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
      const response = await fetch(
        "http://localhost:3000/api/base/base-users/0",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(usuario),
        }
      );

      if (response.ok) {
        const data = await response.json();
        if (data.status) {
          const token =
            Math.random().toString(36).substring(2) +
            Math.random().toString(36).substring(2);
      
          if (typeof window !== 'undefined') {
            sessionStorage.setItem("token-user", token);
            sessionStorage.setItem("obj-user", JSON.stringify(data.user));
      
            setMsg("Usuário validado com sucesso!");
      
            setTimeout(() => {
              setMsg("");
              navigate.push("/");
            }, 3000);
          }
        } else {
          setMsg("Usuário ou Senha inválidos!");
          setTimeout(() => {
            setMsg("");
            setUsuario({
              email: "",
              senha:""
            });
       },3000);
      }
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <div className="loginForms">
        <h2 className={classeLoginMsg}>{msg}</h2>
        <form onSubmit={handleSubmit}>
          <fieldset>
            <legend>Login</legend>
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
            <div className="button">
              <button type="submit">Login</button>
            </div>
            <div>
              <p>
                Se você não possui registro.{" "}
                <Link href="/login/cadastro">Clique aqui</Link>
              </p>
            </div>
          </fieldset>
        </form>
      </div>
    </>
  );
}
