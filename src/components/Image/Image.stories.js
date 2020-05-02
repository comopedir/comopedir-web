import React from "react"
import Image from "./index"

export default {
  title: "Shared Components/Image",
}

export const standard = () => (
  <div
    style={{
      height: 200,
      width: 300,
    }}
  >
    <Image src="https://via.placeholder.com/720x580" />
  </div>
)
