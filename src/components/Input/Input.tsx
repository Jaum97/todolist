import React from "react"

import { StyledInput, InputContainer, InputTitle } from "./styles"
import { IProps } from "./types"

function Input(props: IProps) {
  const { title, ...inputProps } = props

  return (
    <InputContainer>
      <InputTitle>{title}</InputTitle>
      <StyledInput {...inputProps} />
    </InputContainer>
  )
}

export default Input
