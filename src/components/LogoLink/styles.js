import styled, { css } from 'styled-components';

export const Container = styled.a`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    text-decoration: none;
    color: inherit;
    text-decoration: none;

    > img {
      max-height: 3rem;
    }
  `};
`;
