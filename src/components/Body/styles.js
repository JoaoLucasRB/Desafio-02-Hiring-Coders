import styled from 'styled-components';

export const Container = styled.main`
  max-width: 1920px;
  margin: 0 auto;
  height: calc(100vh - 5rem);
  padding: 2.5rem 2rem;

  display: flex;
  align-items: flex-start;
  justify-content: space-between;

  div {
    margin-right: 3rem;
  }
`

export const Hero = styled.section`
  color: var(--text-primary);
  max-width: 560px;

  > span {
    font-size: 1.5rem;
    font-weight: bold;
  }

  h1 {
    font-size: 4.5rem;
    line-height: 4.5rem;
    font-weight: 900;
    margin-top: 2.5rem;

    span {
      color: var(--text-secondary);
    }
  }

  p {
    font-size: 1.5rem;
    line-height: 2.25rem;
    margin-top: 1.5rem;

    span {
      color: var(--text-secondary);
      font-weight: bold;
    }
  }


  @media (max-width: 1023px) {
    margin-bottom: 5rem;
  }
`