import React, { useEffect } from "react";
import { render } from "react-dom";
// import  {OnfidoSDK} from "onfido-sdk-ui";
import "onfido-sdk-ui/dist/style.css";
import axios from "axios";
import cors from 'cors';
import * as OnfidoSDK from "onfido-sdk-ui/dist/onfido.min.js";
// var OnfidoSDK = require('onfido-sdk-ui/dist/onfidoAuth.min.js')


let onfidoToken;
// const onfidoContainerId = "onfido-sdk-wrapper";

const Onfido = () => {
  let config = {
    headers: {
      Authorization: `Token token=api_sandbox.VakqVqrE8zA.m7BFiRZPO7tal_neUi2Ca5AOubTcudWf`,
      Accept: "application/json",
    },
  };

  const obj2 = {
    applicant_id: '24120550-81d0-40e5-bab1-90c93bedb3a6',
    referrer: `${window.location.origin}/`
    // "cross_device_url": `${window.location.origin}/`
  };

//   useEffect(() => {
//     const fetchData = async () => {
//       const myFunction = async () => {
//         const response = await  axios.post('https://api.eu.onfido.com/v3.4/sdk_token', obj2, config);
//         console.log(response,"new response");
//         const data = await response.json();
//         return data;
//       };

//       const corsFunction = cors()(myFunction);
//       const data = await corsFunction();

//  console.log(data,"data");
//     };

//     fetchData();
//   }, []);

  useEffect(() => {
;
    axios.post(`/sdk_token`, obj2, config).then((res) => {
      console.log(res, "resss");
      onfidoToken = res.data.token
      if (onfidoToken)
      OnfidoSDK.init({
          token: onfidoToken,
          containerId: 'onfido-sdk-wrapper',
          // crossDeviceClientIntroProductName: 'For  Flexm'
        });
    }).catch((err) => {
      console.log(err, "sdk err");
    })
     ;
  
  }, []);

  return <div id='onfido-sdk-wrapper' />;
};


render(<Onfido />, document.getElementById("root"));
