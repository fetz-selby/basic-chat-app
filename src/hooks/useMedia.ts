import useMediaQuery from '@mui/material/useMediaQuery';

const useMedia = () => {
  const smallDevice = useMediaQuery('(max-width: 992px)');
  const desktop = useMediaQuery('(min-width: 992px)');
  const largeDesktop = useMediaQuery('(min-width: 1200px)');

  return {
    smallDevice: smallDevice,
    desktop,
    largeDesktop,
  };
};

export { useMedia };
