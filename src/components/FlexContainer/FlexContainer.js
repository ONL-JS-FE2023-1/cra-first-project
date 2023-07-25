/*
Зробити компоненту FlexContainer, вона відображає всі передані їй елементи як флекс-дітей
В якості пропсів ця компонента буде приймати flex-direction, align-items. justify-content
*/

import React, { Component } from 'react';
import PropTypes from 'prop-types';

class FlexContainer extends Component {
    render() {

        const {flexDirection, justifyContent, alignItems} = this.props;

        const inlineStyles = {
            display: 'flex',
            flexDirection,
            alignItems,
            justifyContent
        }

        return (
            <article style={inlineStyles}>
                {this.props.children}
            </article>
        );
    }
}

FlexContainer.propTypes = {
    flexDirection: PropTypes.string,
    justifyContent: PropTypes.string,
    alignItems: PropTypes.string
}

export default FlexContainer;
