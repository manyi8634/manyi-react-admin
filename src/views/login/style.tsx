import styled from "styled-components";

export const LoginWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  background: url(${require('@/assets/images/login-bg.jpg')}) no-repeat;
  background-size: 100% 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .login-box {
    width: 25%;
    height: 400px;
    background-color: #00000060;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    h2 {
      color: #ffffff90;
      margin-bottom: 15%;
    }
    .ant-form-item-required{
      color:#ffffff90 !important;
      &::before{
        content: '' !important;
      }
    }
    .ant-btn {
      width: 60%;
      background-image: linear-gradient(to right, #30cfd0, #330867);
      border: 0;
    }
  }
`