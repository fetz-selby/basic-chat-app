import { Box, Stack, CssBaseline } from '@mui/material';
import { TypeArea } from '../components/TypeArea';
import Timeline from '../components/Timeline';
import { useMedia } from '../hooks/useMedia';

const timelineContainerSX = (isSmallScreen: boolean) => ({
  display: 'flex',
  height: 'calc(100vh - 75px)',
  overflow: 'auto',
  flexDirection: 'column',
  padding: isSmallScreen ? '0 24px' : '0 150px',
  backgroundImage: `url('body_bg.png')`,
  backgroundRepeat: 'repeat, repeat',
});

const typeAreaContainerSX = (isSmallScreen: boolean) => ({
  display: 'flex',
  width: '100vw',
  position: 'absolute',
  bottom: '0',
  justifyContent: 'center',
  padding: isSmallScreen ? '8px' : '10px 150px',
  backgroundColor: '#1e88e5',
  alignItems: 'center',
});

const ChatLayout = () => {
  const { smallDevice } = useMedia();

  return (
    <Stack sx={{ height: '100vh', width: '100vw' }}>
      <CssBaseline />
      <Box id="scrollableDiv" sx={timelineContainerSX(smallDevice)}>
        <Timeline />
      </Box>
      <Box sx={typeAreaContainerSX(smallDevice)}>
        <TypeArea />
      </Box>
    </Stack>
  );
};

export { ChatLayout };
