import React, { useState } from "react"
import Select from "."

export default {
  title: "Shared Components/Select",
}

export const standard = () => {
  const [selected, setSelected] = useState("Option 1")
  return (
    <Select
      onChange={e => setSelected(e.target.value)}
      renderButtonContent={() => <p>{selected}</p>}
      selected={selected}
    >
      <option value="Option 1">Option 1</option>
      <option value="Option 2">Option 2</option>
      <option value="Option 3">Option 3</option>
    </Select>
  )
}
