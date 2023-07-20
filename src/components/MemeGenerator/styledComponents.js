// Style your components here

import styled from 'styled-components'

export const CustomLabel = styled.label`
  color: #7e858e;
`

export const CustomInput = styled.input`
  color: #7e858e;
`
export const FormContainer = styled.from`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`
export const SelectContainer = styled.select`
  color: #1e293b;
  background-color: #ffffff;
  padding-top: 10px;
  padding-bottom: 10px;
`
export const OptionContainer = styled.option`
  background-color: #ffffff;
  color: #1e293b;
`

export const ButtonInput = styled.button`
  height: 30px;
  width: 35px;
  color: #ffffff;
  background-color: #0b69ff;
`
export const MemeContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-position: url(${props => props.backgroundImage});
  background-size: cover;
`
export const Text = styled.p`
  color: #ffffff;
  font-size: ${props => props.activeFont}px;
`

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`

export const Heading = styled.h1`
  color: #35469c;
  font-family: 'Open Sans';
  font-weight: bold;
`

export const Meme = styled.div`
  display: flex;
  flex-direction: column;
`
