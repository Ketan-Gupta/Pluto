import React from 'react';

class ErrorBoundary extends React.Component{

    state = {
        hasError: false,
        errorMessage : ''
    }

    componentDidCatch = (error, info) => {
        this.setState({
            hasError: true,
            errorMessage: error
        });
    }

    render() {
        if (this.state.hasError)
            return <h1>{this.state.errorMessage}</h1>;
        return this.props.children;
    }
}

export default ErrorBoundary;

// componentDidCatch is a method receives potential errors and additional messages about those errors.
// The component which is wrapped with the error boundary throws any error, it will
// be caught by this componentDidCatch