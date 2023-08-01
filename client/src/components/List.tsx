import { FunctionComponent, useEffect, useState } from "react";
import { useListAndInputStore } from "../stores/ListInputStore";
import { IListItem, ListItem } from "./ListItem";

export const List: FunctionComponent = () => {
    const [items, setItems] = useState<Array<IListItem>>([])

    const { updateList, setUpdateList } = useListAndInputStore();

    useEffect(() => {
        fetch("https://localhost:7193/api/ListItems", {
            method: "GET",
        })
            .then((response) => { return response.json() })
            .then((data) => { setUpdateList(false); setItems(data) })
    }, [updateList])

    return (<>
        {
            items.map((current: IListItem) => { return (<ListItem key={current.id} listItem={current} />) })
        }
    </>)
}