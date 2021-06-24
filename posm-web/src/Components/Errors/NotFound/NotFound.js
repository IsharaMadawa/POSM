import { useEffect } from 'react';

function NotFound() {
    useEffect(() => {
        //ObservableVariables.NotFoundRoute(true);

        return () => {
            // [08.06.2021]: when leaving this component.
            //ObservableVariables.NotFoundRoute(false);
        };
    }, []);


    return (
        <div>
            <p>Not Found 1111</p>
        </div>
    );
}

export default NotFound;
