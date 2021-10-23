import { useEffect } from "react";
import useStyles from "./style";
import {useImmer} from "use-immer";
import clsx from "clsx";

export interface IActiveTabItems<T = any> {
    id: T,
    component: any,
}

interface IUseActiveTab {
    activeTabId: string,
    tabs: IActiveTabItems[]
}

const ActiveTab = (props: IUseActiveTab) => {
    const styles = useStyles();
        const [loadedTabs, setLoadedTabs] = useImmer<IActiveTabItems[]>([]);
        useEffect(() => {
            const tab = loadedTabs.find((tab) => tab.id === props.activeTabId);
            if (!tab) {
                const tab = props.tabs.find(tab => tab.id === props.activeTabId);
                if (tab) {
                    setLoadedTabs((draft) => {
                        draft.push({
                            id: tab.id,
                            component: {
                                ...tab.component,
                                key: `useActiveTab-${tab.id}`
                            }
                        });
                    });
                }
            }
        }, [props.activeTabId]);
    return (
        <>
            {loadedTabs.map(tab => (
                <div key={`activeTab${tab.id}`} className={clsx(tab.id !== props.activeTabId && styles.dontShow,styles.tab)} >
                    <tab.component/>
                </div>
            ))}
        </>
    )
};

export default ActiveTab;
