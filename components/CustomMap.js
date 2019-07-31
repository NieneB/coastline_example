import React, { Component } from 'react'
import MapGL, { NavigationControl } from 'react-map-gl'

const navStyle = {
    position: 'absolute',
    top: 0,
    left: 0,
    padding: '10px'
}

class CustomMap extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            viewport: {
                latitude: 52.36698,
                longitude: 4.91095,
                zoom: 7,
                bearing: 0,
                pitch: 0,
                width: 900,
                height: 900
            }
        }
    }

    render() {
        const { viewport } = this.state;
        return (
            <MapGL
                {...this.state.viewport}
                onViewportChange={(viewport) => this.setState({ viewport })}
                mapStyle={this.props.mapStyle}
            >
            </MapGL>
        )
    }
}

module.exports = CustomMap
