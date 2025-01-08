import { useState } from "react";
import { FaTimes } from "react-icons/fa";

import ButtonRingle from "../ButtonRingle";
import CupIcon from "../icon/Cup";
import StarIcon from "../icon/Star";
import clsx from "clsx";

import Modal from "../Modal";
import ConfettiExplosion from "react-confetti-explosion";

const ListLevel = ({ invert = false, logoUrl }) => {
  const [isShowing, setIsShowing] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const [indexActive, setIndexActive] = useState(-1);

  const answers = [
    {
      title: "1983",
      isCorrect: false,
    },
    {
      title: "1989",
      isCorrect: true,
    },
    {
      title: "2003",
      isCorrect: false,
    },
  ];

  return (
    <div className="max-w-[530px] w-full mx-auto relative">
      <div className="flex flex-col gap-4">
        <div className="flex justify-center gap-4">
          <ButtonRingle className="" active onClick={() => setIsShowing(true)}>
            <StarIcon />
          </ButtonRingle>
        </div>
        <div
          className={clsx(
            "flex justify-center gap-4 -translate-x-8",
            invert && "translate-x-8"
          )}
        >
          <ButtonRingle className="" buttonColor="#36464e">
            <StarIcon color="#52656c" />
          </ButtonRingle>
        </div>
        <div
          className={clsx(
            "flex justify-center gap-4 -translate-x-14",
            invert && "translate-x-14"
          )}
        >
          <ButtonRingle className="">
            <StarIcon color="#52656c" />
          </ButtonRingle>
        </div>
        <div
          className={clsx(
            "flex justify-center gap-4 -translate-x-8",
            invert && "translate-x-8"
          )}
        >
          <ButtonRingle className="">
            <StarIcon color="#52656c" />
          </ButtonRingle>
        </div>
        <div className="flex justify-center gap-4 -translate-x-0">
          <ButtonRingle className="">
            <CupIcon color="#52656c" />
          </ButtonRingle>
        </div>
      </div>
      <div
        className={clsx(
          "absolute top-0 bottom-0 right-0 flex items-center justify-center",
          invert && "left-0 right-auto"
        )}
      >
        <img src={logoUrl || "/robo.png"} className="w-[170px]" />
      </div>
      <Modal isShowing={isShowing} containerClassName="!bg-[#142025]">
        <div className="flex flex-col w-full h-full pt-10 mx-auto">
          <div className="flex items-center gap-4 max-w-[1000px] mx-auto w-full ">
            <button onClick={() => setIsShowing(false)}>
              <FaTimes color="#fff" size={28} />
            </button>
            <div className="flex-1">
              <div className="relative bg-[#36464e] h-[16px] rounded-xl overflow-hidden">
                <div className="bg-[#95d139] absolute top-0 bottom-0 left-0 w-[50%] rounded-xl overflow-hidden">
                  <div className="absolute bg-[#fff]/[0.3] h-[3px] top-[5%] mt-[3px] rounded left-2 right-4"></div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex-1 h-full max-w-[1000px] mx-auto w-full py-10 flex justify-center">
            <div className="flex flex-col justify-center">
              <div>
                <p className="text-[20px] font-bold text-white">
                  Do you know when TymeX was founded?
                </p>
                <img src="/people1.png" alt="" className="h-[200px]" />
              </div>
              <div className="mt-[12px]">
                {isCorrect && (
                  <ConfettiExplosion
                    {...{
                      force: 0.4,
                      duration: 2200,
                      particleCount: 30,
                      width: 400,
                      zIndex: 99999999,
                    }}
                  />
                )}
                {answers.map((answer, index) => (
                  <div
                    onClick={() => {
                      setIndexActive(index);
                      setIsCorrect(answer.isCorrect);
                    }}
                    key={index}
                    className={clsx(
                      "text-white group flex items-center gap-4 border-[rgb(82,101,109)] border-[2px] px-4 py-2 mb-4 hover:border-[rgb(24,153,214)] rounded-md cursor-pointer",
                      indexActive === index &&
                        (answer.isCorrect
                          ? "!border-[#95d139]"
                          : "!border-[#ff4d4f]")
                    )}
                  >
                    <div className="flex self-start group-hover:border-[rgb(24,153,214)] border-[rgb(82,101,109)] px-2 border-[2px] rounded-md">
                      {index + 1}
                    </div>
                    <p className="">{answer.title}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="h-[140px] border-t-[2px] border-[rgb(82,101,109)]">
            {/* <ButtonRingle>Check</ButtonRingle> */}
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default ListLevel;
