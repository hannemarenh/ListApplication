import { FunctionComponent } from "react"
import { deleteListItems } from "../api"
import { useListAndInputStore } from "../stores/ListInputStore"
import { Button } from "./Button"
import { IListItem } from "./ListItem"

type DeleteSingleButtonProps = {
    listItemId: string;
}
export const DeleteSingleButton: FunctionComponent<DeleteSingleButtonProps> = ({ listItemId }) => {
    const url = "https://localhost:7193/api/ListItems/" + listItemId;
    const { setListStatus } = useListAndInputStore();
    const handleDelete = () => {
        deleteListItems(url)
            .then((response) => {
                if (response.ok) {
                    setListStatus("outdated");
                }
            });
    }

    const buttonText = "Delete item";
    const buttonColor = "red";
    return <Button text={buttonText}
        onClick={handleDelete}
        color={buttonColor}
    />
}