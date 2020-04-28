import styled from 'styled-components'
import media from 'styled-media-query'

export const LayoutWrapper = styled.section`
  display: flex;

  ${media.lessThan('large')`
    flex-direction: column;
  `}
`

export const LayoutMain = styled.section`
  background: var(--background);
  min-height: 100vh;
  padding: 0 3.75rem 0 20rem;
  width: 100%;

  ${media.lessThan('large')`
    padding: 5rem 3.75rem 0 0;
  `}

  body#grid & {
    grid-template-areas:
      "posts"
      "pagination";
  }
`