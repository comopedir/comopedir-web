import React from "react"
import Text, { sizes } from "./index"

export default { title: "Shared Components/Text" }

export const smallSize = () => <Text size={sizes.small}>Small size text</Text>
export const mediumSize = () => (
  <Text size={sizes.medium}>Medium size text</Text>
)
export const largeSize = () => <Text size={sizes.large}>Large size text</Text>
