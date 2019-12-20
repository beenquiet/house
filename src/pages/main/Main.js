import React, { Component } from 'react'
import { TabBar } from 'antd-mobile'
//引入子组件
import Home from './Home'
import History from './History'
import WeChat from './WeChat'
import Mine from './Mine'
export default class Main extends Component {
    state = {
        selectedTab: 0,
        list: [
            { id: 0, title: '首页', icon: 'home' },
            { id: 1, title: '微聊', icon: 'wechat' },
            { id: 2, title: '历史', icon: 'history' },
            { id: 3, title: '我的', icon: 'my' }
        ]
    };

    renderContent(id) {
         switch (id) {
             case 0:
                 return <Home />;
             case 1:
                 return <WeChat />
             case 2:
                 return <History />
             case 3:
                 return <Mine />
             default: return <Home />;
         }
        
    }

    render() {
        return (
            <div style={{ position: 'fixed', height: '100%', width: '100%', top: 0 }}>
                <TabBar
                    unselectedTintColor="#949494"
                    tintColor="#33A3F4"
                    barTintColor="white"
                >
                    {

                        this.state.list.map(item => {
                            const { id, title, icon } = item;
                            return (
                                <TabBar.Item
                                    title={title}
                                    key={id}
                                    icon={<div style={{
                                        width: '22px',
                                        height: '22px',
                                        background: `url(${require('../../assets/images/' + icon + '_s.png')}) center center /  22px 22px no-repeat`,
                                    }}
                                    />
                                    }
                                    selectedIcon={<div style={{
                                        width: '22px',
                                        height: '22px',
                                        background: `url(${require('../../assets/images/' + icon + '.png')}) center center /  23px 23px no-repeat`
                                    }}
                                    />
                                    }
                                    selected={this.state.selectedTab === id}
                                    onPress={() => {
                                        this.setState({
                                            selectedTab: id,
                                        });
                                    }}
                                >
                                    {this.renderContent(id)}
                                </TabBar.Item>
                            )
                        })


                    }

                </TabBar>
            </div >
        );
    }
}
