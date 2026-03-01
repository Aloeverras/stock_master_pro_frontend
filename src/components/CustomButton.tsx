import React from "react";

const CustomButton : React.FC<React.ComponentProps<"button">> = (props : React.ComponentProps<"button">)   => {

    return (
        <button {...props} onClick={props.onClick}>
           {props.children}
        </button>
    )
};

export default CustomButton;