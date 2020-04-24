import React from "react"
import styled from "styled-components"
import chevron from "../../../assets/icons/chevron.svg"
import Text, { sizes } from "../../Text"
import { black } from "../../../styles/colors"

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

const StyledIcon = styled.img`
  margin-left: 1rem;
  width: 1rem;
  height: 1rem;
`

const LocationFilter = ({ options = [], onChange = () => {}, selected }) => (
  <StyledContainer>
    <StyledButton>
      <Text size={sizes.large}>{selected}</Text>
      <StyledIcon src={chevron} />
    </StyledButton>
    <StyledSelect value={selected} onChange={onChange}>
      {options.map(option => (
        <option key={option} value={option}>
          {option}
        </option>
      ))}
    </StyledSelect>
  </StyledContainer>
)

export default LocationFilter
