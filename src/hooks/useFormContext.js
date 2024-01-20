import { useContext } from "react";
import FormContext from "../context/FormContext";
import React from 'react'

const useFormContext = () => {
  return useContext (FormContext)
}

export default useFormContext