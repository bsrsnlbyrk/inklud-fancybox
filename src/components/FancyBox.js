import React from "react";

const FancyBox = ({
  content,
  shadowColor = "pink",
  top = "top-2",
  left = "left-2",
  hasBlackShadowOnHover = false,
}) => {
  const colorVariants = {
    pink: "primary-pink",
    seaGreen: "primary-sea-green",
    lightBlue: "primary-light-blue",
    green: "primary-green",
    magenta: "primary-magenta",
    black: "primary-black",
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
        class={`absolute ${left} ${top} z-0 h-full w-full rounded border border-black ${borderClassOnHover} bg-${colorVariants[shadowColor]}`}
      ></div>
    </div>
  );
};

export default FancyBox;
