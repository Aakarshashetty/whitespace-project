import React from "react";

const SectionOne = () => {
  return (
    <div className="flex py-[140px] gap-10 px-[220px]">
      <div className="flex flex-col gap-[24px]">
        <h1 className="text-[40px] font-semibold">
          Get More Done with whitepace
        </h1>
        <p className="text-sm">
          Project management software that enables your teams to collaborate,
          plan, analyze and manage everyday tasks
        </p>
        <div>
          <button className="bg-primary-color-two rounded-md p-2 text-sm">
            Try Whitespace free
          </button>
        </div>
      </div>
      <img
        src="/images/Image-container.jpg"
        alt="landing-image"
        className="w-[524px] h-[449px]"
      />
    </div>
  );
};

export default SectionOne;
