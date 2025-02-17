import React, { memo, Suspense } from 'react'

import Box from '../../components/Box'
import Spinner from '../../components/Spinner'
import logo from '../../logo.svg'

import Counter from './Counter'
import DocList from './DocList'
import styles from './index.module.css'
import MainForm from '@/components/MainForm/MainForm'

interface Props {}

const Index: React.FC<Props> = memo(() => {
  return (
    <>
      {/* <Box>
        <img src={logo} alt="react-logo" className="react-logo" />
      </Box> */}
      <Box>
        <Suspense fallback={<Spinner size="xl" />}>
          <MainForm />
        </Suspense>
      </Box>
    </>
  )
})
Index.displayName = 'Index'

export default Index
