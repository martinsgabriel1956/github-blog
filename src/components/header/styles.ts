import styled from 'styled-components'

import bannerImg from "../../assets/banner.svg"

export const HeaderContainer = styled.header`
  background-image: url(${bannerImg});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  width: 100%;
  height: 18.5rem;
`;

export const HeaderContent = styled.div`
  width: 100%;
  max-width: 1120px;

  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    padding-top: 4rem;
  }
`;