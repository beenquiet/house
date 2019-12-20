import React, { Component } from 'react'
//引入antd-mobile组件
import { List, InputItem, WhiteSpace, Flex, WingBlank, Button, Toast } from 'antd-mobile';
//引入 Link
import { Link } from 'react-router-dom'
import { loginRes } from '../apis/users'
export default class Login extends Component {
    // 内部状态
    state = {
        phoneNum: '',
        password: ''
    }
    // change 事件
    changeUser = (val) => {
        this.setState({
            phoneNum: val
        })
    }
    changePwd = (val) => {
        this.setState({
            password: val
        })
    }
    //登陆
    loginBtn = () => {
        const { phoneNum, password } = this.state;
        loginRes({ phoneNum, password }).then((res) => {
            const { data, token } = res;
            if (token) {
                sessionStorage.setItem('token', token)
                sessionStorage.setItem('phoneNum', data.phoneNum)
                Toast.success('登录成功!!!', 1, ()=>{
                    this.props.history.replace('/')
                });

            } else {
                Toast.fail('登录失败', 2);
            }
        })
    }
    render() {
        const { phoneNum, password } = this.state
        return (
            <div style={{ height: '100%', background: '#fff' }}>
                <WhiteSpace size='xl' />
                <WhiteSpace size='xl' />
                {/* 图片 */}
                <Flex justify="center">
                    <img src={require('../assets/images/logo.png')} width='100' height='100' alt='' />
                </Flex>
                <WhiteSpace size='xl' />
                <WhiteSpace size='xl' />
                {/* 输入框 */}
                <WingBlank size='lg'>
                    <List>
                        <InputItem
                            placeholder="请输入手机号"
                            autoFocus
                            value={phoneNum}
                            onChange={this.changeUser}
                        >
                            <div style={{ backgroundImage: `url(${require('../assets/images/user.svg')})`, backgroundSize: 'cover', height: '24px', width: '24px' }} />
                        </InputItem>
                        {/* 密码 */}
                        <InputItem
                            placeholder="请输入密码"
                            value={password}
                            onChange={this.changePwd}
                            type="password"
                        >
                            <div style={{ backgroundImage: `url(${require('../assets/images/pwd.svg')})`, backgroundSize: 'cover', height: '24px', width: '24px' }} />
                        </InputItem>
                    </List>
                    <WhiteSpace size='xl' />
                    <WhiteSpace size='md' />
                    {/* 按钮 */}
                    <Button style={{ background: '#00BC5B', color: '#fff' }} onClick={this.loginBtn}>登陆</Button>
                    <WhiteSpace size='xl' />

                    <Flex justify="between">
                        <Link to='/register' style={{ color: '#00BC5B' }}>手机快速注册</Link>
                        <Link to='/forget' style={{ color: '#00BC5B' }}>忘记密码？</Link>
                    </Flex>
                </WingBlank>

            </div>
        )
    }
}
