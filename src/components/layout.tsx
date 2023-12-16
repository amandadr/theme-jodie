/** @jsx jsx */
/** @jsxFrag */
import { jsx, get } from "theme-ui"
import * as React from "react"
import { Global } from "@emotion/react"
import Wrapper from "./layout-wrapper"
import Sidebar from "./sidebar"
import Footer from "./footer"
import { SkipNavTarget, SkipNavTrigger } from "./skip-nav"

type LayoutProps = { children: React.ReactNode; color?: string }

const Layout = ({ children, color = "#f8f7f2" }: LayoutProps) => (
  <>
    <Global
      styles={(t) => ({
        "*,*:after,*:before": {
          boxSizing: `border-box`,
        },
        "[hidden]": {
          display: `none`,
        },
        "::selection": {
          background: get(t, `colors.primary`),
          color: get(t, `colors.white`),
        },
      })}
    />
    <SkipNavTrigger />
    <Wrapper>
      <Sidebar bg={"#f8f7f2"} />
      <main sx={{ gridColumnStart: [1, 1, 1, 2] }}>
        <SkipNavTarget />
        {children}
      </main>
      <Footer bg={"#f8f7f2"} />
    </Wrapper>
  </>
);

export default Layout
