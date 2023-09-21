import React from 'react';
import { Empty,Button } from 'antd';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const NotFoundWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`

const NotFound: React.FC = () => {
  const navigate = useNavigate();
  return (
    <NotFoundWrapper>
      <Empty description="404,粗错啦~ 您访问的路径不存在！">
        <Button type='primary' onClick={()=>navigate(-1)}>返回</Button>
      </Empty>
    </NotFoundWrapper>
  )
}

export default NotFound;