import React, {PureComponent} from 'react';

export class Header extends PureComponent {
  render() {
    return (
      <div style={{
        height: 60,
        backgroundColor: 'orange',
        width: this.props.width
        }}>
        <p style={{textAlign: 'center'}}>HEADER</p>
      </div>
    )
  }
}