import { Fragment } from "react";

import { HashTag } from "@/components/display/HashTag";
import { SearchBar } from "@/components/forms/SearchBar";
import { Text } from "@/components/typography/Text";

import * as Styles from "./index.style";
import { useFilter } from "@/entities/filter/hooks/useFilter";

export type FilterParam = { displayName: string; filterName: string };

export interface FilterProps<FilterParams extends Record<string, FilterParam[]> = Record<string, FilterParam[]>> {
    width: SizeProp;
    height?: SizeProp;

    filterParams: FilterParams;
}

export const Filter = ({ width, height, filterParams }: FilterProps) => {
    const { searchParams, handleFilter } = useFilter();

    return (
        <Styles.Wrapper width={width} height={height}>
            <SearchBar width="100%" height="48px" placeholder="검색" />
            {Object.entries(filterParams).map(([filterKey, filterValues], index) => {
                return (
                    <Fragment key={index}>
                        <Styles.FilterKey>
                            <Text size="s" weight={600} color="darkgray">
                                {filterKey}
                            </Text>
                        </Styles.FilterKey>
                        <Styles.FilterItemContainer>
                            {filterValues.map(({ displayName, filterName }, index) => {
                                return (
                                    <HashTag
                                        key={index}
                                        active={!searchParams.get("filter")?.split(",").includes(filterName)}
                                        onClick={() => handleFilter({ filterValue: filterName })}
                                    >
                                        {displayName}
                                    </HashTag>
                                );
                            })}
                        </Styles.FilterItemContainer>
                    </Fragment>
                );
            })}
        </Styles.Wrapper>
    );
};
