import { Card } from "@/shared/ui/card";
import {
    ContextMenu,
    ContextMenuContent,
    ContextMenuItem,
    ContextMenuSeparator,
    ContextMenuTrigger,
} from "@/shared/ui/context-menu";

export interface ClothCardProps {
    imgSrc?: string;
    title: string;
    description: string;

    onDelete?: () => void;
    onEdit?: () => void;
    onFindMatchingOutfit?: () => void;
}

export const ClothCard = ({ imgSrc, title, description, onDelete, onEdit, onFindMatchingOutfit }: ClothCardProps) => {
    return (
        <ContextMenu>
            <ContextMenuTrigger className="w-fit h-fit">
                <Card className="w-[230px] p-4">
                    <img src={imgSrc} alt="" className="bg-black w-full h-[200px] rounded-sm object-cover" />
                    <div className="my-1">
                        <h2 className="text-lg font-bold text-center line-clamp-1">{title}</h2>
                        <p className="text-sm text-center line-clamp-1">{description}</p>
                    </div>
                </Card>
            </ContextMenuTrigger>

            <ContextMenuContent className="w-[180px]">
                <ContextMenuItem inset className="text-destructive" onClick={onDelete}>
                    삭제
                </ContextMenuItem>
                <ContextMenuSeparator />
                <ContextMenuItem inset onClick={onEdit}>
                    옷 정보 수정하기
                </ContextMenuItem>
                <ContextMenuItem inset onClick={onFindMatchingOutfit}>
                    어울리는 코디 찾기
                </ContextMenuItem>
            </ContextMenuContent>
        </ContextMenu>
    );
};
