import { RatingViewModel } from "../Rating/RatingModule";

export interface LevelViewModel {
    id?: number;
    layout: string;
    name: string;

    /**
     * At time of writing, all levels are square.
     * The size should be the length of one side,
     * or the square root of the total number of tiles.
     */
    size: number;

    userRating?: RatingViewModel;

    /** Access control */
    canDelete?: boolean;

    /** Access control */
    canBanLayout?: boolean;
}