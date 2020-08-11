import React from 'react'

const EditExpensePage = (props) => {
  console.log(props)
  return <div>This is edit {props.match.params.id} page</div>
}

export default EditExpensePage
