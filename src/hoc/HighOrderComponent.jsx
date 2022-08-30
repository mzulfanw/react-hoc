import React from "react";

// Take in a component as argument WrappedComponent

const HighOrderComponent = (WrappedComponnet, requestUrl) => {

    // and return another component
    class HOC extends React.Component {

        constructor(props) {
            super(props)
            this.state = {
                data: []
            }
            this.fetch = this.fetch.bind(this)
        }

        componentDidMount() {
            if (requestUrl) {
                this.fetch(requestUrl)
            }
        }

        fetch = async (requestUrl) => {
            this.setState({
                data: []
            })

            try {
                const response = await fetch(requestUrl);

                if (response.ok) {
                    const data = await response.json();
                    this.setState({
                        data
                    });
                } else {
                    throw new Error('Fetch request error');
                }

            } catch (err) {
                // handle an error
            }
        }

        render() {
            return <WrappedComponnet
                {...this.state}
                {...this.props}
            />
        }
    }
    return HOC
}

export default HighOrderComponent