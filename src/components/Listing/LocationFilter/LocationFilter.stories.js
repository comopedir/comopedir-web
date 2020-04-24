import React, { useState } from "react"
import LocationFilter from "./index"

export default {
  title: "Listing/LocationFilter",
}

const options = [
  "São Paulo",
  "Rio de Janeiro",
  "Espirito Santo",
  "Minas Gerais",
]

export const standard = () => {
  const [selected, setSelected] = useState(options[0])
  return (
    <LocationFilter
      options={options}
      selected={selected}
      onChange={e => setSelected(e.target.value)}
    />
  )
}
