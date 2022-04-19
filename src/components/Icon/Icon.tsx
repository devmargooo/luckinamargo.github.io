import playpause from "../../icons/playpause.svg";

function map(name:string) {
    switch (name) {
        case 'playpause':
            return playpause;
        default:
            return '';
    }
}

export function Icon ({name, className}:{name:string; className?:string}) {
    return (
        <img className={className} src={map(name)}/>
    )
}