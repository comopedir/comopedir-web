import React from "react"
import styled from "styled-components"
import chevron from "../../assets/icons/chevron.svg"
import { black } from "../../styles/colors"

const StyledContainer = styled.div`
  display: inline-flex;
  position: relative;
  cursor: pointer;
  overflow: hidden;
`

const StyledButton = styled.button`
  background: none;
  border: none;
  display: flex;
  width: 100%;
  align-items: center;
  border-bottom: 1px solid ${black};
  padding: 0;
`

const StyledSelect = styled.select`
  position: absolute;
  top: 0;
  left: 0;
  opacity: 0;
  width: 100%;
  height: 100%;
`

const Select = ({
  children,
  onChange = () => {},
  renderButtonContent = () => null,
  selected,
}) => (
  <StyledContainer>
    <StyledButton>{renderButtonContent()}</StyledButton>
    <StyledSelect value={selected} onChange={onChange}>
      {children}
    </StyledSelect>
  </StyledContainer>
)

export default Select
