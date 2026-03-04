import React from "react"
import { PropsType } from "./PropsType"
import { BasicPropsType } from "./BasicPropsType"

export type BasicPropsComponent<T, U extends string> = 
    React.FC<
        PropsType<
            T, U>
            & 
            BasicPropsType
        >