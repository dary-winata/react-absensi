import { Modal, Form, Input, notification } from 'antd'
import { Button } from 'react-bootstrap'
import { useState } from 'react'
import { editUser } from '../utils/db-crud'

const EditUser = () => {
    const [modalEditProfile, setModalEditProfile] = useState(false)

    const openNotification = (type, title, description) => {
        notification[type]({
          message: `${title}`,
          description:
          `${description}`,
        });
      };

    const onFinish = (user) => {
        editUser(localStorage.getItem('nip'), user).then(() => { 
          openNotification("success", "Edit Success", `user ${localStorage.getItem('nama')} has been edited`) 
          localStorage.removeItem('nip')
          localStorage.removeItem('name')
          setTimeout(() => window.location.href = "/login", 1200)
        }).catch(() => 
          openNotification("error", "Edit Error", `user ${localStorage.getItem('nama')} credential is wrong`) )
      };
      const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
      };

    return (
        <div>
            <Modal
              title="Edit Profile"
              centered
              visible={modalEditProfile}
              okButtonProps = {{form: 'edit-form', key: 'submit', htmlType: 'submit'}}
              onCancel={() => setModalEditProfile(false)}
            >
              <Form name="basic"
                id="edit-form"
                labelCol={{
                    span: 8,
                }}
                wrapperCol={{
                    span: 16,
                }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete="off"
                >
                <Form.Item
                    label="Nama"
                    name="nama"
                >
                    <Input placeholder={localStorage.getItem('nama')} />
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

                <Form.Item
                    label="Password Baru"
                    name="passwordNew"
                    rules={[
                    {
                        required: true,
                        message: 'Please input your password!',
                    },
                    ]}
                >
                  <Input.Password />
                </Form.Item>

                <Form.Item
                    wrapperCol={{
                    offset: 8,
                    span: 16,
                    }}
                >
                </Form.Item>
              </Form>
            </Modal>

            <Button className="d-flex" id='editProfileButton' style={{float: "left"}} onClick={() => setModalEditProfile(true)} >Edit Profile</Button>
        </div>
    )
}

export default EditUser