import React from "react"
import { GlobalStyle } from "../../src/styles/global"

export default ({ children }) => (
  <React.Fragment>
    <GlobalStyle />
    {children}
  </React.Fragment>
)
