export const AutoUpdates = () => {
    return (
        <>
            <div className="mb-24">
                <div className="settings-switch-container">
                    Downloading updates
                    <label className="switch">
                        <input type="checkbox"/>
                        <span className="slider round"></span>
                    </label>
                </div>
            </div>
            <div className="mb-24">
                <div className="settings-switch-container">
                    Installing updates
                    <label className="switch">
                        <input type="checkbox"/>
                        <span className="slider round"></span>
                    </label>
                </div>
                <p>Automatically install software updates at night after they have been downloaded. A notification will
                    appear before updates are installed. The device must be connected to power and Wi-Fi to update the
                    game
                </p>
            </div>
            <div className="mb-24">
                <div className="settings-switch-container">
                    Response to threats and files
                    <label className="switch">
                        <input type="checkbox"/>
                        <span className="slider round"></span>
                    </label>
                </div>
                <p>
                    Automatically install software updates at night after they have been downloaded. A notification will
                    appear before updates are installed. The device must be connected to power and Wi-Fi to update the
                    game
                </p>
            </div>
        </>
    )
}
