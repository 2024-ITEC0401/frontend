export const ageList = ["10대", "20대", "30대", "40대", "50대 이상"] as const;

export type AgeOption = (typeof ageList)[number];
