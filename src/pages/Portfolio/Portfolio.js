import React, { useCallback, useEffect, useMemo, useState } from 'react'

import PortfolioMobile from './PortfolioMobile'
import PortfolioDesktop from './PortfolioDesktop'

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

  return <>{isMobileScreen ? <PortfolioMobile /> : <PortfolioDesktop />}</>
}
