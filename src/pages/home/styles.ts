import styled from 'styled-components'

export const HomeContainer = styled.div`
  max-width: 1120px;
  margin-inline: auto;
`

export const PublicationsContainer = styled.div`
  margin-top: 4.5rem;
  margin-bottom: 0.75rem;

  display: flex;
  align-items: center;
  justify-content: space-between;

  span {
    &:first-child {
      color: ${({ theme }) => theme.colors.base.subtitle};
      font-size: ${({ theme }) => theme.fontSize.lg};
      font-weight: ${({ theme }) => theme.fontWeight.bold};
    }

    &:last-child {
      color: ${({ theme }) => theme.colors.base.span};
      font-size: ${({ theme }) => theme.fontSize.regular};
    }
  }
`;

export const PostsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;

  padding-bottom: 1.5rem;
`;