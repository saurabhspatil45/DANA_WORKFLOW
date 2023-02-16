import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { getSingleNcrData } from "../../services/ncrServices";
function Workdetails() {
    const dispatch = useDispatch();
const id = localStorage.getItem("workId");
useEffect(() => {
    dispatch(getSingleNcrData(id))


}, [])

    const {  data2 } = useSelector(
        (state) => state.NcrReducer
    );
const d1 = {...data2[0]}
const d2 = {...d1}
console.log(d2['data'])

return (
    <div>Workdetails</div>
  )
}

export default Workdetails