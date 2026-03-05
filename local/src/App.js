import React from "react";
import FormPost from "./form-post";
import RestBasic from "./rest-basic";
import FormGet from "./form-get";

export default function App(){
  return(
    <div> 
  <RestBasic/> <hr/>
  <FormGet/> <hr/>
  <FormPost/> <hr/>
  </div>
  )

}