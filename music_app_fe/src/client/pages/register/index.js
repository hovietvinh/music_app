import { Form, Input, Modal,Button, notification } from 'antd';
import {UserOutlined,LockOutlined} from "@ant-design/icons"
import React from 'react';
import { registerUserApi } from '../../../utils/api';
import { useNavigate } from 'react-router-dom';

function Register({setModal2Open,modal2Open}) {
    const [formModal] = Form.useForm()
    const navigate = useNavigate()
    const registerForm = async(e)=>{
        const res = await registerUserApi(e)
        if(res.code==200){
            notification.success({
                message:res.message
            })
            // navigate("/auth/login")
            formModal.resetFields()
            setModal2Open(false)
        }
        else{
            notification.error({
                message:res.message
            })
            formModal.resetFields()
        }
    }
    return (
        <>
            
            <Modal className='bg-transparent overflow-visible p-0 w-[432px]' footer={null} onCancel={() => setModal2Open(false)} open={modal2Open} centered>
            <div className='bg-white mt-0 pb-[10px] pr-[16px] relative w-[432px] rounded-lg box-border'>
              <div className='text-[#1c1e21] text-[26px] leading-[38px] mb-0 font-semibold'>Đăng ký</div>
              <div className='mb-0 text-[#606770] leading-[24px] text-[14px]'>Nhanh chóng và dễ dàng</div>
            </div>

            <div className='pb-0 mt-0 mr-auto mb-0 ml-auto'>
                <div className='bg-white rounded-b-lg rounded-t-none border-t border-t-[#dadde1] box-border p-[16px] relative w-[432px]'>
                  <Form onFinish={registerForm} className='m-0 p-0' form={formModal} >
                  <Form.Item
                      name="fullName"
                      rules={[
                        {
                          required: true,
                          message: 'Không được để trống tên người dùng!',
                        },
                      ]}
                      >
                      <Input prefix={<UserOutlined />} placeholder="Họ Tên" />
                    </Form.Item>
                    <Form.Item
                      name="email"
                      rules={[
                        {
                          required: true,
                          message: 'Không được để trống email!',
                        },
                      ]}
                      >
                      <Input prefix={<UserOutlined />} placeholder="Email" />
                    </Form.Item>
                    <Form.Item
                      name="password"
                      rules={[
                        {
                          required: true,
                          message: 'Không được để trống mật khẩu!',
                        },
                      ]}
                    >
                      <Input prefix={<LockOutlined />} type="password" placeholder="Mật khẩu" />
                    </Form.Item>
                    <Form.Item className='flex justify-center'> 
                      <Button type="primary" htmlType="submit" size="large" className='px-[40px] text-white bg-[#00a400] text-[14px]' block>Đăng ký</Button>
                    </Form.Item>
                  </Form>
                </div>
            </div>
          </Modal>
        
        </>
    );
}

export default Register;