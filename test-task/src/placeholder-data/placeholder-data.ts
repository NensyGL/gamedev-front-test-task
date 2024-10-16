import {
    AutoUpdatesSettingsModel,
    BetaUpdatesSettingsModel,
    UserDataModel,
    VersionModel
} from "./dummy-data-models.model.ts";


export const userData: UserDataModel = {
    username: 'nickname',
    isOnline: true,
    walletBalance: '$15,89'
};

export const versionData: VersionModel = {
    versionNo: 'v1.14.15',
    isUpToDate: true
};

export const autoUpdatesSettings: AutoUpdatesSettingsModel = {
    downloadingUpdates: true,
    installingUpdates: false,
    responseToTnF: false
}

export const betaUpdatesSettings: BetaUpdatesSettingsModel = {
    betaUpdatesMode: 0
};
