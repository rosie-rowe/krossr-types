import { LevelListLevelViewModel } from "./LevelListLevelViewModel";
import { PagedResponse } from "../Pagination/PagedResponse";

export interface LevelListViewModel extends PagedResponse {
    levels: LevelListLevelViewModel[];
}