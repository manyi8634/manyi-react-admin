import styled from 'styled-components';

export const HomeWrapper = styled.div< { colorbgcontainer: string, collapsed: number } >`
  .ant-layout-sider{
    overflow: auto;
    height: 100vh;
    position: fixed;
    left: 0;
    top: 0;
    bottom: 0;
    img{
      width: 50%;
      display: block;
      margin: 10px auto;
    }
  }
  .lauout-main{
    margin-left: ${ props => props.collapsed === 1 ? '80px' :'200px' };
    .ant-layout-header{
      padding: 0;
      background:${ props => props.colorbgcontainer };
      .ant-btn{
        font-size: 16px;
        width: 64px;
        height: 64px;
      }
    }
    .ant-layout-content {
      margin: 24px 16px;
      padding: 24PX;
      min-height: 500PX;
      background: ${ props => props.colorbgcontainer };
    }
  }
  .ant-layout-footer{
    text-align: center;
  }
 `