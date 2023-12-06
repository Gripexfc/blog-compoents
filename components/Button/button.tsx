import React from "react";

const Button = ({
    text
}: ButtonProps) => {
    return (
        <div>
            { text }
        </div>
    )
}

export interface ButtonProps {
    text: string
}

export default Button;