import { ComponentType, ReactNode } from "react";

interface WithLoadingProps{
    isLoading: boolean;
    loadingFallback?: ReactNode
}

export function withLoading<P extends object>(
    WrappedComponent: ComponentType<P>,
    defaultFallback: ReactNode = <>Загрузка...</>
){
    return function WithLoadingComponent(props: P & WithLoadingProps) {
        const {isLoading, loadingFallback = defaultFallback, ...rest} = props;
        if(isLoading){
            return <>{loadingFallback}</>
        }
        return <WrappedComponent {...(rest as P)}/>
    }
}