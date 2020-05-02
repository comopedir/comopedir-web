import React from "react"
import styled from "styled-components"
import Layout from "../components/Layout"
import { black } from "../styles/colors"
import { mediaQuery, breakpoints } from "../styles/breakpoints"
import FAQItem from "../components/FAQ/FAQItem"

const StyledContainer = styled.div`
  margin: 11.7rem 0 21.5rem;

  ${mediaQuery[breakpoints.large]} {
    margin: 22.6rem 0 24.2rem;
    max-width: 40%;
  }
`

const FAQ = () => (
  <Layout background={black} heading="Como?">
    <StyledContainer>
      <FAQItem question="Como posso incluir o meu estabelecimento?">
        Fácil, clique em <a href="/">‘Cadastrar‘</a>
      </FAQItem>
      <FAQItem question="Qual o preço para fazer parte?">
        É completamente de graça.
      </FAQItem>
      <FAQItem question="Pode estabelecimentos que não sejam de alimentos & bebida?">
        Não, estamos focados para aumentar a chance de sucesso. Esperamos que
        isso inspire outras iniciativas.
      </FAQItem>
      <FAQItem question="O projeto está disponível no Brasil inteiro?">
        Sim, em qualquer cidade.
      </FAQItem>
      <FAQItem question=" Como posso ajudar?">
        Divulgando, usando, e pedindo dos seus estabelecimentos favoritos.
      </FAQItem>
      <FAQItem question="Quem está tocando essa projeto?">
        <a href="https://www.instagram.com/kato78/">Kato</a>,&ensp;
        <a href="https://www.instagram.com/tbanares/">Bañares</a>,&ensp;
        <a href="https://www.instagram.com/zambrano/">Zambrano</a>,&ensp;
        <a href="https://www.instagram.com/nandico/">Nandico</a>,&ensp;
        <a href="https://www.instagram.com/bonicio/">Bonicio</a>,&ensp;
        <a href="https://www.instagram.com/renatomorenocz/">Renatão</a>,&ensp;
        <a href="https://www.instagram.com/victorbelinatti/">Belinatti</a>
        ,&ensp;
        <a href="https://www.instagram.com/gkozlowaski/">Koz</a>, e o suporte de
        muita gente.
      </FAQItem>
      <FAQItem question="O que vocês ganham com isso?">
        A chance de voltar aos lugares que amamos tanto, e garantir a existência
        dos que nunca fomos, assim podemos visitar um dia.
      </FAQItem>
    </StyledContainer>
  </Layout>
)

export default FAQ
