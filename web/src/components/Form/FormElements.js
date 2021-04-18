import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const Container = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  top: 0;
  z-index: 0;
  overflow: hidden;
  background: #eee; 
`

export const FormWrap = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  
  @media screen and (max-width: 400px) {
    height: 80%;
  }
`

export const Icon = styled(Link)`
  font-family: 'Staatliches', cursive;
  text-align: center;
  text-decoration: none;
  letter-spacing: 3px;
  font-size: 1.8rem;
  color: #d6c300;

  @media screen and (max-width: 480px) {
    margin-left: 16px;
    margin-top: 8px;
  }
`

export const FormContent = styled.div`
  height: 100px;
  display: flex;  
  flex-direction: column;
  justify-content: center;
  
  @media screen and (max-width: 480px) {
    padding: 10px;  
  }
`

export const Form = styled.form`
  background: #010101;
  max-width: 400px;
  height: auto;
  width: 100%;
  z-index: 1;
  display: grid;
  margin: 0 auto;
  padding: 80px 32px;
  border-radius: 4px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.9);

  @media screen and (max-width: 400px) {
    padding: 32px;
  }
`

export const FormH1 = styled.h1`
  margin-top: 20px;
  margin-bottom: 20px;
  color: #fff;
  font-size: 18px;
  font-weight: 400;
  text-align: center;
`

export const RegisterLink = styled(Link)`
  color: cadetblue;
`

export const FormLabel = styled.label`
  margin-bottom: 8px;
  font-size: 14px;
  color: #fff;
`

export const FormInput = styled.input`
  padding: 16px;
  margin-bottom: 32px;
  border: none;
  border-radius: 4px;
`

export const FormButton = styled.button`
  background: #d6c300;
  padding: 16px 0;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-weight: 700;
`

export const Text = styled.span`
  text-align: center;
  margin-top: 24px;
  color: #fff;
  font-size: 14px;
`
