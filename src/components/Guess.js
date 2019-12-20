import React, { Component } from 'react'
import { Flex } from 'antd-mobile'
import Proptypes from 'prop-types'
export default class Guess extends Component {
    static propTypes={
        list:Proptypes.object
    }
    static defaultProps={
        list:{}
    }
    render() {
        const { item } = this.props
        return (
            <Flex style={{ padding: 20 }}>
                <img style={{ width: 100, height: 100, marginRight: 15 }} src={item.pic} />
                <div style={{ flex: 1 }}>
                    <h4 style={{ fontWeight: 'bold', fontSize: 22 }}>{item.name}</h4>
                    <Flex style={{ margin: '20px 0' }} justify="between">
                        <div>{item.address}</div>
                        <div style={{ color: '#FF0E0E' }}>{item.price}/平</div>
                    </Flex>
                </div>
            </Flex>
        )
    }
}
