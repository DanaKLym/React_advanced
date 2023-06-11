import {createContext, useContext, useState} from "react";

const ComponentContext = createContext(undefined);

export const ComponentProvider = ({children}) => {
    const [component] = useState({
        name: "chocolate mousse cake",
        type: "dessert",
        feature: "awesome",
    });

    return (
        <ComponentContext.Provider value={{component}}>
            {children}
        </ComponentContext.Provider>
    );
};

export const useComponent = () => useContext(ComponentContext);
