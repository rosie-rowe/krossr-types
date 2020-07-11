import { LevelViewModel } from "../Level/LevelViewModel";
import { UserViewModel } from "../User/UserModule";

export interface LevelListLevelViewModel extends LevelViewModel {
    avgRating: string;
    createdAt: string;
    user: UserViewModel;

    /** Formatted for display */
    prettySize: string;
}
