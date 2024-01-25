import styled from 'styled-components';

export const PostContainer = styled.div`
  max-width: 1120px;
  margin-inline: auto;
`;

export const PostBody = styled.div`
  padding: 2.5rem 2rem;
  color: ${({ theme }) => theme.colors.base.text};
  font-size: ${({ theme }) => theme.fontSize.md};
  
  p {
    line-height: 160%;

    &:not(:last-child) {
      margin-bottom: 1.5rem;
    }
  }

  h1, h2, h3, h4, h5, h6 {
    color: ${({ theme }) => theme.colors.primary};
    text-decoration: underline;
    font-weight: normal;
  }
  
  code {
    background-color: ${({ theme }) => theme.colors.base.post};
    margin-top: 1.5rem;
    padding: 1rem;
    display: block;
    white-space: pre-wrap;
  }
`;