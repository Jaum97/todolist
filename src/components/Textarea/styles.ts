import styled from "styled-components"
import { colors } from "../../styles/colors"
import { ITextareaStyledProps } from "./types"

export const TextAreaContainer = styled.div`
  margin: 8px 0px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`

export const TextAreaTitle = styled.h2<ITextareaStyledProps>`
  color: ${({ invalid: i }) => (i ? colors.secondary : colors.darkGrey)};
  font-size: 16px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`

export const StyledTextarea = styled.textarea`
  resize: none;
  padding: 6px 12px;
  width: -webkit-fill-available;
  border: solid 1px #d1d1d1;
  color: #d1d1d1;
  border-radius: 3px;
  font-family: "Bahij_SultanNahia", sans-serif;
  &:valid {
    color: ${colors.darkGrey};
  }
  @media (max-width: 560px) {
    padding: 6px 0px;
  }
`
