import styled, { css } from 'styled-components';
import { Title as Heading } from '../Heading/styles';

export const Container = styled.div`
  ${({ theme }) => css`
    display: grid;
    grid-template-columns: 1fr 2fr;
    align-items: center; // alinha 'os filhos' no eixo Y
    gap: ${theme.spacings.large};

    @media ${theme.media.lteMedium} {
      grid-template-columns: 1fr;
      text-align: center;
    }

    & ${Heading} {
      margin-bottom: ${theme.spacings.xlarge};
    }
  `};
`;

export const TextContainer = styled.div`
  ${({ theme }) => css`
    @media ${theme.media.lteMedium} {
      margin-bottom: ${theme.spacings.large};
    }
  `};
`;

export const ImageContainer = styled.div``;

export const Image = styled.img`
  max-width: 100%;
`;
