import React from 'react'

const Checkbox = (props) => {

  const { checkFile, checked, id } = props
  console.log(checked)

  const changeCheckbox = (id, checked) => {
    checkFile(id, checked)
  }

  return (
    <div>
      <input type="checkbox"
      checked={checked}
      onChange={() => changeCheckbox(id, checked)}></input>
    </div>
  )
}

export default Checkbox