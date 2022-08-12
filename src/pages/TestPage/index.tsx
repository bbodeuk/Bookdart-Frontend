import { useToast } from '~/components/Toast';

export default function TestPage() {
  const toast = useToast();
  const showToast = () => toast.send('Toast created from child component!');

  return (
    <button type="button" onClick={showToast}>
      faijei
    </button>
  );
}
