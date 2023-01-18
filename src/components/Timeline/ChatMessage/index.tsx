import { Typography } from '@mui/material';
import { Stack } from '../../../components/core/Stack';
import { Box } from '../../../components/core/Box';

import { Message } from '../../../api/types';
import moment from 'moment';

interface ChatMessageProps {
  message: Message;
  self: string;
}

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

const ChatMessage = ({ message, self }: ChatMessageProps) => {
  const { author, message: _message, timestamp } = message;

  const isSelf = self === author;

  return (
    <Box className={`flex ${isSelf ? 'justify-end' : 'justify-start'}`}>
      <Stack
        className={`${
          isSelf ? 'bg-[#fff59d]' : ''
        } ${'relative rounded border-solid boder-1 border-[#eaeaea] p-[16px] bg-neutral-50 mt-[16px] min-w-200 md:max-w-[80%] lg:max-w-[80%] sm:max-w-[240px]'}`}
      >
        {!isSelf && (
          <Typography sx={labelSX}>{getStringOrNumberBack(author)}</Typography>
        )}
        <Typography>{getStringOrNumberBack(_message)}</Typography>
        <Typography sx={labelSX}>{getDateString(timestamp)}</Typography>
      </Stack>
    </Box>
  );
};

export default ChatMessage;
