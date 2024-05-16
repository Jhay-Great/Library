import React from "react";

import Input from "./Input";
import magnifier from '../assets/faviconio-logo/search-line.svg'

function SearchBox() {
  return (
    <section className="px-5 sm:ml-16 flex gap-5 ">
      {/* <Breadcrumbs /> */}
      <div className="relative sm:w-96 h-10 border rounded bg-transparent hidden sm:block ">
        <Input placeholder="Browser collections" />
        <img src={magnifier} alt="magnifying glass to depict search input" className="w-5 aspect-square absolute top-1/2 left-2 -translate-y-1/2" />
      </div>
      <button>Search</button>
      <button>Filter</button>
    </section>
  );
}

export default SearchBox;
