import { Navigate } from "react-router-dom";
import { ReactNode } from "react";

type ProtectedRouteProps = {
  children: ReactNode;
};

const ProtectedRoute = ({ children }: ProtectedRouteProps) => {
  // Simulando verificação se o usuário está autenticado
  // Em um aplicativo real, isso seria verificado com um token de autenticação
  const isAuthenticated = localStorage.getItem("user") !== null;

  if (!isAuthenticated) {
    return <Navigate to="/" replace />;
  }

  return <>{children}</>;
};

export default ProtectedRoute;
