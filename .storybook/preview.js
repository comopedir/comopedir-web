import React from "react"
import { addDecorator } from "@storybook/react"
import GlobalStyle from "./decorators/GlobalStyle"

addDecorator(storyFn => <GlobalStyle>{storyFn()}</GlobalStyle>)
