import React, { useEffect, useState } from 'react';
import SingelCard from '../SingelCard/SingelCard';
import SideCard from '../SideCard/SideCard';

const Cards = () => {

    const [card , setCard] = useState([]);
   
    const [show, setShow] = useState([]);
    const [time, setTime] = useState(0);


    useEffect(()=>{
        fetch('data.json')
            .then(res => res.json())
            .then(data => setCard(data))

    },[])


    const addToBookMark = (items) => {
     
        const findBookMark = show.find((item) => items.id === item.id);
        if (findBookMark) {
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Item is already added!",
            footer: '<a href="">Why do I have this issue?</a>',
          });
        } else {
          const SideCardShow = [...show, items];
          setShow(SideCardShow);
        }
      };
    
      const countTotalReadTime = (newTime) => {
        const storeTimeData =time + parseInt(newTime);
        setTime(storeTimeData);
      
      };
    
    
    return (
        <div className=" grid sm:grid-rows-1 lg:grid-cols-[3fr,2fr] gap-12 mt-6">
        <div className=" grid grid-cols-1 gap-6">
          {card.map(card => <SingelCard card={card} addToBookMarks={addToBookMark} totalTime={countTotalReadTime} key={card.id}></SingelCard>)}
        </div>
  
        <div >
          <div className="border-2 border-violet-500 rounded-md p-6 mb-5">
            <h2 className="text-2xl text-violet-700	font-bold">
              Spent Time on read : {time}
            </h2>
          </div>
          <div
            className="border-2
           border-slate-300 sm:h-full lg:h-3/5 rounded-md p-6 bg-gray-100"
          >
            <h2 className="text-2xl font-bold">
              Bookmarked Blogs : {show.length}
            </h2>
            {show.map((show) => (
              <SideCard showAll={show} key={show.id}></SideCard>
            ))}
          </div>
        </div>
      </div>
    );
};

export default Cards;
