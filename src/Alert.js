import React from 'react'

function Alert(props) {

  function Capi(data)
  {
let lower=data.toLowerCase()
return lower[0].toUpperCase()+lower.slice(1)

  }
  return (

    props.alert && <div className={`alert alert-${props.alert.ty} alert-dismissible fade show  position-absolute w-100 p-2`} role="alert">
    <strong>{Capi(props.alert.ty)}</strong>:{props.alert.mess}

</div>
  )
}

export default Alert