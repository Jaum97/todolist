import styled from "styled-components"

import { colors } from "../../styles/colors"
import { IInputStyledProps } from "./types"

export const InputContainer = styled.div`
  margin: 8px 0px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`

export const InputTitle = styled.h2<IInputStyledProps>`
  color: ${({ invalid: i }) => (i ? colors.secondary : colors.darkGrey)};
  font-size: 16px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`

export const StyledInput = styled.input<IInputStyledProps>`
  padding: 6px 12px;
  border: solid 1px ${({ invalid: i }) => (i ? colors.secondary : "#d1d1d1")};
  color: #d1d1d1;
  border-radius: 3px;
  &:valid {
    color: ${colors.darkGrey};
  }
  @media (max-width: 560px) {
    padding: 6px 0px;
  }
`
