import styled from "styled-components"
import { colors } from "../../styles/colors"
import { getInsetShadow } from "../../styles/grid"
import { getLinearGradient } from "../../utils/styles"

export const Wrapper = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 16px;
  margin: 0px 16px;
`

export const Center = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  @media (max-width: 560px) {
    width: auto;
  }
`

export const SaveButtonContainer = styled.div`
  margin-top: 16px;
  display: flex;
  flex-direction: row;
  justify-content: center;
`

export const SaveButton = styled.button`
  width: 100%;
  border-radius: 3px;
  border: 1px solid;
  background: ${getLinearGradient(colors.secondary, colors.primary)};
  color: white;
  text-align: center;
  font-size: 18px;
  padding: 8px 16px;
  cursor: pointer;
  &:hover {
    box-shadow: ${getInsetShadow};
  }
  @media (max-width: 992px) {
    opacity: 0;
  }
`
