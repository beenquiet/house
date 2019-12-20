import React, { Component } from 'react'
import { Flex, Carousel, WhiteSpace, Card, Grid } from 'antd-mobile'
import { withRouter } from 'react-router-dom'
import { getLists } from '../../apis/list'
import Guess from '../../components/Guess'
//静态列表数据
const data = [
    { id: 0, icon: 'list01.png', text: '新房', color: '#FF5A5F' },
    { id: 1, icon: 'list02.png', text: '二手房', color: '#A782B9' },
    { id: 2, icon: 'list03.png', text: '租房', color: '#F6D149' },
    { id: 3, icon: 'list04.png', text: '商铺写字楼', color: '#F9DB9F' },
    { id: 4, icon: 'list05.png', text: '卖房', color: '#FFA650' },
    { id: 5, icon: 'list06.png', text: '海外房产', color: '#57AFF8' },
    { id: 6, icon: 'list07.png', text: '小区房价', color: '#00E4DD' },
    { id: 7, icon: 'list08.png', text: '问答', color: '#D29BCB' }
].map(item => ({
    icon: require(`../../assets/images/${item.icon}`),
    text: item.text,
    color: item.color,
}))
const datalist = [
    { id: 0, icon: 'list_1 (1).png', text: '我要贷款' },
    { id: 1, icon: 'list_1 (2).png', text: '房贷计算' },
    { id: 2, icon: 'list_1 (3).png', text: '知识' },
    { id: 3, icon: 'list_1 (4).png', text: '扫一扫' }
].map(item => ({
    icon: require(`../../assets/images/${item.icon}`),
    text: item.text,
}))
//类
class Home extends Component {
    // 状态
    state = {
        city: '定位中...',
        data: ['1.jpg', '3.JPG', '4.PNG', '6.JPG', '8.PNG'],
        imgHeight: 190,
        list: []
    }
    
    // 生命周期
    componentDidMount() {
        //地图定位
        window.AMap.plugin('AMap.CitySearch', () => {
            var citySearch = new window.AMap.CitySearch()
            citySearch.getLocalCity((status, result) => {
                if (status === 'complete' && result.info === 'OK') {
                    // 查询成功，result即为当前所在城市信息

                    const { city } = result;
                    this.setState({ city })
                }
            })
        })
        this.getData()
    }
    //获取数据
    getData=()=>{
        getLists().then(res => {
            
            this.setState({ list: res.data })
        })
    }
    //顶部跳转
    goTo = (type) => {
        switch (type) {
            case 'city':
                this.props.history.push('/cityList')
                break;
            case 'search':
                this.props.history.push('/search')
                break;
            case 'map':
                this.props.history.push('/mapList')
                break;

        }
    }

    render() {
        const {list}=this.state
        return (
            <div style={{ display: "flex", flexDirection: "column", height: '100%' }}>
                {/* 顶部 */}
                <Flex style={{ background: '#00BC5B', height: 50 }}>
                    <Flex style={{ width: 80, color: '#fff' }} justify='center' onClick={this.goTo.bind(this, 'city')}>
                        {this.state.city} ▼
                    </Flex>
                    <Flex style={{ flex: 1, background: '#fff', padding: 5, borderRadius: 20 }} onClick={this.goTo.bind(this, 'search')}>
                        <img src={require('../../assets/images/search.png')} width='26' height='26' />
                        <span style={{ marginLeft: 20 }}>挑好房，上源码房产App</span>
                    </Flex>
                    <Flex style={{ width: 60 }} justify='center' align='center' onClick={this.goTo.bind(this, 'map')}>
                        <img src={require('../../assets/images/map.png')} width='26' height='26' />
                    </Flex>
                </Flex>
                {/* 轮播 */}
                <Carousel
                    autoplay={true}
                    infinite
                >
                    {this.state.data.map(val => (
                        <a
                            key={val}
                            style={{ display: 'inline-block', width: '100%', height: this.state.imgHeight }}
                        >
                            <img
                                src={require(`../../assets/images/${val}`)}
                                alt=""
                                style={{ width: '100%', verticalAlign: 'top' }}
                            />
                        </a>
                    ))}
                </Carousel>
                {/* 分类导航 */}
                <Card>
                    <Grid data={data} itemStyle={{ background: '#ccc' }} hasLine={false} />
                </Card>
                <WhiteSpace size="md" />
                <div style={{ flex: 1, overflow: 'auto', height: '100%' }}>
                    {/* 房产全百科 */}
                    <Card>
                        <Flex>
                            <h2 style={{ color: '#03BD5D', margin: '20px 20px', fontSize: 24 }}>房产全百科</h2>
                            <span>专业的买房攻略</span>
                        </Flex>
                        <Grid data={datalist} activeStyle={false} hasLine={false} />
                    </Card>
                    <WhiteSpace size="md" />
                    {/*猜你喜欢*/}
                    <Card>
                        <h3 style={{ fontSize: 24, padding: 20, borderBottom: '1px solid #ccc' }}>猜你喜欢</h3>

                        {
                            list.map(item => {
                                return (
                                    <Guess item={item} key={item.id}/>
                                )
                            })
                        }
                    </Card>
                </div>
            </div>
        )
    }
}
export default withRouter(Home)