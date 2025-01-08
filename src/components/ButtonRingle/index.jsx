import clsx from "clsx";
import style from "./index.module.css";

const ButtonRingle = ({ children, className, active, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={clsx(
        "relative flex items-center justify-center w-[70px] h-[65px] touch-manipulation",
        className
      )}
    >
      <div
        className={clsx(
          "absolute inset-0 flex items-center justify-center z-[2] active:translate-y-1 transition-all rounded-full",
          active ? "bg-[rgb(88,204,2)]" : "bg-[#36464e]"
        )}
      >
        {children}
      </div>
      <div className={clsx(style.button, active && style.buttonActive)}></div>
    </button>
  );
};

export default ButtonRingle;
