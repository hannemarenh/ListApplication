"use client"
import { FormEvent, FunctionComponent, useState } from "react";
import { ListItemProps } from "./ListItem";

export const ListItemInput: FunctionComponent = () => {
    const [newItem, setNewItem] = useState<ListItemProps>();

    const handleSubmit =  async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault(); // avoid page reload

        fetch("/api/listElement", {
            method: "POST",
            body: JSON.stringify({ newItem }),
            headers: {
                'Content-Type': 'application/json'
                }
        })
            .then(response => response.json())
            .then(data => console.log("Successfully posted: ",data))

        setNewItem(undefined);
    }

    const insertNewListItem = (name: string) => {
        const newListItem: ListItemProps = {
            name: name,
            isComplete: false
        }

        setNewItem(newListItem);
    }
    // TODO
    // clear textifeld on submit
    return (
        <form onSubmit={handleSubmit}>
            <label>
                <input type="text" name="newItem" onChange={(e) => insertNewListItem(e.target.value)} value={newItem} />
            </label>
            <button type="submit">Submit</button>
        </form>
    )
}