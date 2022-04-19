import { Icon } from "../Icon/Icon";

interface IIconedButtonProps {
    name:string;
    className:string;
    onClick:() => void;
}

export function IconedButton({name, className, onClick}:IIconedButtonProps) {
    return (
        <button type="button" onClick={onClick} className={className}>
            <Icon name={name}/>
        </button>
    )
}