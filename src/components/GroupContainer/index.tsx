import { Link } from 'react-router-dom';
import Icon from '~/components/Icon';
import { ConfigButton, Container, Title } from './styles';
import { Group } from '~/@types/domain';

export default function GroupContainer({ groupId, name }: Group) {
  return (
    <Container>
      <Link to={`/bookmarks/${groupId}`}>
        <Title>{name}</Title>
      </Link>
      {/* FIXME: Open group config modal */}
      <ConfigButton type="button">
        <Icon name="settings" />
      </ConfigButton>
    </Container>
  );
}
