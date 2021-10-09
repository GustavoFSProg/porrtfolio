import { Link, GoBackIcon } from './style'

export const GoBackLink = () => (
  <Link to="/">
    <GoBackIcon src="/images/backIcon.svg" alt="go back">
      <svg
        width="5rem"
        height="5rem"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#fff"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="feather feather-chevron-left"
      >
        <polyline points="15 18 9 12 15 6"></polyline>
      </svg>
    </GoBackIcon>
  </Link>
)
