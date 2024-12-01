import React, { useEffect, useState, useContext } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";
import { Pagination } from "swiper";
import "../style/PresentDataFromJson.css";
import { IoMdHeartEmpty } from "react-icons/io";
import { FcLike } from "react-icons/fc";
import { MyContext } from "../App";
import { DataContext } from ".././contexts/DataContext";

const PresentDataFromJson = () => {
  const { datatNew, setInfoata } = useContext(DataContext);

  const [like, setLike] = useState(null);
  const [toggle, setToggle] = useState(false);

  useEffect(() => {
    setInfoata(datatNew);
  }, []);

  // function Present Unlike And Like
  const toggleLike = (id) => {
    setInfoata((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, like: !item.like } : item
      )
    );
  };

  return (
    <>
      <div className="card-container">
        {datatNew.map((item, index) => (
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
              <span className="LikeUnLike" onClick={() => toggleLike(item.id)}>
                {item.like ? <FcLike /> : <IoMdHeartEmpty />}
              </span>

              <h3 className="card-title">{item.title}</h3>
              <p className="card-price">{item.price}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default PresentDataFromJson;
