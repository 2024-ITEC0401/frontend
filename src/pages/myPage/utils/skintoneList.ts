export const skintoneList = ["쿨톤", "웜톤"] as const;

export type SkinToneOption = (typeof skintoneList)[number];
