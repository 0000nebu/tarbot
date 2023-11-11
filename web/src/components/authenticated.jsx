import { Navigate } from "react-router-dom";
import { useAuthContext } from "../contexts/user-context";

export function Authenticated({ children }) {
  const { user } = useAuthContext();

  if (!user) {
    return <Navigate to="/login" />;
  } else {
    return children;
  }
}

export function Unauthenticated({ children }) {
  const { user } = useAuthContext();

  if (user) {
    return <Navigate to="/login" />;
  } else {
    return children;
  }
}
