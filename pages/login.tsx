import { useRouter } from "next/router";
import { useContext, useEffect } from "react";
import Login from "../components/Login/Login";
import { MailContext } from "../reducers/mailReducer";

const LoginPage: React.FC = () => {
  const router = useRouter();
  const { state } = useContext(MailContext);

  useEffect(() => {
    console.log(state.user);
    // Redirect to index page if user is already logged in
    if (state.user) {
      router.push("/");
    } else {
      router.push("/login");
    }
  }, [state.user]);

  return <Login />;
};

export default LoginPage;
