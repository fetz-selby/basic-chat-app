import { Box, Typography } from '@mui/material';
import { Message } from '../../api/types';
import moment from 'moment';

interface ChatMessageProps {
  message: Message;
  self: string;
  isSmallScreen: boolean;
}

const otherChartMessageSX = (isSmallScreen: boolean) => ({
  position: 'relative',
  display: 'flex',
  flexDirection: 'column',
  borderRadius: '10px',
  border: '1px solid #eaeaea',
  minWidth: '200px',
  maxWidth: isSmallScreen ? '240px' : '80%',
  padding: '16px',
  marginTop: '16px',
  backgroundColor: '#fefefe',
});

const selfChartMessageSX = {
  backgroundColor: '#ffee58',
};

const labelSX = { color: '#aeaeae' };

const getStringOrNumberBack = (text: unknown) => {
  if (typeof text === 'string' || typeof text === 'number') {
    return text;
  }

  return '';
};

const getDateString = (timestamp: number) => {
  return moment(timestamp).format('DD MMM YYYY HH:mm');
};

const ChatMessage = ({ message, self, isSmallScreen }: ChatMessageProps) => {
  const { author, message: _message, timestamp } = message;

  const isSelf = self === author;

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: isSelf ? 'flex-end' : 'flex-start',
      }}
    >
      <Box
        sx={
          isSelf
            ? { ...otherChartMessageSX(isSmallScreen), ...selfChartMessageSX }
            : otherChartMessageSX(isSmallScreen)
        }
      >
        {!isSelf && (
          <Typography sx={labelSX}>{getStringOrNumberBack(author)}</Typography>
        )}
        <Typography>{getStringOrNumberBack(_message)}</Typography>
        <Typography sx={labelSX}>{getDateString(timestamp)}</Typography>
      </Box>
    </Box>
  );
};

export default ChatMessage;
