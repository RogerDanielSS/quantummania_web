"use client";
import React, { useState, FormEvent, ChangeEvent } from "react";
import axios from "axios";
import "./styles/index.css";
import { useRouter } from "next/navigation";

const SignUpPage: React.FC = () => {
  const [isLoginMode, setIsLoginMode] = useState(true);
  const [name, setName] = useState(""); // novo campo para nome
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);

    if (!isLoginMode && password !== confirmPassword) {
      alert("As senhas não coincidem!");
      setLoading(false);
      return;
    }

    if (!isLoginMode) {
      // Cadastro
      try {
        await axios.post("http://localhost:3001/user", {
          name,
          email,
          password,
        });
        alert("Usuário cadastrado com sucesso!");
        setIsLoginMode(true);
      } catch (error: any) {
        alert(
          error?.response?.data?.message ||
            "Erro ao cadastrar usuário. Tente novamente."
        );
      } finally {
        setLoading(false);
      }
    } else {
      // Login
      try {
        const response = await axios.post("http://localhost:3001/auth/login", {
          email,
          password,
        });
        const { access_token, user } = response.data;
        localStorage.setItem("access_token", access_token);
        localStorage.setItem("user", JSON.stringify(user));
        alert("Login realizado com sucesso!");
        router.push("/");
        // Redirecione ou atualize a página conforme necessário
      } catch (error: any) {
        alert(
          error?.response?.data?.message ||
            "Erro ao fazer login. Verifique suas credenciais."
        );
      } finally {
        setLoading(false);
      }
    }
  };

  return (
    <div className="login-page">
      <div className="form-container">
        <div className="form-left">
          <div className="login-header">
            <div className="logo"></div>
            <h2>{isLoginMode ? "Entrar" : "Faça Login"}</h2>
            <p>Para salvar seu progresso</p>
          </div>

          <form onSubmit={handleSubmit} className="login-form">
            {!isLoginMode && (
              <div className="input-group">
                <label htmlFor="name">Nome</label>
                <input
                  type="text"
                  id="name"
                  placeholder="Digite seu nome"
                  value={name}
                  onChange={(e: ChangeEvent<HTMLInputElement>) =>
                    setName(e.target.value)
                  }
                  required
                />
              </div>
            )}

            <div className="input-group">
              <label htmlFor="email">E-mail</label>
              <input
                type="email"
                id="email"
                placeholder="Digite o seu email"
                value={email}
                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                  setEmail(e.target.value)
                }
                required
              />
            </div>

            <div className="input-group">
              <label htmlFor="senha">Senha</label>
              <input
                type="password"
                id="senha"
                placeholder="Digite a sua senha"
                value={password}
                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                  setPassword(e.target.value)
                }
                required
              />
            </div>

            {!isLoginMode && (
              <div className="input-group">
                <label htmlFor="confirm-senha">Confirme sua Senha</label>
                <input
                  type="password"
                  id="confirm-senha"
                  placeholder="Digite a sua senha"
                  value={confirmPassword}
                  onChange={(e: ChangeEvent<HTMLInputElement>) =>
                    setConfirmPassword(e.target.value)
                  }
                  required
                />
              </div>
            )}

            <button type="submit" className="btn-register" disabled={loading}>
              {loading ? (
                <span className="loader">Carregando...</span>
              ) : isLoginMode ? (
                "Entrar"
              ) : (
                "Cadastre-se"
              )}
            </button>
          </form>

          <div className="login-footer">
            {isLoginMode ? (
              <p>
                Não tem conta?{" "}
                <a href="#" onClick={() => setIsLoginMode(false)}>
                  Cadastre-se
                </a>
              </p>
            ) : (
              <p>
                Já tem conta?{" "}
                <a href="#" onClick={() => setIsLoginMode(true)}>
                  Faça Login
                </a>
              </p>
            )}
          </div>
        </div>

        <div className="form-right"></div>
      </div>
    </div>
  );
};

// Loader CSS (adicione no seu CSS global ou local)
/*
.loader {
  display: inline-block;
  width: 18px;
  height: 18px;
  border: 3px solid #fff;
  border-radius: 50%;
  border-top: 3px solid #3498db;
  animation: spin 0.8s linear infinite;
  vertical-align: middle;
}
@keyframes spin {
  0% { transform: rotate(0deg);}
  100% { transform: rotate(360deg);}
}
*/

export default SignUpPage;
