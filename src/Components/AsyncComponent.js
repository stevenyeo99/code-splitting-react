import { Component } from 'react';

export const asyncComponent = (importComponent) => {

    class AsyncComponent extends Component {

        constructor(props) {
            super(props);
            this.state = {
                component: null
            };
        }

        async componentDidMount() {
            const { default: component } = await importComponent();
            this.setState({
                component
            });
        }

        render() {
            const { component: Component } = this.state;
            return Component ? <Component {...this.props} /> : null;
        }
    }

    return AsyncComponent;
};