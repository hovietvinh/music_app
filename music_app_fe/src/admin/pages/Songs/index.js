import { Button, Card, Empty, notification, Skeleton, Space, Table, Tag } from 'antd';
import React, { useEffect, useState } from 'react';
import { toast } from 'react-hot-toast';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, useOutletContext } from 'react-router-dom';
import { setSong } from '../../../redux/admin/actions/SongAction';
import { getSongsApi, getTopicsAdminApi } from '../../../utils/apiAdmin';
import BoxHead from '../../components/BoxHead';

function Songs() {
    const {collapsed} = useOutletContext()
    const [show,setShow] = useState(false)
    const dispatch = useDispatch()
    const stateSong = useSelector(state=>state.SongReducerAdmin)


    const fetch =async ()=>{
        const res = await getSongsApi()
        if(res.code==200){
            dispatch(setSong(res))
        }
        else{
            toast.error({
                message:res.message
            })
        }
        setShow(true)
    }

    useEffect(()=>{    
        fetch()
    },[])

    console.log(stateSong.songs);


    const [selectedRowKeys, setSelectedRowKeys] = useState([]);
    const onSelectChange = (newSelectedRowKeys) => {
        setSelectedRowKeys(newSelectedRowKeys);
    };
    const rowSelection = {
        selectedRowKeys,
        onChange: onSelectChange,
        selections: [Table.SELECTION_ALL, Table.SELECTION_NONE]
    };


    const columns = [
        
       
        {
            title: 'Hình ảnh',
            dataIndex: 'avatar',
            render: (img) => <img className="w-[80px] h-auto" src={img} />,
            className: "w-[150px] h-auto"
        },
        {
            title: 'Tiêu đề',
            dataIndex: 'title',
        },
        {
            title: 'Ca sĩ',
            dataIndex: 'infoSinger',
            render:(singer)=> <p>{singer.fullName}</p>

        },
        {
            title: 'Chủ đề',
            dataIndex: 'infoTopic',
            render:(topic)=> <p>{topic.title}</p>
        },
        {
            title: 'Trạng thái',
            dataIndex: 'status',
            render: (status, record) => (
                <Button className="p-0 m-0">
                    <Tag className="p-1 m-0 w-full" color={status === "active" ? "success" : "error"}>
                        {status === "active" ? "Hoạt động" : "Dừng hoạt động"}
                    </Tag>
                </Button>
            ),
            className :""
        },
        {
            title: 'Hành động',
            dataIndex: 'action',
            render: (_, record) => (
                <div className="w-full flex items-center justify-center">
                    <Space size="middle">
                    <NavLink to={`/admin/products/edit/${record._id}`} className="bg-yellow-400 p-2 px-3 text-black rounded-md">Sửa</NavLink>
                    <Button
                        // onClick={() => handleDelete(record._id)}
                        size="middle"
                        type="primary"
                        danger
                    >
                        Xóa
                    </Button>
                    <NavLink to={`/admin/products/detail/${record._id}`} className="bg-gray-400 p-2 px-3 text-white rounded-md">Chi tiết</NavLink>

                    
                </Space>
                </div>
            ),
            className: "w-[260px]"
        },
    ];



    return (
        <>
            {show ?(
                <>
                    <div className={`transition-all duration-300 ${collapsed ? "ml-[100px] w-[calc(100%-100px)]" : "ml-[230px] w-[calc(100%-230px)]"} mt-[20px] mr-[20px]`}>
                        <BoxHead text={"Quản lý chủ đề"}/>

                        <Card 
                            className='mt-8 mr-6 rounded-md'
                            title="Danh sách"
                            size="middle"
                            headStyle={{
                                backgroundColor: '#edf2f7',
                                color: '#2d3748',
                                padding: '16px',
                                borderRadius: '0.375rem 0.375rem 0 0',
                                width: '100%',
                                boxSizing: 'border-box',
                                fontWeight: '300'
                            }}
                        >
                            <div className='flex justify-end'>
                                <NavLink to="/admin/songs/create" >
                                    <Button type="text" className="border-1 border-green-500 text-green-500 hover:bg-green-500 hover:text-white" >Thêm mới</Button>
                                </NavLink>
                            </div>

                            { stateSong.songs &&stateSong.songs.length>0 ? (
                                <Table
                                rowKey={(record) => record._id}
                                size="middle"
                                className="mr-8 mt-5"
                                rowSelection={rowSelection}
                                columns={columns}
                                dataSource={stateSong.songs}
                                bordered
                                pagination={false}
                                />
                            ):
                                <Empty/>
                            }
                            

                            
                            

                        </Card>
                    </div>
                
                </>
            ):(
                <Skeleton className='mt-[50px]' active/>
                
            )}
            

        </>
    );
}

export default Songs;