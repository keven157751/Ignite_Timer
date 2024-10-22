import { LoginContainer } from "./Login.styles";
import { Button } from "../../components/Button/button";
import { Input } from "../../components/InputText";
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { useNavigate } from "react-router-dom";
import { GlobalStyles } from "../../components/styles/GlobalStyle";

const formSchema = z.object({
  email: z.string().email({ message: 'Email inválido' }),
  password: z.string().min(6, { message: 'Senha inválida' }),
})

type FormSchema = z.infer<typeof formSchema>

export function Login() {
  const navigate = useNavigate()
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormSchema>({
    mode: 'onBlur',
    resolver: zodResolver(formSchema),
  })

  const onSubmit = handleSubmit((data) => {
    console.log(data);
    navigate("/");
  })

  return (
    <>
      <div>
        <form onSubmit={onSubmit}>
          <LoginContainer>
          <h1>Login</h1>
          <Input 
              {...register('email')} 
              type="text" 
              label="Email:" 
              errorMessage={errors.email?.message} 
              placeholder="teste@email.com"
            />
          <Input 
              {...register('password')}
              type="text"
              label="Password"
              errorMessage={errors.password?.message}
              placeholder="********"
          />
            <Button variant="sucess" type="submit">
              Submit
            </Button>
          </LoginContainer>
        </form>
      </ div>
      <GlobalStyles />
  </>
  )
}
