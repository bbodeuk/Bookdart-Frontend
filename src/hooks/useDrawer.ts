import useDrawerStore from '~/store/useDrawerStore';

export default function useDrawer() {
  const { setOpen } = useDrawerStore();

  const onOpen = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  return {
    onOpen,
    onClose,
  };
}
