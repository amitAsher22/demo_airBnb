// /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

import React, { useEffect, useState, useContext } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css"; // ייבוא סגנונות Swiper
import { Pagination } from "swiper"; // ניווט באמצעות נקודות
import "../style/PresentDataFromJson.css";
// import information from "../../public/data.json";
import { IoMdHeartEmpty } from "react-icons/io";
import { FcLike } from "react-icons/fc";
import { MyContext } from "../App";

const PresentDataFromJson = () => {
  const { datat, setInfoata, infoData, setInfoData, setNameFilter } =
    useContext(MyContext);

  const [like, setLike] = useState(null);
  const [toggle, setToggle] = useState(false);

  useEffect(() => {
    setInfoData(infoData);
  }, []);

  const toggleLike = (id) => {
    setInfoData((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, like: !item.like } : item
      )
    );
  };

  return (
    <div className="card-container">
      {infoData.map((item, index) => (
        <div className="card" key={index}>
          <Swiper
            modules={[Pagination]}
            loop={false}
            pagination={{
              clickable: true,
              type: "bullets",
            }}
            spaceBetween={5}
            slidesPerView={1}
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
            <span onClick={() => toggleLike(item.id)}>
              {item.like ? <FcLike /> : <IoMdHeartEmpty />}
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
