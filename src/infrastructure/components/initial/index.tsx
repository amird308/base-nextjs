import {FC, useEffect, useState} from "react";
import {useRouter} from "next/dist/client/router";
import storageLocal from "@/helper/storage-local";
import STORAGE_LOCAL from "@/constants/storage-local";
import Services from "@/services/services";
import {LINKS} from "@/constants/links";
import Icon from "@/components/icon";
import {SnackbarProvider} from "notistack";
import useToastStyle from "@/styles/hooks/toast";
import {SnackbarUtilsConfigurator} from "@/helper/toast";
import clsx from "clsx";

const Initial: FC = (props) => {
    //pipeline
    const [isLoading, setIsLoading] = useState(false);
    const router = useRouter();
    useEffect(() => {
        setIsLoading(false);
        if (router.pathname.includes("panel")) {
            setIsLoading(true);
            const token = storageLocal.get(STORAGE_LOCAL.TOKEN);
            if (token) {
                Services.checkToken().then(res => {
                    if (!res) {
                        router.replace(LINKS.LOGIN);
                    } else {
                        setIsLoading(false);
                    }
                }).catch(_err => {
                    router.replace(LINKS.LOGIN);
                });
            } else {
                router?.replace(LINKS.LOGIN);
            }
        }
    }, [router.pathname]);

    const toastStyles = useToastStyle();
    return (
        <>
            <SnackbarProvider
                iconVariant={{
                    success: <Icon ltrIcon={"icon-tick-circle"}/>
                }} classes={{
                variantSuccess: clsx(toastStyles.base, toastStyles.success),
                variantInfo: clsx(toastStyles.base, toastStyles.info),
                variantWarning: clsx(toastStyles.base, toastStyles.warning),
                variantError: clsx(toastStyles.base, toastStyles.error),
            }} maxSnack={3}>
                <SnackbarUtilsConfigurator/>
                {!isLoading &&
                props.children
                }
            </SnackbarProvider>
        </>
    );
};
export default Initial;
