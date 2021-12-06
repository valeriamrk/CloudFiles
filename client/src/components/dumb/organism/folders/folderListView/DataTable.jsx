import * as S from "./styles";

import React from "react";

const DataTable = (props) => {
  const { data } = props;

  return (
    <S.Table>
      <tr>
        <th>Checkbox</th>
        <th>Name</th>
        <th>Modified</th>
        <th>Size</th>
      </tr>
      {data.map((element) => (
        <tr>
          <td>
            <input type="checkbox"></input>
          </td>
          <td>{element.title}</td>
          <td>{element.modified}</td>
          <td>{element.size}</td>
        </tr>
      ))}
    </S.Table>
  );
};

export default DataTable;
