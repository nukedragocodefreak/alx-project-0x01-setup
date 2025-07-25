import React from "react";

type ButtonProps = {
    label: string;
    onClick?: () => void;
};


const Button: React.FC<ButtonProps> = ({label,onClick}) => {
    return <button onClick = {onclick}>{label}</button>
};

export default Button;