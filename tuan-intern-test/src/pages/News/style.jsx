import styled from "styled-components";
export const StyledNews = styled.div`
  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px 129px;
    .content {
      overflow-y: scroll;
    }
  }

  .logo {
    width: 310px;
  }
  .discription {
    margin-top: 30px;
    background-color: #efefef;
    padding: 38px 269px;
    &-title {
      font-style: normal;
      font-weight: 700;
      font-size: 18px;
      line-height: 21px;
    }
    &-content {
      font-style: normal;
      font-weight: 400;
      font-size: 16px;
      line-height: 19px;
      display: flex;
      align-items: center;
      text-align: center;
    }
  }
  .list-item {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }

  @media (max-width: 1400px) {
    .container {
      padding: 20px 80px;
    }
    .discription {
      padding: 38px 100px;
    }
  }
  @media (max-width: 1200px) {
    .container {
      padding: 20px 80px;
    }
    .discription {
      padding: 38px 38px;
    }
    .list-item {
      flex-direction: column;
    }
  }
  @media (max-width: 600px) {
    .container {
      padding: 20px 20px;
    }
    .discription {
      padding: 20px 20px;
    }
    .list-item {
      flex-direction: column;
    }
  }
`;
