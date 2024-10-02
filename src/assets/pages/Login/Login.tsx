import { LoginContainer } from "./Login.styles";
import { Input } from "../../components/InputText/InputText";
import { Button } from "../../components/Button/button";

export function Login () {
  return (
    <body>
        <LoginContainer>
        <h1>Log in</h1>
        <h3>Email</h3><Input />
        <h3>Senha</h3><Input />
          <Button variant="sucess" >
            Submit
          </Button>
        </LoginContainer>
    </ body>
  )
}