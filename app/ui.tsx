"use client";

import DropboxImageList from "components/dropbox-image-list";
import FileDragDropZone from "components/file-dragdropzone";
import Logo from "components/logo";
import SearchComponent from "components/search-component";
import { useState } from "react";

export default function UI() {
  const [searchInput, setSearchInput] = useState("");

  return (
    <main className="w-full p-2 flex flex-col gap-4">
      {/* logo */}
      <Logo />

      {/* search component */}
      <SearchComponent
        searchInput={searchInput}
        setSearchInput={setSearchInput}
      />

      {/* file drag/drop zone */}
      <FileDragDropZone />

      {/* dropbox list */}
      <DropboxImageList searchInput={searchInput} />
    </main>
  );
}
