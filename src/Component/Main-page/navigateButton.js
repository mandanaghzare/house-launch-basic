import React, { useState } from 'react'
import { BsFillArrowUpCircleFill } from "react-icons/bs";

function NavigateButton({onClick}) {
  return (
      <button type='button' className="navigateButton" onClick={onClick}>
        <BsFillArrowUpCircleFill />
      </button>
  )
}

export default NavigateButton;