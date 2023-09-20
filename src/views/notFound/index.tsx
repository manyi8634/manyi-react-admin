import React from 'react';
import { Empty,Button } from 'antd';
import { useNavigate } from 'react-router-dom';

const NotFound: React.FC = () => {
  const navigate = useNavigate();
  return (
    <Empty description="404,粗错啦~ 您访问的路径不存在！">
      <Button type='primary' onClick={()=>navigate(-1)}>返回</Button>
    </Empty>
  )
}

export default NotFound;