import React, { FC, useContext, useRef } from 'react';
import { Form, Input, Button, message } from 'antd';
import Fetch from '@/config/Fetch';
import { BasicContext, IUserProps } from '@/layouts/basicLayout';
import './login.scss';
import { CloseOutlined } from '@ant-design/icons'
export interface ILoginProps {
    id?: string,
    password?: string
}
const Login:FC = ()=>{
    const ctx = useContext(BasicContext);
    const user = useRef({} as IUserProps);
    const layout = {
        labelCol: { span: 6 },
        wrapperCol: { span: 16 },
    };
    const tailLayout = {
        wrapperCol: { offset: 0, span: 16 },
    };
    const onFinish = (values: any) => {
        let data = values as ILoginProps;
        Fetch.post('login', data)
        .then((res : any)=>{
            let data = res.data.list;
            let code = data.code;
            if(Number(code) === 2000) {
                let temp: IUserProps = {
                    id: 'admin',
                    token: data.token
                }
                user.current = temp;
                cancelLoginForm();
            } else {
                message.info('请按照输入框提示进行输入');
            }
        },(error: any)=>{
            message.error("请求发生错误：" + error);
        })
    };

    const cancelLoginForm = ()=>{
        let isLogin = ctx.isLogin;
        if(user.current.id !== null)
            ctx.user.current = user.current
        ctx.changeIsLogin(!isLogin);
    }

    return (
        <div id = "login-main-div">
            <Form 
                className = "login-form"
                {...layout} 
                name = "basic" 
                initialValues = {{ remember: true }}
                onFinish = { onFinish }
                >
                <p className = "login-title">模拟登录</p>
                <CloseOutlined className = "close-btn" onClick = { ()=>{ cancelLoginForm() } } />
                <Form.Item
                    label = "账号"
                    name = "id" 
                    rules = {[{ required: true, message: '请输入账号' }]}
                >
                    <Input placeholder = "admin"/>
                </Form.Item>

                <Form.Item
                    label = "密码"
                    name = "password"
                    rules = {[{ required: true, message: '请输入密码' }]}
                >
                    <Input.Password placeholder = "123456" />
                </Form.Item>

                <Form.Item {...tailLayout}>
                    <Button type="primary" htmlType="submit">
                        登 录
                    </Button>
                </Form.Item>
            </Form>
        </div>
    )
}

export default Login;