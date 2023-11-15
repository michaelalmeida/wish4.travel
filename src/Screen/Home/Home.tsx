import { Navigate } from "react-router-dom";
import { ROUTES } from "../../constants/routes";
import { useUserContext, useUserCookie } from "../../Hooks/useUser";
import { Dashboard } from "../Dashboard";

const Home = () => {
  const { user } = useUserContext();
  const { userId } = useUserCookie();

  return userId ? <Dashboard user={user} /> : <Navigate to={ROUTES.LOGIN} />;
};

export default Home;
