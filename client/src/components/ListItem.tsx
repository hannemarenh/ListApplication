"use client"
import Image from 'next/image';
import { FunctionComponent, useState } from "react";

// OBS. Sync with server? 
export type ListItemProps = {
    listItem: IListItem
}

export interface IListItem {
    id: string;
    name: string;
    isComplete: boolean;
}

export const ListItem: FunctionComponent<ListItemProps> = ({ listItem }) => {

    const defaultTextStyle = "px-4"
    const doneTextStyle = defaultTextStyle + " " + "line-through";

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

        // Update on server
        fetch("https://localhost:7193/api/ListItems", {
            method: "PUT",
            body: JSON.stringify(listItem.id),
            headers: {'Content-Type': 'application/json'}
        })
            .then((response) => { return response.json() })
            .then((data) => { console.log(data) })
    }

    return (
        <div onClick={toggleDone} className="flex m-4">
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
            <p className={textStyle}> {listItem.name} </p>
        </div>
    )
}