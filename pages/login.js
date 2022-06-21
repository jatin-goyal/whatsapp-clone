import { Button } from "@mui/material";
import { signInWithPopup } from "firebase/auth";
import Head from "next/head";
import styled from "styled-components";
import { auth, provider } from "../firebase";

export default function Login() {
  const signIn = () => {
    signInWithPopup(auth, provider)
      .then(() => {})
      .catch((err) => {
        alert(err.message);
      });
  };

  return (
    <Container>
      <Head>
        <title>Login</title>
      </Head>
      <LoginContainer>
        <Logo src="http://assets.stickpng.com/images/580b57fcd9996e24bc43c543.png" />
        <Button
          onClick={signIn}
          variant="outlined"
          style={{ color: "black", border: "1px solid #eee " }}
        >
          Sign In with Google
        </Button>
      </LoginContainer>
    </Container>
  );
}

const Container = styled.div`
  display: grid;
  place-items: center;
  height: 100vh;
  background-color: whitesmoke;
`;

const LoginContainer = styled.div`
  border-radius: 10px;
  padding: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: white;
  box-shadow: 0px 5px 14px -3px rgba(0, 0, 0, 0.3);
`;

const Logo = styled.img`
  height: 200px;
  width: 200px;
  margin-bottom: 50px;
`;
