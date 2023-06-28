"use client"
import Image from 'next/image';
import { FunctionComponent, useState } from "react";

// OBS. Sync with server? 
export type ListItemProps = {
    name: string;
    isComplete: boolean;
}

export interface IListItem {
    id: string;
    name: string;
    isComplete: boolean;
}

export const ListItem: FunctionComponent<ListItemProps> = ({ name, isComplete }) => {

    const defaultTextStyle = "px-4"
    const doneTextStyle = defaultTextStyle + " " + "line-through";

    const [done, setDone] = useState(isComplete);
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
            <p className={textStyle}> {name} </p>
        </div>
    )
}