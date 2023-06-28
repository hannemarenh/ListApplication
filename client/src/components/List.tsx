"use client"
import { FunctionComponent, useEffect, useState } from "react";
import { IListItem, ListItem } from "./ListItem";

export const List: FunctionComponent = () => {
    const [items, setItems] = useState<Array<IListItem>>([])

    useEffect(() => {
        fetch("https://localhost:7193/api/ListItems", {
            method: "GET",
        })
            .then((response) => { return response.json() })
            .then((data) => setItems(data))
    }, [])

    return (<>
        {
            items.map((current: IListItem) => { return (<ListItem key={current.id} name={current.name} isComplete={current.isComplete} />) })
        }
    </>)
}