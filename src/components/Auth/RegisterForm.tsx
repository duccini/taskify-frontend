import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { registerSchema, RegisterFormData } from "../../schemas/auth";
import styles from "./Auth.module.css";
import { registerUser } from "../../services/authService";

const RegisterForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterFormData>({
    resolver: zodResolver(registerSchema),
  });

  const onSubmit = async (data: RegisterFormData) => {
    const { username, password } = data;

    try {
      await registerUser({ username, password });
      alert("Usuário registrado com sucesso!");
    } catch (err: any) {
      console.log(err.message);
    }

    // redirecionar para a página de login
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
