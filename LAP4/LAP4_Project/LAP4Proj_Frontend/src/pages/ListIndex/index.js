import React, { useEffect, useRef, useState } from "react";
import "./style.css";
import { NavLink } from "react-router-dom";
import { ListCard, AddButton } from "../../components";
import { useSelector, connect } from "react-redux";
import Icon from '@mdi/react'
import { mdiClipboardListOutline } from '@mdi/js'


const ListIndex = () => {
  const [list, setlist] = useState([]);

  const listIndex = useSelector((state) => state.list);
  console.log(listIndex);

  const renderLists = () =>
    listIndex.result.map((x) => <ListCard key={x.id} id={x.id} name={x.name} iconClass={x.thumb} border={x.colour} />);
  return (
    <div className="min-w-screen min-h-screen gradscheme flex items-center p-20 ">
      <div id="mapBox" className="flex-1 rounded-3xl bg-white shadow-xl lg:p-20 flex items-center text-center overflow-scroll ">




        <div class=" mx-auto w-full">
          <div className="flex flex-row justify-between"><h3 className="text-4xl font-semibold leading-normal text-center">
            Lists
          </h3>

            <button
              className="gradscheme transform transition-all hover:scale-110 active:bg-lightBlue-600 uppercase text-white font-bold hover:shadow-md shadow text-xs px-4 py-2 rounded-md outline-none focus:outline-none sm:mr-2 mb-1 md:pt-3 md:pr-5 ease-linear transition-all duration-150"
              type="button"

            >
              <Icon path={mdiClipboardListOutline}
                title="Add List"
                size={1}
                className="inline md:mb-1 md:mr-1"
              /> <span className="hidden md:inline-block"> Add List </span>
            </button>


          </div>
          <div className="grid grid-cols-3 lg:grid-cols-1 gap-5 mx-24 w-auto h-full">
            {renderLists()}
          </div>
        </div>






      </div>
    </div>


  );
};

export default ListIndex;
