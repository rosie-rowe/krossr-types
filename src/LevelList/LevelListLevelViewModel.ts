import { Editable } from "../Editable/Editable";
import { LevelViewModel } from "../Level/LevelViewModel";
import { UserViewModel } from "../User/UserModule";

export interface LevelListLevelViewModel extends LevelViewModel, Editable {
    avgRating: string;
    completed: boolean;
    createdAt: string;
    user: UserViewModel;

    /** Formatted for display */
    prettySize: string;
}
