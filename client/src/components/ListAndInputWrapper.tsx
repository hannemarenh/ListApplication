"use client"
import { FunctionComponent } from "react";
import { List } from "./List";
import { ListItemInput } from "./ListItemInput";


export const ListAndInputWrapper: FunctionComponent = () => {
    // Add title for list here. May be we have multiple lists. In that case this is the wrapper :-) 
    return (
        <>
            <ListItemInput />
            <List />
        </>)
}