import React from 'react';
import styles from './Login.css';
import {Link} from 'dva/router';
import LoginLayout from '../components/LoginLayout/LoginLayout';
import {Form, Icon, Input, Button, Checkbox} from 'antd';


const FormItem = Form.Item;
const Login = (({
    loading,
    commit,
    form:{
        getFieldDecorator,
        validateFields
    }
}) => {
    function handleSubmit(e) {
        e.preventDefault();
        validateFields((error, values) => {
            if (!error) {
                commit(values);
            }
        });
    }

    document.onkeyup = e => {
        if (e.keyCode === 13) {
            handleSubmit(e);
        }
    };

    return (
        <LoginLayout>
            <div className={styles.container}>
                <div className={styles.logo}>My Blog!</div>
                <Form onSubmit={handleSubmit}>
                    <FormItem>
                        {
                            getFieldDecorator('username', {
                                rules: [
                                    {
                                        required: true,
                                        message: 'Please input your username!'
                                    }
                                ]
                            })(<Input addonBefore={<Icon type="user"/>} placeholder="Username"/>)
                        }
                    </FormItem>
                    <FormItem>
                        {
                            getFieldDecorator('password', {
                                rules: [
                                    {
                                        required: true,
                                        message: 'Please input your Password!'
                                    }
                                ]
                            })(<Input addonBefore={<Icon type="lock"/>} type="password" placeholder="Password"/>)
                        }
                    </FormItem>
                    <FormItem>
                        {
                            getFieldDecorator('remember', {
                                valuePropName: 'checked',
                                initialValue: true
                            })(<Checkbox>Remember me</Checkbox>)
                        }
                        <span className={styles.toOther }>Or <Link to="/register">register now!</Link></span>
                        <Button
                            type="primary"
                            htmlType="submit"
                            className={styles.button}
                            loading={loading}
                        >
                            Log in
                        </Button>
                    </FormItem>
                </Form>
            </div>
        </LoginLayout>
    );
});

export default Form.create()(Login);