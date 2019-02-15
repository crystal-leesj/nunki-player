import React, { Component } from "react";

class Controls extends Component {
    render() {
        console.log("CONTROLS??");
        return (
            <div className="Controls">
                <i
                    id="prev"
                    className="fa fa-fw fa-fast-backward"
                    onClick={this.props.onClick}
                />
                {!this.props.playing &&
                    <i
                        id="play"
                        onClick={this.props.onClick}
                        className="fa fa-fw fa-play"
                    />}
                {this.props.playing &&
                    <i
                        id="pause"
                        onClick={this.props.onClick}
                        className="fa fa-fw fa-pause"
                    />}
                <i
                    id="next"
                    className="fa fa-fw fa-fast-forward"
                    onClick={this.props.onClick}
                />
            </div>
        );
    }
}

export default Controls;