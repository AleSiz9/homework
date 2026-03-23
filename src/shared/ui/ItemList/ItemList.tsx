import { Fragment, type ReactNode } from "react";

interface ItemListProps<T> {
    items: T[];
    getKey: (item: T) => string | number;
    renderItem: (item: T, index: number) => ReactNode;
    isLoading?: boolean;
    className?: string;
}

export const ItemList = <T,>({
    items,
    getKey,
    renderItem,
    isLoading = false,
    className ='',
}: ItemListProps<T>) => {
    if(isLoading) {
        return <div>Загрузка</div>
    }

    return(
        <div className={className}>
            {items.map((item, index) => (
                <Fragment key={getKey(item)}>
                    {renderItem(item, index)}
                </Fragment>
            ))}
        </div>
    )
}