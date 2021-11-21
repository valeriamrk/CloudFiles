import React from 'react'

const Checkbox = (props) => {

  const { checkFile } = props

  const changeCheckbox = (id, checked) => {
    checkFile(id, checked)
  }

  return (
    <div>
      <input type="checkbox"
      checked={props.checked}
      onChange={() => changeCheckbox(props.id, props.checked)}></input>
    </div>
  )
}

export default Checkbox