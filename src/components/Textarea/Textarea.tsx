import React from "react"
import { TextAreaContainer, TextAreaTitle } from "./styles"

import { StyledTextarea } from "./styles"
import { IProps } from "./types"

function Textarea(props: IProps) {
  const { title, ...textAreaProps } = props

  return (
    <TextAreaContainer>
      <TextAreaTitle>{title}</TextAreaTitle>
      <StyledTextarea {...textAreaProps} />
    </TextAreaContainer>
  )
}

export default Textarea
