import React, { useEffect } from "react";
import styled from "styled-components";
import { Oval } from "react-loader-spinner";
import { auth } from "../../Components/Firebase/firebaseConfig";

function WelcomePage() {
  let user = auth.currentUser;
  return (
    <Container>
      <div className="inner-container">
        <div className="logo">
          <img src="/app/images/logo/logo.png" alt="logo" />
          <p>Welcome to</p>
        </div>
        <div>
          <Oval
            height={150}
            width={150}
            color="#4fa94d"
            wrapperStyle={{}}
            wrapperClass=""
            visible={true}
            ariaLabel="oval-loading"
            secondaryColor="#4fa94d"
            strokeWidth={10}
            strokeWidthSecondary={9}
          />
          <p>Give us a minute....</p>
        </div>
      </div>
    </Container>
  );
}

export default WelcomePage;

const Container = styled.div`
  position: relative;
  height: 100vh;
  width: 100%;
  top: 0;
  right; 0;
  bottom: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  .inner-container{
    width: 50%;
    background-color: white;
    height: 70%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 1cm;
    border-radius: 2cm;
    border: 2px solid black;
    .logo{
      width: 70%;
      height: 5.5cm;
      position: relative;
      margin-bottom: 1cm;
      img{
        width: 100%;
        height: 100%;
      }
      p{
        position: absolute;
        top: 0;
        right: 25%;
        font-size: 2.5em;
      }
    }
  }
`;
