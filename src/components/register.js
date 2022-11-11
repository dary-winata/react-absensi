import { Card, Form, Input, Checkbox, Button, InputNumber } from 'antd'
import { registerUser } from './utils/db-crud'
import { useEffect } from 'react'

const Register = () => {
    useEffect(() => {
        if(localStorage.getItem('nip') != null && localStorage.getItem('nama') != null) {
            window.location.href = "/dashboard"
        }
    }, [])

    const onFinish = (values) => {
        const { nip, name, password } = values
        registerUser(nip, name, password).then((result) => {
            localStorage.setItem("nip", result.data.user.nip)
            localStorage.setItem("nama", result.data.user.nama)
            window.location.href="/dashboard"
        })
      };
      const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
      };

    return (
        <div className="site-card-border-less-wrapper" style={{backgroundColor: "red", width: "100vw", height:"100vh"}}>
            <Card className='col-md-6 col-md-offset-3' style={{width: 300, borderRadius: 20, float: "none", margin: 0,
                position: "absolute", left: "50%", top: "50%", transform: "translate(-50%, -50%)"}}>
                <Form name="basic"
                    labelCol={{
                        span: 8,
                    }}
                    wrapperCol={{
                        span: 16,
                    }}
                    initialValues={{
                        remember: true,
                    }}
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                    autoComplete="off"
                    >
                    <Form.Item
                        label="Nip"
                        name="nip"
                        rules={[
                        {
                            required: true,
                            message: 'Please input your nip!',
                        },
                        ]}
                    >
                        <InputNumber />
                    </Form.Item>
                    <Form.Item
                        label="Name"
                        name="name"
                        rules={[
                        {
                            required: true,
                            message: 'Please input your name!',
                        },
                        ]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item
                        label="Password"
                        name="password"
                        rules={[
                        {
                            required: true,
                            message: 'Please input your password!',
                        },
                        ]}
                    >
                        <Input.Password />
                    </Form.Item>

                    <h1>
                    Have an account?<a href='/login'>log in</a></h1>

                        <Form.Item
                            wrapperCol={{
                            offset: 8,
                            span: 16,
                            }}
                        >
                            <Button type="primary" htmlType="submit">Submit</Button>
                        </Form.Item>
                    </Form>
            </Card>
        </div>
    )
}

export default Register