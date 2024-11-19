// /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css"; // ייבוא סגנונות Swiper
import { Pagination } from "swiper"; // ניווט באמצעות נקודות
import "../style/PresentDataFromJson.css";
import information from "../../public/data.json";

// מערך נתונים לדוגמה
// const data = [
//   {
//     images: [
//       "https://images.pexels.com/photos/14142284/pexels-photo-14142284.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
//       "https://images.pexels.com/photos/19264436/pexels-photo-19264436/free-photo-of-two-young-fashionable-women-standing-in-front-of-a-crowd.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
//     ],
//     title: "מוצר 1",
//     price: "₪100",
//   },
//   {
//     images: [
//       "https://images.pexels.com/photos/20817755/pexels-photo-20817755/free-photo-of-studio-shot-of-a-young-woman-wearing-a-black-dress-and-a-black-coat.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
//       "https://images.pexels.com/photos/14208346/pexels-photo-14208346.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
//     ],
//     title: "מוצר 2",
//     price: "₪200",
//   },
//   {
//     images: [
//       "https://via.placeholder.com/150/800080",
//       "https://via.placeholder.com/150/FFA500",
//     ],
//     title: "מוצר 3",
//     price: "₪300",
//   },
//   {
//     images: [
//       "https://via.placeholder.com/150/800080",
//       "https://via.placeholder.com/150/FFA500",
//     ],
//     title: "מוצר 3",
//     price: "₪300",
//   },
// ];

const PresentDataFromJson = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    setData(information);
  }, []);

  console.log(data);

  return (
    <div className="card-container">
      {data.map((item, index) => (
        <div className="card" key={index}>
          <Swiper
            modules={[Pagination]}
            loop={false}
            pagination={{
              clickable: true, // נקודות לחיצות
              type: "bullets", // נקודות ניווט
            }}
            spaceBetween={5} // רווח בין תמונות
            slidesPerView={1} // הצגת תמונה אחת בכל פעם
          >
            {item.image.map((image, idx) => (
              <SwiperSlide key={idx}>
                <img src={image} alt={`Slide ${idx}`} className="card-image" />
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="card-info">
            <h3 className="card-title">{item.title}</h3>
            <p className="card-price">{item.price}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PresentDataFromJson;
