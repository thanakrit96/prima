/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/browser-apis/
 */

// You can delete this file if you're not using it
import "./src/styles/global.css"
import React from "react"

import { PlayUrlProvider } from "./src/context/play-url"
window.global = window;
window.Buffer = window.Buffer || require('buffer').Buffer;

export const wrapRootElement = ({ element }) => (
  <PlayUrlProvider>{element}</PlayUrlProvider>
)
