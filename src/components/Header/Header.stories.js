import React from "react"
import Header from "./index"
import { text } from "@storybook/addon-knobs"

export default { title: "Layout/Header" }

export const standard = () => <Header />
export const fullText = () => (
  <Header
    heading={`Como pedir de todos os \n lugares que você gosta e \n quer ajudar.`}
  />
)
