import styled, { css } from 'styled-components';
import palette from '../theme/palette';

import { CardProps } from '../@types/Card';

const Container = styled.article`
  background-color: ${palette.backgroundBase};
  border-radius: ${palette.borderRadius};
  box-shadow: ${palette.boxShadow1};
  overflow: hidden;
  transition: transform 0.2s ease-in-out;

  &:hover {
    transform: translate3d(0, -5px, 0);
  }
`;

const Figure = styled.figure`
  position: relative;
  height: 0;
  padding-bottom: 20%;
  background-color: #000;
`;

const Image = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  opacity: 0.5;
`;

const Header = styled.header`
  padding: 10px;
`;

const gradientOverflow = css`
  &::after {
    content: '';
    position: absolute;
    right: 0;
    bottom: 0;
    width: 50%;
    height: 1.5rem;
    background-image: linear-gradient(
      to right,
      ${palette.backgroundTransparent},
      ${palette.backgroundBase}
    );
    pointer-events: none;
  }
`;

const Title = styled.h2`
  position: relative;
  max-height: 3.75rem;
  margin-bottom: 10px;
  font-size: 1.25rem;
  line-height: 1.5;
  overflow: hidden;
  ${gradientOverflow}
`;

const Description = styled.p`
  position: relative;
  max-height: 4.5rem;
  line-height: 1.5;
  overflow: hidden;
  ${gradientOverflow}
`;

// FIXME: Add tags when tag component is implemented
export default function Card({ title, description, link, image }: CardProps) {
  return (
    <Container>
      {/* FIXME: Use Link component of react-router-dom */}
      <a href={link}>
        <Figure>
          <Image src={image} />
        </Figure>
        <Header>
          <Title>{title}</Title>
          <Description>{description}</Description>
        </Header>
      </a>
    </Container>
  );
}
