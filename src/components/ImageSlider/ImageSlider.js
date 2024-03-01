import { useState } from "react";
import dummyData from "./dummyData.json";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

export default function ImageSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);

  function handlePrevious() {
    setCurrentSlide(
      currentSlide === 0 ? dummyData.length - 1 : currentSlide - 1
    );
  }

  function handleNext() {
    setCurrentSlide(
      currentSlide === dummyData.length - 1 ? 0 : currentSlide + 1
    );
  }
  return (
    <>
      <div class="ImageSlider flex justify-center items-center relative w-[100%]">
        <ArrowBackIosIcon
          onClick={handlePrevious}
          className="absolute text-[black] left-[1rem]"
        />
        {dummyData && dummyData.length
          ? dummyData.map((item, index) => (
              <img
                className={currentSlide === index ? "current-image" : "hidden"}
                key={item.id}
                src={item.url}
                alt={item.url}
              ></img>
            ))
          : null}
        <ArrowForwardIosIcon
          onClick={handleNext}
          className="absolute text-[black] right-[1rem]"
        />
        <span className="flex absolute bottom-[1rem]  z-10">
          {dummyData && dummyData.length > 0
            ? dummyData.map((_, index) => (
                <button
                  onClick={() => {
                    setCurrentSlide(index);
                  }}
                  className={
                    currentSlide === index
                      ? "bg-[#ffffff] m-[4px] w-[8px] h-[8px] rounded-lg"
                      : "bg-[gray] m-[4px] w-[8px] h-[8px] rounded-lg"
                  }
                ></button>
              ))
            : null}
        </span>
      </div>
    </>
  );
}
