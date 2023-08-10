import Image from 'next/image';
import { FunctionComponent, useState } from "react";
import { putJSON } from '../api';
import { useListAndInputStore } from '../stores/ListInputStore';

export type ListItemProps = {
    listItem: IListItem
}

export interface IListItem {
    id: string;
    name: string;
    isComplete: boolean;
}

export const ListItem: FunctionComponent<ListItemProps> = ({ listItem }) => {
    const url = "https://localhost:7193/api/ListItems/" + listItem.id;

    const defaultTextStyle = "px-4"
    const doneTextStyle = defaultTextStyle + " " + "line-through";
    const { setListStatus } = useListAndInputStore();

    const [done, setDone] = useState(listItem.isComplete);
    const [textStyle, setTextStyle] = useState(defaultTextStyle);

    const toggleDone = () => {
        setDone(!done);
        if (done === false) {
            setTextStyle(doneTextStyle);
        }
        else {
            setTextStyle(defaultTextStyle);
        }
        const updatedItem: IListItem = { ...listItem, isComplete: !done };

        putJSON(url, JSON.stringify(updatedItem))
            .then((response) => {
                if (response.ok) {
                    setListStatus("outdated");
                }
            })
    }

    return (
        <div
            onClick={toggleDone}
            className="flex m-4"
        >

            <span>
                {done ?
                    <Image
                        src="/check.svg"
                        alt="check svg"
                        className="dark:invert"
                        width={24}
                        height={24}
                        rel="preload"
                    /> :
                    <Image
                        src="/shoppingCart.svg"
                        alt="Shopping cart"
                        className="dark:invert"
                        width={24}
                        height={24}
                        rel="preload"
                    />
                }
            </span>
            <div className={"flex align-baseline" }>
            <p className={textStyle}> {listItem.name} </p>
            </div>
        </div>
    )
}