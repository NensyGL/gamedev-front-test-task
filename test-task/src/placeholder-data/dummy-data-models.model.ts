export type UserDataModel = {
    username: string;
    isOnline: boolean;
    walletBalance: string;
}

export type VersionModel = {
    versionNo: string;
    isUpToDate: boolean;
}

export type AutoUpdatesSettingsModel = {
    downloadingUpdates: boolean;
    installingUpdates: boolean;
    responseToTnF: boolean
}

export type BetaUpdatesSettingsModel = {
    betaUpdatesMode: number
}

export class InitialStateModel {
    userData?: UserDataModel;
    versionData?: VersionModel;
    isLoadingVersion?: boolean;
    autoUpdatesSettings?: AutoUpdatesSettingsModel;
    betaUpdatesSettings?: BetaUpdatesSettingsModel;
    isSideSectionOpen?: boolean;
}

export enum BetaStatusModel {
    off,
    onlyDownload,
    downloadAndInstall
}
