import React from "react";


const Checkbox = (props) => {
  const { checkFile, checked, id } = props;

  const changeCheckbox = (id, checked) => {
    checkFile(id, checked);
  };

  return (
      <input
        id="checkbox"
        type="checkbox"
        checked={checked}
        onChange={() => changeCheckbox(id, checked)}
      />
  );
};

export { Checkbox };
