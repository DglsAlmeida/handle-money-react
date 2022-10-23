import { SubmitHandler, useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { Inputs } from './interfaces';
import * as S from './styles';

const SignUp = () => {
  const { register, handleSubmit, setValue } = useForm<Inputs>()

  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data)

  return (
    <S.SignInContainer>
      <S.LogoPanel></S.LogoPanel>
      <S.FormContainer>
        <S.FormContent onSubmit={handleSubmit(onSubmit)}>
          <S.Title>Create your account</S.Title>
          <S.Input
            placeholder="E-mail"
            type="text"
            {...register('email', {
              onChange: (e) =>
                setValue('email', e.target.value.replace(/\s/g, '')),
            })}
          />
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
          <S.ButtonContainer>
            <S.LoginButton type="submit">CREATE USER</S.LoginButton>
            <S.SignUpLink>
              If you already have a account. <Link to="/signin">Back to login</Link>
            </S.SignUpLink>
          </S.ButtonContainer>
        </S.FormContent>
      </S.FormContainer>
    </S.SignInContainer>
  )
}

export default SignUp;
