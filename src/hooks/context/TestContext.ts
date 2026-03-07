import React from "react";

type TestContextType = (n : number) => React.Context<() => number>

const TestContext : TestContextType = (n : number = 0) => {
    return React.createContext<() => number>(() => n);
};

export default TestContext;