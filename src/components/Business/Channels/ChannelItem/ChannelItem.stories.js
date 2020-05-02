import React from "react"
import ChannelItem from "./index"

export default {
  title: "Business/Channels/ChannelItem",
}

export const standard = () => (
  <div style={{ padding: "32px" }}>
    <ChannelItem value="iFood" />
  </div>
)

export const withServices = () => (
  <div style={{ padding: "32px" }}>
    <ChannelItem value="iFood" services={["Delivery", "Retirada"]} />
  </div>
)
