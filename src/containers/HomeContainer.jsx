import React from "react";
import HighOrderComponent from "../hoc/HighOrderComponent";

// start fetch 
class HomeContainer extends React.Component {
    render() {
        return (
            <><p>test</p></>
        )
    }
}

export default HighOrderComponent(HomeContainer, "https://jsonplaceholder.typicode.com/todos")