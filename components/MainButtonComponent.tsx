import React, { FC } from "react";
import classNames from "classnames";
import s from "./MainButtonComponent.module.scss";
import Image from "next/image";
import MainArrowVector from "@/images/page-element/MainArrowVector.svg";

interface MainButtonProps {
  text: string;
  showArrow?: boolean;
  backgroundColor: "yellow" | "blue";
  textColor?: "textBlue";
}

const MainButtonComponent: FC<MainButtonProps> = ({
  text,
  showArrow = false,
  backgroundColor,
  textColor,
}) => {
  const buttonClassName = classNames(s.main__button);
  const textClassName = classNames(textColor && s[textColor]);

  const buttonStyle = {
    backgroundColor: backgroundColor === "yellow" ? "#ffe492" : "#70a1ff",
  };

  return (
    <button className={buttonClassName} style={buttonStyle} type="submit">
      <span className={textClassName}>{text}</span>
      {showArrow && (
        <Image
          className={s.main__arrow}
          src={MainArrowVector}
          alt="MainArrowVector"
        />
      )}
    </button>
  );
};

export default MainButtonComponent;
