import {useRef, useEffect} from "react";

function usePrevious(varName) {
    const ref = useRef();

    useEffect(() => {
        ref.current = varName;
    }, [varName]
    );

    return ref.current;
}
    
export default usePrevious;