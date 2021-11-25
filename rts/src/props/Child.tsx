import React, {FC} from "react";

interface ChildProps {
    color: string,
    onClick: () => void
}

export const Child = ({color, onClick}: ChildProps) => {
    console.log({color})
    return <div>
        {color}
        <button onClick={onClick}>Click me!</button>
    </div>
}

export const ChildAsFC: FC<ChildProps> = ({color, onClick, children}) => {
    console.log({color})
    return <div>
        {color}
        <button onClick={onClick}>Click me!</button>
        {children}
    </div>
}