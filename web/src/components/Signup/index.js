import React, {useState} from 'react';
import {useHistory} from 'react-router-dom';
import {useMutation} from '@apollo/client';
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
} from "../Form/FormElements";
import {REGISTER_USER} from '../../graphql/Mutation';
import {message} from '../../utils/message';
import {toast} from "react-toastify";

toast.configure();
export default function SignIn() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [register] = useMutation(REGISTER_USER);

  const history = useHistory();

  return (
    <Container>
      <FormWrap>
        <FormContent>
          <Form
            onSubmit={async e => {
              e.preventDefault();
              await register({variables: {firstName, lastName, email, password}});
              message('Register berhasil. Silahkan sign in', 'success');
              history.push('/signin');
            }}
          >
            <Icon to='/'>Sungkem</Icon>
            <FormH1>Create new account</FormH1>
            <FormLabel>First Name</FormLabel>
            <FormInput type="text" required onChange={(e) => setFirstName(e.target.value)} />
            <FormLabel>Last Name</FormLabel>
            <FormInput type="text" required onChange={(e) => setLastName(e.target.value)} />
            <FormLabel>Email</FormLabel>
            <FormInput type="email" required onChange={(e) => setEmail(e.target.value)} />
            <FormLabel>Password</FormLabel>
            <FormInput type="password" required onChange={(e) => setPassword(e.target.value)} />
            <FormButton type="submit">Sign up</FormButton>
          </Form>
        </FormContent>
      </FormWrap>
    </Container>
  )
}
