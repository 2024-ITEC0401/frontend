import { forwardRef } from "react";

import { SearchBarWrapper, SearchBarContainer, SearchBtn } from "@/components/forms/SearchBar/index.style";

import SearchIcon from "@/assets/common/SearchIcon.png";

export interface SearchBarProps extends React.ComponentProps<"input"> {
    width?: SizeProp;
    height?: SizeProp;
}

export const SearchBar = forwardRef<HTMLInputElement, SearchBarProps>(({ width, height, ...rest }, ref) => {
    return (
        <SearchBarWrapper width={width} height={height}>
            <SearchBarContainer ref={ref} height={height} {...rest}></SearchBarContainer>
            <SearchBtn height={height}>
                <img src={SearchIcon} alt="search" />
            </SearchBtn>
        </SearchBarWrapper>
    );
});
