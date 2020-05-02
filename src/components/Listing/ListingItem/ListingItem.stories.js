import React from "react"
import ListingItem from "./index"

export default {
  title: "Listing/ListingItem",
}

export const standard = () => (
  <div style={{ height: 200, width: 300 }}>
    <ListingItem
      url="/"
      name="Tan Tan To Go"
      categories={[{ slug: "Asiático" }]}
      pictures={[{ small: { url: "https://via.placeholder.com/720x580" } }]}
    />
  </div>
)
