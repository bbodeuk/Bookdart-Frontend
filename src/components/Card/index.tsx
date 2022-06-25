import { Container, Figure, Image, Header, Title, Description } from './styles';
import { Bookmark } from '~/@types/domain';

export default function Card({ title, description, link, image }: Bookmark) {
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
