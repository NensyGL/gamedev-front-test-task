import checkMark from "../../assets/check-mark.svg";

export const BETAUpdates = () => {
    const betaSettingsCode: number = 1;

    return (
        <div className="beta-settings-container">
            <p>Download and install</p>
            <ul>
                <li className={`${betaSettingsCode === 1 && "active"}`}>
                    <p>Off</p>
                    {betaSettingsCode === 1 ? <img src={checkMark} alt="checkmark"/> : ""}
                </li>
                <li className={`${betaSettingsCode === 2 && "active"}`}>
                    <p>Only download</p>
                    {betaSettingsCode === 2 ? <img src={checkMark} alt="checkmark"/> : ""}
                </li>
                <li className={`${betaSettingsCode === 3 && "active"}`}>
                    <p>Download and install</p>
                    {betaSettingsCode === 3 ? <img src={checkMark} alt="checkmark"/> : ""}
                </li>
            </ul>
            <p>
                Automatically install software updates at night after they have been downloaded. A notification will
                appear before updates are installed. The device must be connected to power and Wi-Fi to update the
                game
            </p>
        </div>
    );
}
