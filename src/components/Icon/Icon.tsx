import playpause from "../../icons/playpause.svg";
import scale from "../../icons/scale.svg";

function map(name:string) {
    switch (name) {
        case 'playpause':
            return playpause;
        case 'scale':
            return scale;
        default:
            return '';
    }
}

export function Icon ({name, className}:{name:string; className?:string}) {
    return (
        <img className={className} src={map(name)}/>
    )
}