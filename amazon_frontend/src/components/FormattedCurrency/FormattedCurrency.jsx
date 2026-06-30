import numeral from "numeral"



import React from 'react'

function FormattedCurrency({amount}) {

    const formattedAmount=numeral(amount).format("$0,0.00")

  return <div>{formattedAmount}</div>;
  
}

export default FormattedCurrency