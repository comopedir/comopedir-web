import React from "react"
import Channels from "."

const channelsData = [
  { value: null, channel: { name: "Telefone", slug: "telefone" } },
  {
    value: "https://www.restauranteamadeus.com.br/",
    channel: { name: "website", slug: "website" },
  },
  { value: "5511940208905", channel: { name: "Whatsapp", slug: "whatsapp" } },
  { value: "551130612859", channel: { name: "phone", slug: "phone" } },
  {
    value: "@restauranteamadeus",
    channel: { name: "instagram", slug: "instagram" },
  },
  {
    value: "bellarmasano@gmail.com",
    channel: { name: "email", slug: "email" },
  },
]

export default {
  title: "Business/Channels",
}

export const standard = () => (
  <div style={{ padding: "25px" }}>
    <Channels channels={channelsData} />
  </div>
)
