import React from "react";

//from-greenF to-greenT
//from-blueF to-blueT
//from-redF to-redT

export default function LinearButton(props: {
  color: "green" | "blue" | "red" | "white";
  borderClass?: any;
  contentClass?: any;
  children: any;
  href?: string;
  onClick?: any;
  buttonClass?: any;
}) {
  const {
    contentClass = "py-3",
    borderClass = "w-52",
    href,
    onClick,
    color,
    buttonClass,
  } = props;
  const handleLinkClick = (event: any) => {
    event.preventDefault();
    window.open(href, "_blank");
  };

  return (
    <div className={`h-full p-[3px] z-10 transition-all ${borderClass} ${buttonClass}`}>
      <button
        className={`flex h-full w-full items-center justify-center ${
          color === "red" ? "bg-primary text-white" : "bg-white text-primary"
        } bg-primary text-base font-medium ${contentClass} rounded-full`}
        onClick={
          href
            ? (e) => handleLinkClick(e)
            : onClick
            ? () => onClick()
            : () => {}
        }
      >
        <a href={href} target="_blank" rel="noopener noreferrer">
          {props.children}
        </a>
      </button>
    </div>
  );
}
