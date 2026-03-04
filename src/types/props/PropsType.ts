// le promp père et général

export type PropsType<T, U extends string> = Partial<
    Record<
        U,
        T extends U ? string : T
    >
>;