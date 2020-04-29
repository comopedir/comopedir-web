import React from "react"
import styled from "styled-components"
import chevron from "../../../assets/icons/chevron.svg"
import Text, { sizes } from "../../Text"
import Select from "../../Select"

const StyledIcon = styled.img`
  margin-left: 0.5rem;
  width: 0.6rem;
  height: 0.6rem;
`

const CategoryFilter = ({ options = [], onChange = () => {}, selected }) => (
  <Select
    selected={selected}
    onChange={onChange}
    renderButtonContent={() => (
      <>
        <Text size={sizes.medium}>{selected || "Filtrar"}</Text>
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

export default CategoryFilter
