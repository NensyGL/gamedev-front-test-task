import {userData, versionData} from "../placeholder-data/placeholder-data.ts";
import {UserDataModel, VersionModel} from "../placeholder-data/dummy-data-models.model.ts";

export async function getUserData(): Promise<UserDataModel> {
    return new Promise((resolve) =>
        setTimeout(
            () => resolve({ userData }),
            2000
        )
    );
}

export async function getVersionData(): Promise<VersionModel> {
    return new Promise((resolve) =>
        setTimeout(
            () => resolve({ versionData }),
            2000
        )
    );
}

