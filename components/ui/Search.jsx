import React from "react";
import OutsideClickHandler from "react-outside-click-handler";
import Title from "./Title";
import Image from "next/image";
import {GiCancel} from "react-icons/gi"

const Search = ({ setIsSearchModal }) => {
  return (
    <div className="fixed top-0 left-0 w-screen h-screen z-50 
    after:content-[''] after:w-screen after:h-screen after:bg-white 
    after:absolute after:top-0 after:left-0 after:opacity-60 grid place-content-center">
      <OutsideClickHandler onOutsideClick={() => setIsSearchModal(false)}>
        <div className="w-full h-full grid place-content-center relative">
          {/*Burda ki mentiq odur ki bu titlenin icerisine ne yazsam onu gosterecek Title componentinde childiren propu vasitesi ile */}
          <div className="relative z-50 md:w-[600px] w-[370px]   bg-white border-2 p-10 rounded-3xl">
            <Title className="text-[40px] text-center">Search</Title>
            <input type="text" placeholder="search..." className="border w-full my-10"  />
                <ul>
                    <li className="flex items-center justify-between p1
                    hover:bg-primariy transition-all
                    ">
                        <div className="relative flex">
                         <Image src="/images/f1.png" alt="" width={48} height={48}/>
                         </div>
                         <span className="font-bold">Good Pizza</span>
                         <span className="font-bold">$10</span>
                    </li>
                    <li className="flex items-center justify-between p1
                    hover:bg-primariy transition-all
                    ">
                        <div className="relative flex">
                         <Image src="/images/f1.png" alt="" width={48} height={48}/>
                         </div>
                         <span className="font-bold">Good Pizza</span>
                         <span className="font-bold">$10</span>
                    </li>
                    <li className="flex items-center justify-between p1
                    hover:bg-primariy transition-all
                    ">
                        <div className="relative flex">
                         <Image src="/images/f1.png" alt="" width={48} height={48}/>
                         </div>
                         <span className="font-bold">Good Pizza</span>
                         <span className="font-bold">$10</span>
                    </li>
                </ul>
                <button className="absolute top-4 right-4" onClick={() => setIsSearchModal(false)}>
                    <GiCancel size={30}  className=" transition-all"/>
                </button>
          </div>
        </div>
      </OutsideClickHandler>
    </div>
  );
};

export default Search;
