import playpause from "../../icons/playpause.svg";
import scale from "../../icons/scale.svg";
import pause from "../../icons/pause.svg"
import play from '../../icons/play.svg'

function map(name:string) {
    switch (name) {
        case 'playpause':
            return playpause;
        case 'scale':
            return scale;
        case 'pause':
            return pause;
        case 'play':
            return play;
         default:
            return '';
    }
}

export function Icon ({name, className}:{name:string; className?:string}) {
    return (
        <img className={className} src={map(name)}/>
    )
}