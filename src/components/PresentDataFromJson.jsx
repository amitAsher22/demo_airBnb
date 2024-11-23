// /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css"; // ייבוא סגנונות Swiper
import { Pagination } from "swiper"; // ניווט באמצעות נקודות
import "../style/PresentDataFromJson.css";
import information from "../../public/data.json";
import { IoMdHeartEmpty } from "react-icons/io";
import { FcLike } from "react-icons/fc";

const PresentDataFromJson = () => {
  const [data, setData] = useState([]);
  const [like, setLike] = useState(null);
  const [toggle, setToggle] = useState(false);

  useEffect(() => {
    setData(information);
  }, []);

  const toggleLike = (id) => {
    setData((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, like: !item.like } : item
      )
    );
  };

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
            {item.image.map((image, index) => (
              <SwiperSlide key={index}>
                <img
                  src={image}
                  alt={`Slide ${index}`}
                  className="card-image"
                />
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="card-info">
            {/* {toggle ? (
              <IoMdHeartEmpty
                onClick={() => changeLike(index)}
                className={like === index ? "hidden" : "show"}
              />
            ) : (
              <FcLike
                onClick={() => changeLike(index)}
                className={index === item.id ? "show" : "show"}
              />
            )} */}

            <span onClick={() => toggleLike(item.id)}>
              {item.like ? "❤️" : "🤍"}
            </span>

            <h3 className="card-title">{item.title}</h3>
            <p className="card-price">{item.price}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PresentDataFromJson;
