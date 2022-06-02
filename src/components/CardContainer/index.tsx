import Card from '../Card';
import { CardContainerProps } from './types';
import Container from './styles';

export default function CardContainer({ items }: CardContainerProps) {
  return (
    <Container>
      {items.map(({ title, description, link, image, tags }) => (
        <Card
          key={link}
          title={title}
          description={description}
          link={link}
          image={image}
          tags={tags}
        />
      ))}
    </Container>
  );
}
