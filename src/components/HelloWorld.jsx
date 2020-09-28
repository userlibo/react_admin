import React,{useState} from 'react'
import {Button,message}from "antd"
export default function()
{
    const handlerClick=()=>{
      message.success("触发成功了...");
    }
 return (
<div>
    <Button type="primary" onClick={handlerClick}>点击</Button>
</div>
)
}