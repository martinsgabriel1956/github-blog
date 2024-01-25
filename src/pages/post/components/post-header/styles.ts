import styled from 'styled-components'

export const PostHeaderContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.base.profile};
  border-radius: 10px;
  box-shadow: 0px 2px 28px 0px rgba(0, 0, 0, 0.20);
  margin-top: -5.3125rem;

  padding: 2rem;
`;

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  a {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    color: ${({ theme }) => theme.colors.primary};
    font-size: ${({ theme }) => theme.fontSize.sm};
    font-weight: ${({ theme }) => theme.fontWeight.bold};
    text-transform: uppercase;

    &:hover {
      text-decoration: underline;
    }
  }
`;

export const PostInfo = styled.div`
  h3 {
    color: ${({ theme }) => theme.colors.base.title};
    font-size: ${({ theme }) => theme.fontSize['2xl']};
    padding-top: 1.25rem;
    padding-bottom: 0.5rem;
  }
`;

export const SocialLinks = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;

  span {
    font-size: 1rem;
    color: ${({ theme }) => theme.colors.base.label};

    display: flex;
    align-items: center;
    gap: 0.5rem;
  }
`;