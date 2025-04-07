import { useState } from "react";
import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";
import styles from "./Auth.module.css";

const Auth = () => {
  const [isLogin, setIsLogin] = useState(true);

  const toggleAuthMode = () => {
    setIsLogin(!isLogin);
  };

  return (
    <div className={styles.authContainer}>
      <div className={styles.logoSection}>
        <h1 className={styles.logo}>Taskify</h1>
        <p>Organize suas tarefas de forma simples e eficiente</p>
      </div>

      <div className={styles.formSection}>
        <div className={styles.formContainer}>
          <h2 className={styles.title}>{isLogin ? "Login" : "Cadastro"}</h2>
          {isLogin ? <LoginForm /> : <RegisterForm />}
          <div className={styles.switchMode}>
            {isLogin ? (
              <p>
                Não tem uma conta?{" "}
                <span
                  className={styles.switchModeLink}
                  onClick={toggleAuthMode}
                >
                  Cadastre-se
                </span>
              </p>
            ) : (
              <p>
                Já tem uma conta?{" "}
                <span
                  className={styles.switchModeLink}
                  onClick={toggleAuthMode}
                >
                  Faça login
                </span>
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Auth;
