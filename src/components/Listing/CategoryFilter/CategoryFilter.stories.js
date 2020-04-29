import React, { useState } from "react"
import CategoryFilter from "./index"

export default {
  title: "Listing/CategoryFilter",
}

const options = ["Asiático", "Hamburgueria", "Brasileiro", "Asiático"]

export const standard = () => {
  const [selected, setSelected] = useState(options[0])
  return (
    <CategoryFilter
      options={options}
      selected={selected}
      onChange={e => setSelected(e.target.value)}
    />
  )
}
