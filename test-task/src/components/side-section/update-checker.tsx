import refreshIcon from "../../assets/refresh.svg";
import rightChevron from "../../assets/right-chevron.svg";
import loadingSpinner from "../../assets/loading-spinner.svg";
import {useStore} from "../../store/store.tsx";

export const UpdateChecker = () => {
    const {versionData, isLoadingVersion, toggleIsVersionLoading} = useStore();

    const checkUpdates = () => {
        console.log("update checker");
        toggleIsVersionLoading();
        setTimeout(() => {toggleIsVersionLoading()}, 2000)
    }

    const downloadNewVer = () => {
        console.log("download new ver btn clicked");
    }

    const upToDateSec = (
        <>
            <div className="info-text">
                <p>Game is up to date</p>
                <p>You’re rocking the latest version of the game</p>
            </div>
            <button onClick={checkUpdates} className="refresh-btn-text">
                Check again
                <img src={rightChevron} alt="right arrow"/>
            </button>
        </>
    );

    const newVerAvailableSec = (
        <>
            <div className="info-text">
                <p>Game has new update</p>
                <p>Click the button to download the latest version</p>
            </div>
            <button onClick={downloadNewVer} className="refresh-btn-text">
                Download
                <img src={rightChevron} alt="right arrow"/>
            </button>
        </>
    );

    const loadedContainer = (
        <>
            <button onClick={checkUpdates} className="refresh-btn">
                <img src={refreshIcon} alt="updates refresh"/>
            </button>
            <div className="version-num">
                {versionData?.versionNo}
            </div>
            {versionData?.isUpToDate ? upToDateSec : newVerAvailableSec}
        </>
    );

    const loadingContainer = (
        <>
            <img src={loadingSpinner} alt="loading spinner" className="spinner" />
            <button disabled className="refresh-btn-text">
                Checking for updates...
            </button>
        </>
    )

    return (
        <>
            <div className="updater-container">
                {isLoadingVersion ? loadingContainer : loadedContainer}
            </div>
            <div className="settings-section">
                <p className="p-header">Settings</p>
                <ul className="settings-list">
                    <li>
                        <button>
                            <div className="li-icon refresh"></div>
                            <p>Auto-updates</p>
                            <img src={rightChevron} alt="right chevron"/>
                        </button>
                    </li>
                    <li>
                        <button>
                            <div className="li-icon beta"></div>
                            <p>Beta updates</p>
                            <img src={rightChevron} alt="right chevron"/>
                        </button>
                    </li>
                </ul>
            </div>
        </>
    );
}
