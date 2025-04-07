import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { registerSchema, RegisterFormData } from "../../schemas/auth";
import styles from "./Auth.module.css";

const RegisterForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterFormData>({
    resolver: zodResolver(registerSchema),
  });

  const onSubmit = (data: RegisterFormData) => {
    // Simulando registro bem-sucedido
    console.log("Dados de cadastro:", data);

    // Em uma aplicação real, você enviaria os dados para uma API
    // para criar um novo usuário

    // Por enquanto, vamos apenas simular um cadastro bem-sucedido
    alert("Cadastro realizado com sucesso! Faça login para continuar.");

    // Em uma aplicação real, você redirecionaria para a página de login
    // ou faria login automaticamente
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
          placeholder="Escolha um nome de usuário"
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
          placeholder="Escolha uma senha"
          className={styles.inputStyles}
        />
        {errors.password && (
          <p className={styles.error}>{errors.password.message}</p>
        )}
      </div>

      <button type="submit" className={styles.submitButton}>
        Cadastrar
      </button>
    </form>
  );
};

export default RegisterForm;
