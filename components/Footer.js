import React from "react";

export default function Footer(props){
    const date = new Date();
    const year = date.getFullYear();
    
    return(
        <footer>
            <small>{year} | {props.company} - No rights reserved</small>
        </footer>
    );    
}