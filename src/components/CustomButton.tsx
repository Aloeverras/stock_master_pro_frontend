import React, { useEffect, useState }  from "react";

const CustomButton : React.FC<React.ComponentProps<"button">> = (props : React.ComponentProps<"button">)   => {

    const [child, setChild] = useState<React.ReactNode>(props.children)

    if (typeof child !== "string") {
        setChild(child?.toString())
    } else if (typeof child === "undefined") {
        setChild("button")
    } else if (typeof child === "string" && child.length === 0) {
        setChild("empty button")
    } else {
        useEffect(() : void => {
            console.log(`${child} id goon button name.`)
        }, [child])
    };

    return (
        <button {...props} onClick={props.onClick}>
           {child}
        </button>
    )
};

export default CustomButton;