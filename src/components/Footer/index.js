import React from "react"
import styled from "styled-components"

import Header from "../Header"
import Text, { sizes } from "../Text"
import { black25, gray } from "../../styles/colors"
import { mediaQuery, breakpoints } from "../../styles/breakpoints"
import { signup } from "../../constants/urls"
import { Link } from "gatsby"

const defaultLinks = [
  {
    label: "FAQ",
    url: "/faq",
    internal: true,
  },
  {
    label: "Cadastro",
    url: signup,
  },
  {
    label: "Contato",
    url: "mailto:naodeixefecharaconta@gmail.com",
  },
  {
    label: "Instagram",
    url: "https://www.instagram.com/comopedir",
  },
]

const StyledTopContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  padding-bottom: 2.5rem;
  border-bottom: 1px solid ${black25};
`

const StyledRightsText = styled(Text)`
  color: ${gray};
`

const StyledItem = styled.li`
  ${mediaQuery[breakpoints.small]} {
    margin-top: 1rem;
  }

  margin-top: 0.8rem;
`

const linkStyles = `
&:hover {
  text-decoration: underline;
}
`

const StyledLink = styled.a(linkStyles)

const StyledInternalLink = styled(Link)(linkStyles)

const StyledHeader = styled(Header)`
  margin-top: 2rem;
`

const Footer = ({ links = defaultLinks }) => {
  return (
    <div>
      <StyledTopContainer>
        <ul>
          {links.map(link => (
            <StyledItem key={link.label}>
              {link.internal ? (
                <StyledInternalLink to={link.url}>
                  <Text size={sizes.medium}>{link.label}</Text>
                </StyledInternalLink>
              ) : (
                <StyledLink href={link.url}>
                  <Text size={sizes.medium}>{link.label}</Text>
                </StyledLink>
              )}
            </StyledItem>
          ))}
        </ul>
        <StyledRightsText size={sizes.small}>
          Todos os direitos reservados
        </StyledRightsText>
      </StyledTopContainer>
      <StyledHeader />
    </div>
  )
}

export default Footer
