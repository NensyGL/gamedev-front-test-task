import '../../styles/side-section.scss';
import refreshIcon from '../../assets/refresh.svg';
import closeIcon from '../../assets/close-nav.svg';
import {UpdateChecker} from "./update-checker.tsx";
import {useStore} from "../../store/store.tsx";

export const SideSection = () => {
    const { isSideSectionOpen, closeSideSection} = useStore();

    const closeSide = () => {
        closeSideSection();
    }

    return isSideSectionOpen && (
        <>
            <div className="side-container">
                <div className="header f-row-nowrap">
                    <button>
                        <img src={refreshIcon} alt="refresh"/>
                    </button>
                    <div className="name">Game Updates</div>
                    <button onClick={closeSide}>
                        <img src={closeIcon} alt="close side section"/>
                    </button>
                </div>
                <div className="main">
                    <UpdateChecker></UpdateChecker>

                </div>
            </div>
        </>
    )
}
