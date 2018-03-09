import React, { Component } from "react";

class TestPage extends Component {
    render() {
        return <div style={{ height: 1000 }} >
            <MouseTracker />
        </div>;
    }
}


class Cat extends React.Component {
    render() {
        const mouse = this.props.mouse;
        const { count } = this.props;
        return (
            <div style={{ position: 'absolute', left: mouse.x, top: mouse.y }} >cat{count}</div>
        );
    }
}

class Mouse extends React.PureComponent {
    constructor(props) {
        super(props);
        this.handleMouseMove = this.handleMouseMove.bind(this);
        this.state = { x: 0, y: 0 };
    }

    handleMouseMove(event) {
        this.setState({
            x: event.clientX,
            y: event.clientY
        });
    }

    render() {
        return (
            <div style={{ height: '100%' }} onMouseMove={this.handleMouseMove}>

                {/*
            Instead of providing a static representation of what <Mouse> renders,
            use the `render` prop to dynamically determine what to render.
          */}
                {this.props.render(this.state)}
            </div>
        );
    }
}

class MouseTracker extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0
        };
        // This binding ensures that `this.renderTheCat` always refers
        // to the *same* function when we use it in render.
    }

    increaseCount = () => {
        this.setState(({ count }) => ({ count: count + 1 }));
    };

    renderTheCat = (mouse) => {
        const { count } = this.state;
        return <Cat mouse={mouse} count={count} />;
    }

    render() {
        return (
            <div style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%" }}>
                <h1>Move the mouse around! <button onClick={this.increaseCount}>Inscrease Count</button></h1>
                <Mouse render={this.renderTheCat} />
            </div>
        );
    }
}


export default TestPage;
