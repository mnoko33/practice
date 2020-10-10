import React, { useState } from 'react';
import { regex } from './regex';
import styled from 'styled-components';

function Form() {
  const [email, setEmail] = useState('');
  const [password1, setPassword1] = useState('');
  const [password2, setPassword2] = useState('');
  const [errors, setErrors] = useState({});

  const handleOnChange = (e) => {
    if (e.target.name === 'email') {
      setEmail(e.target.value);
    } else if (e.target.name === 'password1') {
      setPassword1(e.target.value);
    } else if (e.target.name === 'password2') {
      setPassword2(e.target.value);
    }
  }

  const handleSubmit = (e) => {
    const errors = {}
    if (!email) {
      errors.email = '이메일은 필수입니다.'
    }
    if (!regex(email).email()) {
      errors.email = '올바르지 않은 이메일 형식입니다.'
    }
    if (!password1) {
      errors.password1 = '비밀번호는 필수입니다.'
    }
    if (!password2) {
      errors.password2 = '비밀번호는 필수입니다.'
    }
    if (password1 && password2 && password1 !== password2) {
      errors.passwordMatch = '비밀번호가 일치하지 않습니다.'
    }
    setErrors(errors);
    e.preventDefault();
  }

  return (
    <FormWrapper>
      <InputWrapper className="input input-email">
        <Label>email</Label>
        <Input 
          value={email} 
          placeholder="이메일을 입력해주세요."
          onChange={handleOnChange}
          type="text" 
          name="email"
        />
        { errors.email && <Error>{errors.email}</Error> }
      </InputWrapper>
      <InputWrapper className="input input-password1">
        <Label>password1</Label>
        <Input 
          value={password1} 
          placeholder="비밀번호를 입력해주세요."
          onChange={handleOnChange} 
          type="password" 
          name="password1"
        />
        { errors.password1 && <Error>{errors.password1}</Error> }
      </InputWrapper>
      <InputWrapper className="input input-password2">
        <Label>password2</Label>
        <Input 
          value={password2} 
          placeholder="비밀번호를 입력해주세요."
          onChange={handleOnChange} 
          type="password" 
          name="password2" 
        />
        { errors.password2 && <Error>{errors.password2}</Error> }
        { errors.passwordMatch && <Error>{errors.passwordMatch}</Error> }
      </InputWrapper>
      <Button onClick={e => handleSubmit(e)}>
        회원가입
      </Button>
    </FormWrapper>
  )
}

export default Form;

const FormWrapper = styled.form`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 400px;
`;

const InputWrapper = styled.div`
  margin-bottom: 20px;
`;

const Label = styled.label`
  display: block;
  font-size: 15px;
  font-weight: bolder;
  margin: 2px;
`;

const Input = styled.input`
  all: unset;
  display: block;
  width: 100%;
  height: 35px;
  padding: 5px 10px;
  margin-top: 15px;
  border: 1px solid black;
  border-radius: 5px;
  &:focus {
    border: 2px solid black;
  }
`;

const Error = styled.span`
  font-size: 10px;
  color: red;
  margin-top: 10px;
`;

const Button = styled.button`
  width: 100%;
  height: 50px;
  margin: 0 auto;
`;