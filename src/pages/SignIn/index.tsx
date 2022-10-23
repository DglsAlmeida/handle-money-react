import { SubmitHandler, useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'
import { Inputs } from './interfaces'
import * as S from './styles'

const SignIn = () => {
  const { register, handleSubmit, setValue } = useForm<Inputs>()

  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data)

  return (
    <S.SignInContainer>
      <S.LogoPanel></S.LogoPanel>
      <S.FormContainer>
        <S.FormContent onSubmit={handleSubmit(onSubmit)}>
          <S.Title>Login to financial dashboard</S.Title>
          <S.Input
            placeholder="User"
            type="text"
            {...register('user', {
              onChange: (e) =>
                setValue('user', e.target.value.replace(/\s/g, '')),
            })}
          />
          <S.Input
            placeholder="Password"
            type="password"
            {...register('password')}
          />
          <S.ForgotPassword>Forgot Password ?</S.ForgotPassword>
          <S.ButtonContainer>
            <S.LoginButton type="submit">LOGIN</S.LoginButton>
            <S.SignUpLink>
              If you are a new user. <Link to="/signup">Signup here</Link>
            </S.SignUpLink>
          </S.ButtonContainer>
        </S.FormContent>
      </S.FormContainer>
    </S.SignInContainer>
  )
}

export default SignIn
