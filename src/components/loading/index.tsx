import { memo } from 'react';
import { Spin } from 'antd';
import { LoadingWrapper } from './style';

const Loading = memo(() => {
  return (
    <LoadingWrapper>
      <Spin tip="正在加载中..." size="large"><div className='content'/></Spin>
    </LoadingWrapper>
  )
})

export default Loading