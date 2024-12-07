import { useEffect } from "react";

import { useChat } from "@/features/recommend/hooks/useChat";
import { useDeleteCodi } from "@/features/recommend/hooks/useDeleteCodi";
import { ChatContent } from "@/features/recommend/ui/ChatContent";
import { ChatInput } from "@/features/recommend/ui/ChatInput";

import { RecommendedCodiCard } from "@/entities/clothes/ui/RecommendedCodiCard";

export default function RecommendNaturalLanguagePage() {
    const { inputRef, chatHistory, handleSend, isPending } = useChat();
    const { handleDeleteCodi } = useDeleteCodi();

    const formatDate = (dateString: string) => {
        const date = new Date(dateString);
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, "0");
        const day = String(date.getDate()).padStart(2, "0");
        return `${year}. ${month}.${day}`;
    };

    useEffect(() => {
        console.log(isPending);
    }, [isPending]);

    return (
        <div className="flex flex-col h-screen">
            <h1 className="my-4 mt-2 text-xl font-bold">코디 추천</h1>

            <ChatContent.Content>
                <ChatContent.Receive isPending={false} content={"무엇을 도와드릴까요?"} />

                {chatHistory.map((content, index) => {
                    if (typeof content === "string") {
                        return <ChatContent.Send key={index} content={content} />;
                    }

                    const hashTagsArray = content.hashtags.split(",").map((tag) => tag.trim());
                    return (
                        <ChatContent.Receive key={index} isPending={isPending} content="이 코디를 추천해요!">
                            <RecommendedCodiCard
                                imgSrc={content.clothingImages}
                                title={content.name}
                                hashTags={hashTagsArray}
                                createdAt={formatDate(content.createdAt)}
                                description={content.description}
                                onDelete={() => handleDeleteCodi(content.id)}
                            />
                        </ChatContent.Receive>
                    );
                })}
                {isPending && <ChatContent.Receive isPending={isPending} content="" />}
            </ChatContent.Content>

            <ChatInput ref={inputRef} onClick={handleSend} disabled={isPending} />
        </div>
    );
}
