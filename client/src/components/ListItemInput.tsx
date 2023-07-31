import { Dispatch, FormEvent, FunctionComponent, SetStateAction, useRef, useState } from "react";
import { ListItemProps } from "./ListItem";

type ListItemInputProps = {
    forceUpdateCallback: Dispatch<SetStateAction<boolean>>
}

export const ListItemInput: FunctionComponent<ListItemInputProps> = ({ forceUpdateCallback }) => {
    const [newItem, setNewItem] = useState<ListItemProps>();

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
        forceUpdateCallback(true);

    }

    const insertNewListItem = (name: string) => {
        const newListItem: ListItemProps = {
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