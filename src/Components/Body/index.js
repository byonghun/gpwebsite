import React, {PureComponent} from 'react';

export class Body extends PureComponent {
    render() {
        return (
            <div style={{
                width: this.props.width,
                backgroundColor: 'blue',
                height: this.props.height,
                margin: '0 auto',
                marginTop: 25,
                marginBottom: 25
            }}>
                BODY
            </div>
        )
    }
}