import React, { PureComponent } from 'react';


import './field.scss'

class MapField extends PureComponent {

    render() {
        const { label, content } = this.props;
        return(
            <div className="mf">
                <div className="mf-item">{label}</div> ：
                <div className="mf-item">{content}</div>
            </div>
        )
    }
}
export default MapField