import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useNavigate } from "react-router-dom";
import { loginSchema, LoginFormData } from "../../schemas/auth";
import styles from "./Auth.module.css";

const LoginForm = () => {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = (data: LoginFormData) => {
    console.log("Dados de login:", data);

    // Consumo da API

    localStorage.setItem("user", JSON.stringify({ username: data.username }));

    //navigate("/home");
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className={styles.formGroup}>
        <label className={styles.label} htmlFor="username">
          Nome de usuário
        </label>
        <input
          id="username"
          type="text"
          {...register("username")}
          placeholder="Digite seu nome de usuário"
          className={styles.inputStyles}
        />
        {errors.username && (
          <p className={styles.error}>{errors.username.message}</p>
        )}
      </div>

      <div className={styles.formGroup}>
        <label className={styles.label} htmlFor="password">
          Senha
        </label>
        <input
          id="password"
          type="password"
          {...register("password")}
          placeholder="Digite sua senha"
          className={styles.inputStyles}
        />
        {errors.password && (
          <p className={styles.error}>{errors.password.message}</p>
        )}
      </div>

      <button type="submit" className={styles.submitButton}>
        Entrar
      </button>
    </form>
  );
};

export default LoginForm;
