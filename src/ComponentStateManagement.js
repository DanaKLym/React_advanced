import { useComponent } from "./ComponentContext";

const ComponentStateManagement = () => {
    const {component} = useComponent();

    return (
        <>
            <h2>Hello there!</h2>
            <p>Please, enjoy {component.type} called {component.name} which is just {component.feature}</p>
        </>
    );
}

export default ComponentStateManagement;