import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const PostCardContainer = styled(Link)`
  padding: 2rem;
  background: ${({ theme }) => theme.colors.base.post};
  border-radius: 10px;

  p {
    font-size: ${({ theme }) => theme.fontSize.lg};
    text-overflow: ellipsis;
    color: ${({ theme }) => theme.colors.base.text};
  }
`
export const TitleContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1.25rem;

  h3 {
    font-size: ${({ theme }) => theme.fontSize.xl};
    color: ${({ theme }) => theme.colors.base.title};
    line-height: 160%; 
    max-width: 283px;
  }

  span {
    font-size: ${({ theme }) => theme.fontSize.regular};
    color: ${({ theme }) => theme.colors.base.span};
  }
`