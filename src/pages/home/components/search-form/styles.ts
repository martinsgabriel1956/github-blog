import styled from 'styled-components'

export const SearchFormContainer = styled.form`
  & > input {
    width: 100%;
    padding: 0.75rem 1rem;
    border-radius: 6px;
    background: ${({ theme }) => theme.colors.base.input};
    border: 1px solid ${({ theme }) => theme.colors.base.border};
    color: ${({ theme }) => theme.colors.base.label};
    font-size: ${({ theme }) => theme.fontSize.md};

    &::placeholder {
      color: ${({ theme }) => theme.colors.base.label};
    }
  }

  margin-bottom: 3rem;
`;