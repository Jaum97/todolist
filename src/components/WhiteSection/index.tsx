import React from "react"

import {
  ActionButton,
  SectionContainer,
  SectionHeader,
  SectionTitle,
  ActionButtonText,
} from "./styles"
import { IProps } from "./types"

function WhiteSection(props: IProps) {
  const { title, children, onClick } = props

  return (
    <SectionContainer>
      {title && (
        <SectionHeader>
          <SectionTitle>{title}</SectionTitle>
          {onClick ? (
            <ActionButton onClick={onClick}>
              <ActionButtonText>{"-"}</ActionButtonText>
            </ActionButton>
          ) : null}
        </SectionHeader>
      )}
      {children}
    </SectionContainer>
  )
}

export default WhiteSection
