import { FormEvent, FunctionComponent, useState } from "react";
import { postJSON } from "../api";
import { useListAndInputStore } from "../stores/ListInputStore";

type newListItem = {
    name: string,
    isComplete: boolean
}


export const ListItemInput: FunctionComponent = () => {
    const url = "https://localhost:7193/api/ListItems";
    const [newItem, setNewItem] = useState<newListItem>();
    const { setListStatus } = useListAndInputStore();
    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault(); // avoid page reload

        postJSON(url, JSON.stringify(newItem))
            .then(data => {
                setNewItem(undefined);
                setListStatus("outdated");
                console.log("Successfully posted: ", data)
            })
    }

    const insertNewListItem = (name: string) => {
        const newListItem: newListItem = {
            name: name,
            isComplete: false
        }

        setNewItem(newListItem);
    }

    return (
        <form onSubmit={handleSubmit}>
            <label>
                <input
                    type="text"
                    name="newItem"
                    onChange={(e) => insertNewListItem(e.target.value)}
                    value={newItem?.name || ""}
                    className="text-black m-4"
                    autoComplete="off"
                    autoFocus
                />
            </label>
            <button type="submit">Submit</button>
        </form>
    )
}