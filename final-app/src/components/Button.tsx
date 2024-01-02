import React from "react";

interface ButtonProps {
    children: React.ReactNode;
    className?: String;
    onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;

}

export default function Button (props: ButtonProps) {
    return (
        <Button onClick={ props.onClick } className={ props.className }>
            { props.children }
        </Button>
    )
}