import { useChat } from "@/features/recommend/hooks/useChat";
import { ChatContent } from "@/features/recommend/ui/ChatContent";
import { ChatInput } from "@/features/recommend/ui/ChatInput";

export default function RecommendNaturalLanguagePage() {
    const { inputRef, handleSend } = useChat();

    return (
        <div className="flex flex-col h-screen">
            <h1 className="my-4 mt-2 text-xl font-bold">코디 추천</h1>

            <ChatContent.Content>
                <ChatContent.Receive isPending={false} content={"무엇을 도와드릴까요??"} />
                <ChatContent.Send content="코디 추천해주세요" />

                <ChatContent.Receive
                    isPending={true}
                    content={
                        "당신에게 어울리는 코디를 추천해드릴게요! 오늘은 캐주얼한 청바지와 흰 티셔츠를 추천드려요. 여기에 스니커즈를 매치하면 편안하면서도 스타일리시한 룩을 완성할 수 있습니다."
                    }
                />
                <ChatContent.Receive
                    isPending={false}
                    content={
                        "당신에게 어울리는 코디를 추천해드릴게요! 오늘은 캐주얼한 청바지와 흰 티셔츠를 추천드려요. 여기에 스니커즈를 매치하면 편안하면서도 스타일리시한 룩을 완성할 수 있습니다."
                    }
                />
            </ChatContent.Content>

            <ChatInput ref={inputRef} onClick={handleSend} />
        </div>
    );
}
