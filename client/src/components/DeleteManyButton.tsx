import { FunctionComponent } from "react"
import { deleteListItems } from "../api"
import { useListAndInputStore } from "../stores/ListInputStore"
import { Button } from "./Button"

type DeleteManyButtonProps = {
	deleteAll: boolean
}
export const DeleteManyButton: FunctionComponent<DeleteManyButtonProps> = ({ deleteAll = false }) => {
	const url = deleteAll ? "https://localhost:7193/api/ListItems?completedOnly=false" : "https://localhost:7193/api/ListItems?completedOnly=true";
	const { setListStatus } = useListAndInputStore();
	const handleDelete = () => {
		deleteListItems(url)
			.then((response) => {
				if (response.ok) {
					setListStatus("outdated");
				}
			});
	}

	const buttonText = deleteAll ? "Delete all items" : "Delete compleded items";
	const buttonColor = deleteAll ? "red" : "blue";
	return <Button text={buttonText}
		onClick={handleDelete}
		color={buttonColor}
	/>
}