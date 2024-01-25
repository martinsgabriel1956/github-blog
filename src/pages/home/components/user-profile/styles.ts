import styled from 'styled-components'

export const UserProfileContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.base.profile};
  border-radius: 10px;
  box-shadow: 0px 2px 28px 0px rgba(0, 0, 0, 0.20);
  margin-top: -5.3125rem;

  padding: 2rem;

  display: flex;
  gap: 2rem;

  a {
    color: ${({ theme }) => theme.colors.primary};
    font-size: ${({ theme }) => theme.fontSize.sm};
    font-weight: ${({ theme }) => theme.fontWeight.bold};

    display: flex;
    align-items: center;
    gap: 0.5rem;

    &:hover {
      text-decoration: underline;
    }
  }
`;

export const UserInfo = styled.div`
  h3 {
    color: ${({ theme }) => theme.colors.base.title};
    font-size: ${({ theme }) => theme.fontSize['2xl']};
    padding-block: 0.5rem;
  }

  p {
    font-size: 1rem;
    color: ${({ theme }) => theme.colors.base.text};
    font-style: normal;
    margin-bottom: 1.5rem;
  }
`;

export const SocialLinks = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;

  span {
    font-size: 1rem;
    color: ${({ theme }) => theme.colors.base.subtitle};

    display: flex;
    align-items: center;
    gap: 0.5rem;

    svg {
      color: ${({ theme }) => theme.colors.base.label};
    }
  }
`;