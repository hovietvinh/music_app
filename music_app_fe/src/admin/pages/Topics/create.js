import React from 'react';
import { NavLink, useOutletContext } from 'react-router-dom';
import {Form, Input} from "antd"
import BoxHead from '../../components/BoxHead';

function CreateTopic() {
    const {collapsed} = useOutletContext()
    const [form] = Form.useForm()
    const finish = (e)=>{
        
    }

    return (
        <>
            <div className={`transition-all duration-300 ${collapsed ? "ml-[100px] w-[calc(100%-100px)]" : "ml-[230px] w-[calc(100%-230px)]"} mt-[20px] mr-[20px]`}>

                <BoxHead text={"Thêm mới chủ đề"}/>

                <Form
                    className='mt-8 mr-6'
                    form={form}
                    onFinish={finish}
                    layout="vertical"
                >

                    <Form.Item label="Tiêu đề" name="title" rules={[{ required: true, message: 'Vui lòng nhập tiêu đề sản phẩm!' }]}>
                        <Input />
                    </Form.Item>
                    
                </Form>
            </div>

        </>
    );
}

export default CreateTopic;