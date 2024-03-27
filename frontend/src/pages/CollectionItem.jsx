import { useState } from "react";
import { useParams, Link } from "react-router-dom";

import Headings from "../components/Headings";
import MainContainer from "../components/MainContainer";
import {
  firstLetterToUpperCase,
  filterDuplicate,
  getCount,
  getSpecificCollections,
} from "../helpers/filter";
import data from "../../data";
import Shelf from "../components/Shelf";

const CollectionItem = function () {
  const { libraryId } = useParams();
  const [dataCollections, setDataCollections] = useState(data);
  const [state, setState] = useState(data);

  return (
    <MainContainer>
      <Headings children={` ${firstLetterToUpperCase(libraryId)} collection`} />

      <Shelf dataCollection={state} query={libraryId} />

      {/* <div className="w-full flex gap-10 flex-wrap ">
        {getSpecificCollections(state, libraryId).map((item) =>
          item.name ? (
            <section key={item.id} className="w-52 h-40 border rounded">
              <p className="text-sm text-center"> {item.name} </p>
            </section>
          ) : null
        )}
      </div> */}
    </MainContainer>
  );
};

export default CollectionItem;
