import {
    AutoUpdatesSettingsModel, BetaUpdatesSettingsModel,
    UserDataModel,
    VersionModel
} from "../placeholder-data/dummy-data-models.model.ts";
import { create } from 'zustand'
import {autoUpdatesSettings, betaUpdatesSettings, userData, versionData} from "../placeholder-data/placeholder-data.ts";
import {getUserData, getVersionData} from "./requests.tsx";

type Store = {
    userData?: UserDataModel;
    versionData?: VersionModel;
    isLoadingVersion?: boolean;
    autoUpdatesSettings?: AutoUpdatesSettingsModel;
    betaUpdatesSettings?: BetaUpdatesSettingsModel;
    isSideSectionOpen?: boolean;
    toggleIsVersionLoading: () => void;
    setAutoUpdatesSettings: (autoUpdatesSettings: AutoUpdatesSettingsModel) => void;
    setBetaUpdatesSettings: (betaUpdatesSettings: BetaUpdatesSettingsModel) => void;
    openSideSection: () => void;
    closeSideSection: () => void;
}

export const useStore = create<Store>()((set) => ({
    userData: userData,
    versionData: versionData,
    isLoadingVersion: false,
    autoUpdatesSettings: autoUpdatesSettings,
    betaUpdatesSettings: betaUpdatesSettings,
    isSideSectionOpen: true,
    toggleIsVersionLoading: () => set(state => ({...state, isLoadingVersion: !state.isLoadingVersion})),
    setAutoUpdatesSettings: (settings) => set(() => ({ autoUpdatesSettings: settings })),
    setBetaUpdatesSettings: (settings) => set(() => ({ betaUpdatesSettings: settings })),
    openSideSection: () => set(() => ({ isSideSectionOpen: true})),
    closeSideSection: () => set(() => ({ isSideSectionOpen: false})),
}));

