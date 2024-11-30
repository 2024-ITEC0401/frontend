import { useEffect, useState } from "react";

import { seasons } from "@/entities/clothes/config/season";

import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/shared/ui/select";

export interface SeasonSelectorProps {
    placeholder?: string;
    defaultValue?: string;
    onChange?: (value: string) => void;
}

export const SeasonSelector = ({ defaultValue, placeholder, onChange }: SeasonSelectorProps) => {
    const [season, setSeason] = useState<string>(defaultValue as string);

    useEffect(() => {
        onChange && onChange(season);
    }, [onChange, season]);

    return (
        <Select onValueChange={(value) => setSeason(value)} value={season}>
            <SelectTrigger className="w-full">
                <SelectValue placeholder={placeholder || "계절"} />
            </SelectTrigger>
            <SelectContent>
                {seasons.map((season) => {
                    return (
                        <SelectItem key={season.seasonValue} value={season.seasonValue}>
                            {season.seasonLabel}
                        </SelectItem>
                    );
                })}
            </SelectContent>
        </Select>
    );
};
