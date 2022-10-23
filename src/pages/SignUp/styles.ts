import styled from 'styled-components'

export const SignInContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 100vh;
`
export const LogoPanel = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #adff2f;
`
export const FormContainer = styled.div`
  flex: 2;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export const FormContent = styled.form`
  display: flex;
  flex-direction: column;
  width: 50%;
  justify-content: center;
  border-radius: 8px;
`
export const Title = styled.span`
  font-size: 1.5rem;
  margin-bottom: 50px;
`
export const Input = styled.input`
  padding: 15px;
  border-radius: 5px;
  border: none;
  outline: none;
  background-color: #e0e0e0;
  width: 100%;

  & + & {
    margin-top: 10px;
  }

  &::placeholder {
    font-size: 1rem;
  }
`

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 25px;
`

export const LoginButton = styled.button`
  border: none;
  cursor: pointer;
  padding: 10px 60px;
  width: 40%;
  border-radius: 5px;
  font-size: 1rem;
  background-color: #adff2f;
  transition: all 0.2s;

  &:hover {
    filter: brightness(0.9);
  }
`
export const SignUpLink = styled.a`
  font-size: 12px;
`
