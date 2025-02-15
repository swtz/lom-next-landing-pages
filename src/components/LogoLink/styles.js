import styled, { css } from 'styled-components';

export const Container = styled.span`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    text-decoration: none;
    color: inherit;
    cursor: pointer;

    > img {
      max-height: 3rem;
    }
  `};
`;
