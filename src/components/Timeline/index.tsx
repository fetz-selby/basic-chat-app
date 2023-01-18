import { useMemo } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import ChatMessage from './ChatMessage';
import { Message } from '../../api/types';
import { useChatTimeline } from '../../hooks/useChatTimeline';
import { Error } from '../Error';

const Timeline = () => {
  const { data, author, hasMore, next, hasError } = useChatTimeline();

  const renderChatMessages = useMemo(
    () =>
      data.map((message: Message) => (
        <ChatMessage key={message._id} message={message} self={author} />
      )),
    [data, author]
  );

  if (hasError) {
    return <Error message="Something went wrong, please try again later" />;
  }

  return (
    <InfiniteScroll
      dataLength={data.length}
      next={next}
      style={{
        display: 'flex',
        flexDirection: 'column',
        padding: '10px 0',
      }}
      inverse={false}
      hasMore={hasMore}
      loader={<h4>Loading...</h4>}
      scrollableTarget="scrollableDiv"
    >
      {renderChatMessages}
    </InfiniteScroll>
  );
};

export default Timeline;
