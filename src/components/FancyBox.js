import React from "react";

const FancyBox = ({
  content,
  shadowColor = "pink",
  top = "top-2",
  left = "left-2",
  hasBlackShadowOnHover = false,
}) => {
  const colorVariants = {
    pink: "bg-primary-pink",
    seaGreen: "bg-primary-sea-green",
    lightBlue: "bg-primary-light-blue",
    green: "bg-primary-green",
    magenta: "bg-primary-magenta",
    black: "bg-primary-black",
  };

  const borderClassOnHover = hasBlackShadowOnHover
    ? "group-hover:bg-black group-focus:bg-black"
    : "";

  return (
    <div class="group relative m-8 w-fit h-fit">
      <div class="relative left-0 top-0 z-10 flex flex-col justify-between rounded border border-black bg-neutral-100">
        {content}
      </div>
      <div
        class={`absolute ${left} ${top} z-0 h-full w-full rounded border border-black ${borderClassOnHover} ${colorVariants[shadowColor]}`}
      ></div>
    </div>
  );
};

export default FancyBox;
