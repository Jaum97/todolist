import React from "react"
import {
  Container,
  ContainerAppTitle,
  PageHeader,
  Title,
  UserAvatar,
  UserAvatarContainer,
  UserName,
  Wrapper,
  LogoWrapper,
  ImageHolder,
} from "./styles"

const logoSrc = require("../../assets/logo.png")

function Header(): JSX.Element {
  return (
    <Wrapper>
      <PageHeader>
        <LogoWrapper>
          <ImageHolder src={logoSrc} alt="logo" />
        </LogoWrapper>

        <ContainerAppTitle>
          <Title>{"Todo App"}</Title>
        </ContainerAppTitle>

        <Container>
          <UserName>{"John Doe"}</UserName>
          <UserAvatarContainer>
            <UserAvatar title=" " round name="John Doe" size="56" />
          </UserAvatarContainer>
        </Container>
      </PageHeader>
    </Wrapper>
  )
}

export default Header
