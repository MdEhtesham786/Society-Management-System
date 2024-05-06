import React,{useState} from "react"
import {Link,useLocation} from "react-router-dom"
import PropTypes from "prop-types"
const Receipt = (props)=>{
    return(
        <>
        <div>{props.page} Receipt</div>
        </>
    )
}
Receipt.propTypes = {
page:PropTypes.string
}
export default Receipt