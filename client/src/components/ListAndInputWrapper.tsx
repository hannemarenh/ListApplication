"use client"
import { FunctionComponent, useState } from "react";
import { List } from "./List";
import { ListItemInput } from "./ListItemInput";


export const ListAndInputWrapper: FunctionComponent = () => {
    // Check if this could be done more elegant.
    const [updateList, setUpdateList] = useState(false);

    return (
        <>
            <ListItemInput forceUpdateCallback={setUpdateList} />
            <List forceUpdate={updateList} setForceUpdate={setUpdateList} />

        </>)
}