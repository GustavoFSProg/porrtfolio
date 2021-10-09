import { GoBackLink } from './GoBackLink'
import { StyledHeader, HTitle } from './style'

export const Header = ({ children }) => {
  const isPortfolio = window.location.pathname === '/portfolio'
  return (
    <StyledHeader>
      <HTitle>{children}</HTitle>

      {isPortfolio && <GoBackLink />}
    </StyledHeader>
  )
}
