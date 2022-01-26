import React from "react";
import * as S from "./styles"


const Checkbox = (props) => {
  const { checkFile, checked, id } = props;

  const changeCheckbox = (id, checked) => {
    checkFile(id, checked);
  };

  return (
    <div>
      <input
        id="checkbox"
        type="checkbox"
        checked={checked}
        onChange={() => changeCheckbox(id, checked)}
      />
      <label for="checkbox"></label>
    </div>
  );
};

export { Checkbox };
