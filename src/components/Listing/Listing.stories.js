import React from "react"
import Listing from "./index"

export default {
  title: "Listing",
}

const items = [
  {
    url: "/",
    name: "Tan Tan To Go",
    category: "Asiático",
    image: "https://via.placeholder.com/720x580",
  },
  {
    url: "/",
    name: "Tan Tan To Go",
    category: "Asiático",
    image: "https://via.placeholder.com/720x580",
  },
  {
    url: "/",
    name: "Tan Tan To Go",
    category: "Asiático",
    image: "https://via.placeholder.com/720x580",
  },
  {
    url: "/",
    name: "Tan Tan To Go",
    category: "Asiático",
    image: "https://via.placeholder.com/720x580",
  },
  {
    url: "/",
    name: "Tan Tan To Go",
    category: "Asiático",
    image: "https://via.placeholder.com/720x580",
  },
]

export const standard = () => <Listing items={items} />
