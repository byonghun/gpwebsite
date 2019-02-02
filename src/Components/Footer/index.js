import React, {PureComponent} from 'react';

export class Footer extends PureComponent {
    render() {
        return(
            <div style={{
                width: this.props.width,
                height: 60,
                backgroundColor: 'red'
            }}>
                Footer
            </div>
        )
    }
}