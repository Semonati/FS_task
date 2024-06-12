export type Image = {
    id: number;
    url: string;
    previewURL: string;
    largeImageURL: string
}

export interface Input {
    id: number;
    value: string;
}

export type OpeningHoursValues = {
    id: number;
    day: string;
    open: string;
    close: string;
};


export type DayOfWeek = "sunday" | "monday" | "tuesday" | "wednesday" | "thursday" | "friday" | "saturday";