import { Dispatch, FunctionComponent, SetStateAction, useEffect, useState } from "react";
import { IListItem, ListItem } from "./ListItem";

type ListProps = {
    forceUpdate: boolean,
    setForceUpdate: Dispatch<SetStateAction<boolean>>
}
export const List: FunctionComponent<ListProps> = ({ forceUpdate, setForceUpdate }) => {
    const [items, setItems] = useState<Array<IListItem>>([])

    const updateList = fetch("https://localhost:7193/api/ListItems", {
        method: "GET",
    })
        .then((response) => { return response.json() })
        .then((data) => setItems(data))

    useEffect(() => {
        updateList
    }, [])

    if (forceUpdate) {
        updateList;
        setForceUpdate(false);
    }
    return (<>
        {
            items.map((current: IListItem) => { return (<ListItem key={current.id} name={current.name} isComplete={current.isComplete} />) })
        }
    </>)
}