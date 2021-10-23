import {Tabs as MuiTabs, Tab} from "@material-ui/core";
import {FC, ReactElement} from "react";
import useStyles from "./style";
import clsx from "clsx";

interface ITab {
    id?: number,
    value: string,
    label?: string | boolean,
    icon?: ReactElement | any
}

interface ITabsProps {
    tabs: ITab[],
    isOpen?: boolean,
    onChange?: (activeTab: any) => void,
    activeTab?: number | string
}

const TabsVertical: FC<ITabsProps> = (props) => {
    const styles = useStyles();
    const handleChange = (event: object, newValue: any) => {
        if(newValue !== props.activeTab){
            props.onChange?.(newValue);
        }
    };
    return (
        <MuiTabs
            orientation="vertical"
            variant="scrollable"
            value={props?.activeTab}
            onChange={handleChange}
            aria-label="Vertical tabs example"
            classes={{
                indicator: styles.indicator
            }}
        >
            {props.tabs.map((tab, index) => {
                return (
                    <Tab
                        classes={{
                            wrapper: styles.tabWrapper,
                            selected: styles.tabSelected,
                            root: styles.tabRoot,
                            labelIcon: styles.tabIcon,
                        }}
                        key={`vertical-tab-${index}-key`}
                        id={`vertical-tab-${index}`}
                        value={tab.value}
                        icon={tab?.icon}
                        label={
                            <span className={clsx(props.isOpen ? styles.tabTitleActive : styles.tabTitle)}>
                                {tab.label}
                            </span>
                        }
                    />
                )
            })}
        </MuiTabs>
    )
}

export default TabsVertical;