import React, { Component } from 'react'
import { Flex, WhiteSpace, List, InputItem, WingBlank, Checkbox, Button } from 'antd-mobile'
import { Link } from 'react-router-dom'

const CheckboxItem = Checkbox.CheckboxItem;
export default class Register extends Component {
    state = {
        tel: '',
        pwd: '',
        code: '',
        sign: 'false'
    }
    //change事件
    changeTel = (val) => {
        this.setState({
            tel: val
        })

    }
    changePwd = (val) => {
        this.setState({
            pwd: val
        })

    }
    changeCode = (val) => {
        this.setState({
            code: val
        })

    }
    check = () => {
        this.setState({
            sign: !this.state.sign
        })
    }
    //提交事件
    submitAdd = () => {
        console.log(222);
        
    }
    render() {
        const { tel, pwd, code, sign } = this.state;
        

        return (
            <div style={{ height: '100%', background: '#fff' }}>
                <WhiteSpace size='xl' />
                <WhiteSpace size='xl' />
                <WingBlank size='lg'>
                    {/* 表单 */}
                    <List>
                        <InputItem
                            type="text"
                            placeholder="请输入手机号码"
                            autoFocus
                            value={tel}
                            onChange={this.changeTel}
                        />
                        <InputItem
                            type="password"
                            placeholder="请输入密码"
                            value={pwd}
                            onChange={this.changePwd}
                        />
                        <Flex justify="between">
                            <InputItem
                                type="text"
                                placeholder="请输入验证码"
                                value={code}
                                onChange={this.changeCode}
                            />
                            <span style={{ color: '#BBBBCA' }}>获取验证码</span>
                        </Flex>
                    </List>
                    <CheckboxItem onChange={this.check} ><div style={{ fontSize: 14, color: '#BBBBCA' }}>我已同意<span style={{ color: '#00BC5B' }}>《用户服务协议》及《隐私权政策》</span></div></CheckboxItem>
                    <WhiteSpace size='xl' />
                    {/* 按钮 */}
                    <Button style={{ background: '#00BC5B', color: '#fff' }} onClick={this.submitAdd} 
                    disabled={sign}>注册</Button>
                    <WhiteSpace size='lg' />
                    <Link to='/login' style={{ color: '#00BC5B' }}>已有账号</Link>
                </WingBlank>

            </div>
        )
    }
}
