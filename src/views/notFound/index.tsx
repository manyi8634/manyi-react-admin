import React from 'react';
import { Result, Button } from 'antd';
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
      <Result
        status="404"
        title="404"
        subTitle="Sorry, 您访问的路径不存在~"
        extra={<Button type="primary" onClick={()=>navigate(-1)}>返回</Button>}
      />
    </NotFoundWrapper>
  )
}

export default NotFound;