import type { PropsWithChildren } from 'react'
import React from 'react'

import styles from './Layout.module.css'

const Layout: React.FC<PropsWithChildren> = ({ children, ...rest }) => {
  return (
    <div className="grid grid-cols-1 h-[100vh] min-h-screen grid-rows-[auto_1fr_auto] overflow-hidden">
      <header className="row-start-1 h-fit min-h-[56px]" id="header">
        Header
      </header>
      <main
        className="row-start-2 row-end-2 overflow-y-scroll place-content-center"
        {...rest}
      >
        <div>{children}</div>
      </main>
      <footer className="row-start-3 h-fit cpo min-h-[56px]" id="footer">
        Footer
      </footer>
    </div>
  )
}

export default Layout
