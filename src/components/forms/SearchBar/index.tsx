import { forwardRef } from "react";

import { SearchBarWrapper, SearchBarContainer, SearchBtn } from "@/components/forms/SearchBar/index.style";

import SearchIcon from "@/assets/common/SearchIcon.png";

export interface SearchBarProps {
    width?: SizeProp;
    height?: SizeProp;
}

export const SearchBar = forwardRef<HTMLInputElement, SearchBarProps>((props, ref) => {
    return (
        <SearchBarWrapper width={props.width} height={props.height}>
            <SearchBarContainer ref={ref} height={props.height} placeholder="검색"></SearchBarContainer>
            <SearchBtn height={props.height}>
                <img src={SearchIcon} alt="search" />
            </SearchBtn>
        </SearchBarWrapper>
    );
});
