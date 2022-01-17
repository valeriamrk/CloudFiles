import React from "react";
import { FilesDownloader } from "../../components/presentational";
import { RenameFolder,DeleteFolder } from "../../components/presentational";

const RecycleBin = () => {
  return (
    <div>
      <h3>Recycle bin</h3>
      <DeleteFolder />
    </div>
  );
};

export { RecycleBin };
