import React from "react";

export type ManType = {
    name: string
    age: number
    lessons: Array<{ title: string }>
    adress: {
        street: {
            title: string
        }
    }
}

type PropsType = {
    title: string
    man: ManType
    car?: string
}

export const ManComponent: React.FC<PropsType> = ({title, man, ...props}) => {



    return (
        <div>
            <h1>{title}</h1>
            <hr/>
            <div>
                {man.name}
            </div>
            <div>
                {props.car}
            </div>

        </div>)
}