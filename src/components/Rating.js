import * as Icons from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Rating({ num }) {
    let grey = 5 - num;
    return (
        <>
            {[...Array(num)].map(e => (
                <FontAwesomeIcon icon={Icons.faStar} color="orange"/>
            ))} 
            {[...Array(grey)].map(e => (
                <FontAwesomeIcon icon={Icons.faStar} color="grey"/>
            ))} 

        </>
    )
}

export default Rating;