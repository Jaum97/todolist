import styled from "styled-components"

import { colors } from "../../styles/colors"
import { getInsetShadow } from "../../styles/grid"
import { getLinearGradient } from "../../utils/styles"

export const SectionContainer = styled.div`
  align-items: center;
  background: white;
  border-radius: 12px;
  box-shadow: 2px 2px 4px #00000015;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  margin: 16px;
  padding: 16px;
  width: 100%;
`

export const SectionHeader = styled.div`
  align-items: center;
  border-bottom: 2px solid #f9f9f9;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 0px 16px;
  width: 100%;
`

export const SectionTitle = styled.h1`
  color: ${colors.secondary};
  font-size: 24px;
  padding-bottom: 16px;
  font-weight: 700;
`
export const ActionButton = styled.div`
  align-items: center;
  background: ${getLinearGradient(
    colors.secondary,
    colors.primary + " 65%",
    "to bottom"
  )};
  border-radius: 6px;
  box-shadow: 0px 2px 4px ${colors.secondary};
  display: flex;
  flex-direction: column;
  height: 36px;
  justify-content: center;
  margin-bottom: 16px;
  width: 36px;
  cursor: pointer;
  &:hover {
    box-shadow: ${getInsetShadow};
  }
`

export const ActionButtonText = styled.p`
  color: white;
  font-size: 24px;
`
