import { Button, Form, Input, Radio, Select, Skeleton } from 'antd';
import React, { useEffect, useState } from 'react';
import { toast } from 'react-hot-toast';
import { useNavigate, useOutletContext } from 'react-router-dom';
import { createSongsApi, getDataCreateSongApi } from '../../../utils/apiAdmin';
import BoxHead from '../../components/BoxHead';
import RichTextEditor from '../../components/RichTextEditor';
import UploadImg from '../../components/Upload';
import UploadAudio from '../../components/UploadAudio';

function CreateSong() {
    const  {collapsed} = useOutletContext()
    const navigate = useNavigate()
    const [form] = Form.useForm()
    const [optionTopics,setOptionTopics] = useState([])
    const [optionSingers,setOptionSinger] = useState([])
    const [show,setShow] = useState(false);
    const [imageFile, setImageFile] = useState(null);  // State for image file
    const handleImageSelect = (file) => {
        setImageFile(file);  // Save the image file when selected
    }; 
    const DeleteImg = ()=>{
        // console.log(imageFile);
        setImageFile(null)
    }
    const [editorContent, setEditorContent] = useState('');
    const handleEditorChange = (content, editor) => {
        setEditorContent(content);
        // console.log('Nội dung đã thay đổi:', content);
      };

      const [audioFile, setAudioFile] = useState(null);  // State for image file
    
      const handleAudioSelect = (file) => {
        setAudioFile(file);
      };
      const DeleteAudio = ()=>{
        setAudioFile(null)
    }
    const fetch = async()=>{
        const res = await getDataCreateSongApi();
        if(res.code==200){
            setOptionTopics(res.topics)
            setOptionSinger(res.singers)
            setShow(true)
        }
    }
    const handleFinish =async (values)=>{
        setShow(false)
        let formData = new FormData();
    
    // Append all form fields
        Object.keys(values).forEach(key => {
        formData.append(key, values[key] || '');
        });
    
    // Append the image file if it exists
    if (imageFile) {
      formData.set('avatar', imageFile);  // 'thumbnail' must match backend field name
    }

    if(editorContent){
      formData.set("description",editorContent)
    }
    if(audioFile){
      formData.set("audio",audioFile)
    }

    // console.log(imageFile);
  
  
    // dispatch(createProductAction(formData));
    const res = await createSongsApi(formData);

    if(res.code==200){
        toast.success("thêm bài hát thành công!")
        console.log(res.data);
        setEditorContent("");  
        setAudioFile(null)
        setImageFile(null)
        form.resetFields();
        navigate("/admin/songs")
    }
    else{
        toast.error("thêm bài hát không thành công!")
    }
    setShow(true)

  
    
    
    }
    useEffect(()=>{
        fetch()
    },[])
    return (
        <>
            {show ? (
                <>
                    <div className={`transition-all duration-300 ${collapsed ? "ml-[100px] w-[calc(100%-100px)]" : "ml-[230px] w-[calc(100%-230px)]"} mt-[20px] mr-[20px]`}>
                        <BoxHead text={"Thêm mới bài hát"}/>
                        
                        <Form
                        className='mt-8 mr-6'
                        layout="vertical"
                        form={form}
                        onFinish={handleFinish}
                        initialValues={{  status: 'active'}}
                        >

                            <Form.Item name="title" label="Tiêu đề" rules={[{ required: true, message: 'Vui lòng nhập tiêu đề bài hát!' }]}>
                                <Input />
                            </Form.Item>

                            <Form.Item name="topicId" label="Chủ đề" rules={[{ required: true, message: 'Vui lòng chọn chủ đề bài hát!' }]}>
                            
                                <Select
                                    showSearch
                                
                                    placeholder="-- Chọn chủ đề --"
                                    optionFilterProp="label"
                                    filterSort={(optionA, optionB) =>
                                    (optionA?.label ?? '').toLowerCase().localeCompare((optionB?.label ?? '').toLowerCase())
                                    }
                                    options={optionTopics}
                                />
                            </Form.Item>

                            <Form.Item name="singerId" label="Ca sĩ" rules={[{ required: true, message: 'Vui lòng chọn ca sĩ!' }]}>
                                <Select
                                    showSearch
                                
                                    placeholder="-- Chọn ca sĩ --"
                                    optionFilterProp="label"
                                    filterSort={(optionA, optionB) =>
                                    (optionA?.label ?? '').toLowerCase().localeCompare((optionB?.label ?? '').toLowerCase())
                                    }
                                    options={optionSingers}
                                />
                            </Form.Item>
                            

                            <Form.Item label="Mô tả" name="description">
                                <RichTextEditor handleEditorChange={handleEditorChange} editorContent={editorContent}/>
                            </Form.Item>

                            <Form.Item 
                               name="audio"
                                label={
                                    <span className=''>File âm thanh</span> // Thiết lập class cho label
                                } 
                                className=''
                            >
                                <div className='flex items-start'>
                                    {/* <UploadImg onImageSelect={handleImageSelect} className="hidden"/>
                                     */}
                                     <UploadAudio defaultAudio={audioFile} onAudioSelect={handleAudioSelect}/>
                                    {audioFile && (
                                        <>
                                            <button onClick={DeleteAudio} className='flex  mt-[-5px] ml-[-5px] hover:outline-primary items-center justify-center p-2 w-[20px] h-[20px] rounded-full border bg-slate-200 '>X</button>
                                        </>
                                    )}
                                    
                                </div>   
                            </Form.Item>

                            <Form.Item 
                                name="avatar"
                                label={
                                    <span className=''>Ảnh</span> // Thiết lập class cho label
                                } 
                                className=''
                            >
                                <div className='flex items-start'>
                                    <UploadImg onImageSelect={handleImageSelect} defaultImage={imageFile}/>
                                    {imageFile && (
                                        <>
                                            <button onClick={DeleteImg} className='flex  mt-[-5px] ml-[-5px] hover:outline-primary items-center justify-center p-2 w-[20px] h-[20px] rounded-full border bg-slate-200 '>X</button>
                                        </>
                                    )}
                                    
                                </div>   
                            </Form.Item>

                            

                            

                            <Form.Item label="Trạng thái" name="status">
                                <Radio.Group value="active">
                                    <Radio value="active">Hoạt động</Radio>
                                    <Radio value="inactive">Dừng hoạt động</Radio>
                                </Radio.Group>
                            </Form.Item>
                            

                            <Form.Item>
                                <Button htmlType='submit' type='primary'>Thêm mới</Button>
                            </Form.Item>
                        </Form>
                    </div>
                
                </>
            ):(
                <Skeleton  active/>
            )}
            

        </>
    );
}

export default CreateSong;