import { FunctionComponent, useState } from "react";
import { get } from "../api";
import { useListAndInputStore } from "../stores/ListInputStore";
import { IListItem, ListItem } from "./ListItem";

export const List: FunctionComponent = () => {
    const url = "https://localhost:7193/api/ListItems";
    const [items, setItems] = useState<Array<IListItem>>([])

    const { listStatus, setListStatus } = useListAndInputStore();

    if (listStatus === "outdated") {
        get<IListItem[]>(url).then((res: IListItem[]) =>
            setItems(res)
        );
        setListStatus("updated")
    }
    return (<>
        {
            items.map((current: IListItem) => { return (<ListItem key={current.id} listItem={current} />) })
        }
    </>)
}
