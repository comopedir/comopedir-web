import React from "react"
import styled from "styled-components"
import chevron from "../../../assets/icons/chevron.svg"
import Text, { sizes } from "../../Text"
import Select from "../../Select"

const StyledIcon = styled.img`
  margin-left: 1rem;
  width: 1rem;
  height: 1rem;
`

const LocationFilter = ({ options = [], onChange = () => {}, selected }) => (
  <Select
    selected={selected}
    onChange={onChange}
    renderButtonContent={() => (
      <>
        <Text size={sizes.large}>{selected}</Text>
        <StyledIcon src={chevron} />
      </>
    )}
  >
    {options.map(option => (
      <option key={option} value={option}>
        {option}
      </option>
    ))}
  </Select>
)

export default LocationFilter
