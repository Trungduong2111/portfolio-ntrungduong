// "use client";

// import useSWR from "swr";
// import axios from "axios";
// import { v4 as uuidv4 } from "uuid";
// import { useEffect, useState } from "react";
// import { useSession } from "next-auth/react";

// import ChatAuth from "./ChatAuth";
// import ChatInput from "./ChatInput";
// import ChatList from "./ChatList";
// import ChatItemSkeleton from "./ChatItemSkeleton";

// import { MessageProps } from "@/common/types/chat";
// import { fetcher } from "@/services/fetcher";
// import { createClient } from "@/common/utils/client";
// import useNotif from "@/hooks/useNotif";

// export const ChatRoom = ({ isWidget = false }: { isWidget?: boolean }) => {
//   const { data, isLoading } = useSWR("/api/chat", fetcher);

//   const [messages, setMessages] = useState<MessageProps[]>([]);
//   const [isReply, setIsReply] = useState({ is_reply: false, name: "" });

//   const { data: session } = useSession();

//   const supabase = createClient();

//   const notif = useNotif();

//   const handleClickReply = (name: string) => {
//     if (!session?.user) return notif("Please sign in to reply");
//     setIsReply({ is_reply: true, name });
//   };

//   const handleCancelReply = () => {
//     setIsReply({ is_reply: false, name: "" });
//   };

//   const handleSendMessage = async (message: string) => {
//     const messageId = uuidv4();
//     const newMessageData = {
//       id: messageId,
//       name: session?.user?.name,
//       email: session?.user?.email,
//       image: session?.user?.image,
//       message,
//       is_reply: isReply.is_reply,
//       reply_to: isReply.name,
//       is_show: true,
//       created_at: new Date().toISOString(),
//     };
//     try {
//       await axios.post("/api/chat", newMessageData);
//       notif("Successfully to send message");
//     } catch (error) {
//       console.error("Error:", error);
//       notif("Failed to send message");
//     }
//   };

//   const handleDeleteMessage = async (id: string) => {
//     try {
//       await axios.delete(`/api/chat/${id}`);
//       notif("Successfully to delete message");
//     } catch (error) {
//       notif("Failed to delete message");
//     }
//   };

//   useEffect(() => {
//     if (data) setMessages(data);
//   }, [data]);

//   useEffect(() => {
//     const channel = supabase
//       .channel("realtime chat")
//       .on(
//         "postgres_changes",
//         {
//           event: "INSERT",
//           schema: "public",
//           table: "messages",
//         },
//         (payload) => {
//           setMessages((prevMessages) => [
//             ...prevMessages,
//             payload.new as MessageProps,
//           ]);
//         },
//       )
//       .on(
//         "postgres_changes",
//         {
//           event: "DELETE",
//           schema: "public",
//           table: "messages",
//         },
//         (payload) => {
//           setMessages((prevMessages) =>
//             prevMessages.filter((msg) => msg.id !== payload.old.id),
//           );
//         },
//       )
//       .subscribe();

//     return () => {
//       supabase.removeChannel(channel);
//     };
//   }, [supabase]);

//   return (
//     <>
//       {isLoading ? (
//         <ChatItemSkeleton />
//       ) : (
//         <ChatList
//           messages={messages}
//           onDeleteMessage={handleDeleteMessage}
//           onClickReply={handleClickReply}
//           isWidget={isWidget}
//         />
//       )}
//       {session ? (
//         <ChatInput
//           onSendMessage={handleSendMessage}
//           onCancelReply={handleCancelReply}
//           replyName={isReply.name}
//           isWidget={isWidget}
//         />
//       ) : (
//         <ChatAuth isWidget={isWidget} />
//       )}
//     </>
//   );
// };
'use client';

import useSWR from 'swr';
import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';
import { useEffect, useState } from 'react';
import { useSession } from 'next-auth/react';

import ChatAuth from './ChatAuth';
import ChatInput from './ChatInput';
import ChatList from './ChatList';
import ChatItemSkeleton from './ChatItemSkeleton';

import { MessageProps } from '@/common/types/chat';
import { fetcher } from '@/services/fetcher';
import { createClient } from '@/common/utils/client';
import useNotif from '@/hooks/useNotif';

export const ChatRoom = ({ isWidget = false }: { isWidget?: boolean }) => {
  const { data, isLoading, mutate } = useSWR('/api/chat', fetcher, {
    revalidateOnFocus: false, // Tắt revalidate khi focus window
    refreshInterval: 0, // Tắt auto refresh
  });

  const [messages, setMessages] = useState<MessageProps[]>([]);
  const [isReply, setIsReply] = useState({ is_reply: false, name: '' });
  const [isSending, setIsSending] = useState(false);

  const { data: session } = useSession();
  const supabase = createClient();
  const notif = useNotif();

  const handleClickReply = (name: string) => {
    if (!session?.user) return notif('Please sign in to reply');
    setIsReply({ is_reply: true, name });
  };

  const handleCancelReply = () => {
    setIsReply({ is_reply: false, name: '' });
  };

  const handleSendMessage = async (message: string) => {
    if (isSending) return;
    
    setIsSending(true);
    const messageId = uuidv4();
    const newMessageData = {
      id: messageId,
      name: session?.user?.name,
      email: session?.user?.email,
      image: session?.user?.image,
      message,
      is_reply: isReply.is_reply,
      reply_to: isReply.name,
      is_show: true,
      created_at: new Date().toISOString(),
    };

    // ✅ OPTIMISTIC UPDATE: Hiển thị message ngay lập tức
    setMessages(prev => [...prev, newMessageData as MessageProps]);
    setIsReply({ is_reply: false, name: '' });

    try {
      // ✅ Vẫn dùng API route nhưng có optimistic update
      await axios.post('/api/chat', newMessageData);
      notif('Successfully to send message');
      
      // ✅ Force revalidate SWR để sync data mới nhất
      mutate();
    } catch (error) {
      console.error('Error:', error);
      notif('Failed to send message');
      
      // ✅ ROLLBACK: Xóa message nếu gửi thất bại
      setMessages(prev => prev.filter(msg => msg.id !== messageId));
      // ✅ Khôi phục reply state nếu cần
      setIsReply({ is_reply: isReply.is_reply, name: isReply.name });
    } finally {
      setIsSending(false);
    }
  };

  const handleDeleteMessage = async (id: string) => {
    // ✅ OPTIMISTIC UPDATE: Xóa ngay lập tức
    setMessages(prev => prev.filter(msg => msg.id !== id));

    try {
      await axios.delete(`/api/chat/${id}`);
      notif('Successfully to delete message');
      mutate(); // Revalidate data
    } catch (error) {
      notif('Failed to delete message');
      // Có thể thêm rollback nếu cần
      mutate(); // Re-fetch để khôi phục state
    }
  };

  useEffect(() => {
    if (data) setMessages(data);
  }, [data]);

  // ✅ REAL-TIME SUBSCRIPTION cho multi-user sync
  useEffect(() => {
    const channel = supabase
      .channel('realtime chat')
      .on(
        'postgres_changes',
        {
          event: 'INSERT',
          schema: 'public',
          table: 'messages',
        },
        (payload) => {
          console.log('🟢 REAL-TIME INSERT from other user:', payload.new);
          setMessages((prevMessages) => {
            // Tránh trùng lặp với optimistic update
            const exists = prevMessages.some(msg => msg.id === payload.new.id);
            if (exists) return prevMessages;
            return [...prevMessages, payload.new as MessageProps];
          });
        }
      )
      .on(
        'postgres_changes',
        {
          event: 'DELETE',
          schema: 'public',
          table: 'messages',
        },
        (payload) => {
          console.log('🔴 REAL-TIME DELETE from other user:', payload.old);
          setMessages((prevMessages) => 
            prevMessages.filter((msg) => msg.id !== payload.old.id)
          );
        }
      )
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }, [supabase]);

  return (
    <>
      {isLoading ? (
        <ChatItemSkeleton />
      ) : (
        <ChatList
          messages={messages}
          onDeleteMessage={handleDeleteMessage}
          onClickReply={handleClickReply}
          isWidget={isWidget}
        />
      )}
      {session ? (
        <ChatInput
          onSendMessage={handleSendMessage}
          onCancelReply={handleCancelReply}
          replyName={isReply.name}
          isWidget={isWidget}
        />
      ) : (
        <ChatAuth isWidget={isWidget} />
      )}
    </>
  );
};
