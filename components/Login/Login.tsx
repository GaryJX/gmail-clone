import { Button } from "@material-ui/core";
import { useRouter } from "next/router";
import { useContext } from "react";
import { auth, provider } from "../../firebase";
import { MailContext } from "../../reducers/mailReducer";
import styles from "./Login.module.scss";

const Login: React.FC = () => {
  const { dispatch } = useContext(MailContext);
  const router = useRouter();

  const signIn = () => {
    auth
      .signInWithPopup(provider)
      .then(({ user }) => {
        console.log(user);
        if (user) {
          dispatch({
            type: "login",
            payload: {
              displayName: user.displayName,
              email: user.email,
              photoURL: user.photoURL,
            },
          });

          router.push("/");
        }
      })
      .catch((err) => {
        alert(err.message);
      });
  };

  return (
    <div className={styles.login}>
      <div className={styles.loginContainer}>
        <img
          src="https://static.dezeen.com/uploads/2020/10/gmail-google-logo-rebrand-workspace-design_dezeen_2364_col_0.jpg"
          alt="Gmail Logo"
        />
        {/* // TODO: Use my own image later? */}
        <Button variant="contained" color="primary" onClick={signIn}>
          Login
        </Button>
      </div>
    </div>
  );
};

export default Login;
