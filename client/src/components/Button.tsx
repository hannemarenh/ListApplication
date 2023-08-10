import { FunctionComponent } from "react";

export type ButtonColor = "red" | "blue" | "purple";
type ButtonProps = {
    text: string
    onClick: () => void
    disabled?: boolean
    color?: ButtonColor
}
export const Button: FunctionComponent<ButtonProps> = ({text, onClick, disabled =false, color = "blue"}) => {
    const baseStyle = "m-4 p-4 rounded";
    let additionalStyle = "";

    switch (color) {
        case "red":
            additionalStyle = "hover:bg-red-500 bg-red-300"
            break
        case "blue":
            additionalStyle = "bg-blue-300 hover:bg-blue-500 "
            break
        case "purple":
            additionalStyle = "bg-purple-300 hover:bg-purple-500"
            break
    }
    const spaceBetween = " "
    const style = baseStyle + spaceBetween + additionalStyle;

    return (
        <button
            onClick={onClick}
            className={style}
        >
            {text}
        </button>
    )
}