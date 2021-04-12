import React from "react";
import Container from '@material-ui/core/Container';
// import "./Name.css";

export const Success= () => {
  return (
    
    <Container className="address__container" maxWidth="sm" style={{ marginTop: '4rem' }}>

        <div style={{backgroundColor:"white",display:"block", alignItems:"center"}}>
             <img style={{
                        display: "block",
                        backgroundColor:"white",
                        marginLeft: "auto",
                        marginRight: "auto",
                        
                        height:"500px",
                        width: "500px",
                        }} 
                        src="https://42f2671d685f51e10fc6-b9fcecea3e50b3b59bdc28dead054ebc.ssl.cf5.rackcdn.com/illustrations/Order_confirmed_re_g0if.svg"/>

                    <h3 style={{textAlign:"center", fontWeight:"normal"}}>Thank you for placing, we will be delivering your order soon!</h3>
                </div>
      <h3></h3>
    </Container>
  );
};

export default Success