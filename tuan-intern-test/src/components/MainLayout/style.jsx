import styled from "styled-components";
export const StyledMainLayout = styled.div`
  .main {
    display: flex;
    flex-direction: row;

    .sidebar {
      width: 150px;
      height: 100vh;
    }
    .right-layout {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    }
    .copyright {
      padding: 30px 129px;
      border-top: 1px solid #dedede;
      text-align: left;
      bottom: 0px;
    }
  }
  @media (max-width: 1200px) {
    .main {
        flex-direction: column;
        
        .sidebar{
            width: 100%;
            height:auto;
        }
        .copyright{
            text-align: center;
        }
    }
  }
`;