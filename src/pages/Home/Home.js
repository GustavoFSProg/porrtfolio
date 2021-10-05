import React, { useCallback, useEffect, useMemo, useState } from 'react'

import HomeMobile from './HomeMobile'
import HomeDesktop from './HomeDesktop'

export default function Home() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth)

  const isMobileScreen = useMemo(() => windowWidth <= 500, [windowWidth])

  const updateWindowWidth = useCallback(() => {
    setWindowWidth(window.innerWidth)
  }, [])

  useEffect(() => {
    window.addEventListener('resize', updateWindowWidth)
    return () => window.removeEventListener('resize', updateWindowWidth)
  }, [updateWindowWidth])

  return <>{isMobileScreen ? <HomeMobile /> : <HomeDesktop />}</>
}
