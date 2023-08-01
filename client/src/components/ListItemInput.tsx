import { Dispatch, FormEvent, FunctionComponent, SetStateAction, useRef, useState } from "react";
import { useListAndInputStore } from "../stores/ListInputStore";

type newListItem = {
    name: string,
    isComplete: boolean
    }


export const ListItemInput: FunctionComponent = () => {
    const [newItem, setNewItem] = useState<newListItem>();
    const { setUpdateList } = useListAndInputStore();
    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault(); // avoid page reload

        fetch("https://localhost:7193/api/ListItems", {
            method: "POST",
            body: JSON.stringify(newItem),
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(response => response.json())
            .then(data => console.log("Successfully posted: ", data))
            .then(() => setNewItem(undefined));
        setUpdateList(true);

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