import React from "react"
import Pictures from "./index"

export default {
  title: "Business/Pictures",
}

const pictureUrl = "https://via.placeholder.com/1000x600"
const picturesArray = Array(8)
  .fill(null)
  .map(_ => ({ large: { url: pictureUrl } }))

export const standard = () => <Pictures pictures={picturesArray} />
