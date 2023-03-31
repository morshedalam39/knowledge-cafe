import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookmark } from "@fortawesome/free-solid-svg-icons";

const SingelCard = ({card , addToBookMarks, totalTime}) => {
    const {img ,author,author_name,date,hashTag_1,hashTag_2,read_time,title
    }=card
   
    return (
      <>
      <div className="card card-compact w-full bg-base-100 border shadow-sm rounded">
        <div>
          <img className='w-full' src={img} />
        </div>
        <div className="card-body">
          <div className="md:flex md:justify-between md:items-center">
            <div className="flex items-center gap-4 sm:mb-6">
              <div className="w-16">
              <label  className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          <img src={author} />
        </div>
      </label>
              </div>
              <div>
                <h3 className="font-bold sm:text-1xl md:text-2xl">
                  {author_name}
                </h3>
                <p>{date}</p>
              </div>
            </div>
            <div className="flex items-center sm:mt-4 md:mt-0 content-center">
              <div>
                <p className="text-1xl">{read_time} min read</p>
              </div>
              <div>
                <FontAwesomeIcon
                  onClick={() => addToBookMarks(card)}
                  className="ml-2 text-2xl cursor-pointer"
                  icon={faBookmark}
                />
              </div>
            </div>
          </div>
          <h3 className="card-title sm:text-2xl md:text-3xl">{title}</h3>
          <div className="flex gap-3">
            <div>
              <p>#{hashTag_1}</p>
            </div>
            <div>
              <p>#{hashTag_2}</p>
            </div>
          </div>
          <div className="card-actions mt-4">
            <button
              onClick={() => totalTime(read_time)}
              className="text-blue-500 cursor-pointer underline"
            >
              Make as read
            </button>
          </div>
        </div>
      </div>
    </>
    );
};

export default SingelCard;