import React, { useState } from 'react'
import { BsFillArrowUpCircleFill } from "react-icons/bs";

function NavigateButton(props) {
  return (
      <button type='button' className="navigateButton" onClick={props.data}>
        <BsFillArrowUpCircleFill />
      </button>
  )
}

export default NavigateButton;