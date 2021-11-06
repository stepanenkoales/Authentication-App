import { Redirect } from "react-router-dom";

export const HomePage = () => {
    return (
        <div>
            <Redirect to='/login' />

        </div>
    )
}