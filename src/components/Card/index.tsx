import { CardProps } from './types';
import { Container, Figure, Image, Header, Title, Description } from './styles';

// FIXME: Add tags when tag component is implemented
export default function Card({ title, description, link, image }: CardProps) {
  return (
    <Container>
      <a href={link} target="_blank" rel="noopener noreferrer">
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
