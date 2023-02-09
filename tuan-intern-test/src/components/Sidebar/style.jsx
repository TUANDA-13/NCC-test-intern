import styled from "styled-components";
export const StyledSidebar = styled.div`
  .sidebar {
    display: flex;
    flex-direction: column;
    background-color: #191718;
    /* height: 100%; */
    .menu-item {
      height: 44px;
      color: #aaaaaa;
      font-weight: 700;
      font-size: 16px;
      line-height: 18.75px;
      display: flex;
      align-items: center;
      padding-left: 16px;
      border-bottom: 1px solid #5c5c5c;
      :hover {
        background-color: #5c5c5c;
        cursor: pointer;
        color: white;
      }
    }
    .toggle {
      color: white;
      height: 44px;
      font-weight: 700;
      display: none;
      font-size: 25px;
      :hover{
        cursor: pointer;
      }
    }
  }
  @media (max-width: 1200px) {
    .sidebar {
      width: 100%;
      height: auto;
      justify-items: right;
      align-items: flex-end;
      .toggle {
        display: block;
        width: 50px;
      }
    }
    .container {
      display: none;
    }
    .discription {
      padding: 38px 38px;
    }
  }
`;
