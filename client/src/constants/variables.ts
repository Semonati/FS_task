import { DayOfWeek } from "@/types/types";

export const dayOrder: { [key in DayOfWeek]: number } = {
    sunday: 0,
    monday: 1,
    tuesday: 2,
    wednesday: 3,
    thursday: 4,
    friday: 5,
    saturday: 6,
};
