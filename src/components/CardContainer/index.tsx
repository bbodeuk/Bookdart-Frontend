import Card from '~/components/Card';
import { useDrawerStore } from '~/store';
import Container from './styles';
import { CardContainerProps } from './types';

export default function CardContainer({ items }: CardContainerProps) {
  const { leftDrawerRevealed, rightDrawerRevealed } = useDrawerStore();

  return (
    <Container
      leftDrawerRevealed={leftDrawerRevealed}
      rightDrawerRevealed={rightDrawerRevealed}
    >
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
