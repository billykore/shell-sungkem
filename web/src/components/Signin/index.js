import React from 'react'
import {
  Container,
  Form,
  FormButton,
  FormContent,
  FormH1,
  FormInput,
  FormLabel,
  FormWrap,
  Icon,
} from "./SigninElemets";

export default function SignIn() {
  return (
    <Container>
      <FormWrap>
        <FormContent>
          <Form>
            <Icon to='/'>Sungkem</Icon>
            <FormH1>Sign in to your account</FormH1>
            <FormLabel>Email</FormLabel>
            <FormInput type="email"/>
            <FormLabel>Password</FormLabel>
            <FormInput type="password"/>
            <FormButton type="submit">Sign in</FormButton>
          </Form>
        </FormContent>
      </FormWrap>
    </Container>
  )
}