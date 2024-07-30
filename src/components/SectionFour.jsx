import React from 'react'

const SectionFour = () => {
  return (
    <div className="flex py-[140px] gap-10 px-[220px]">
      <div className="flex flex-col gap-[24px]">
        <h1 className="text-[40px] font-semibold">Use as Extension</h1>
        <p className="text-sm">
          Use the web clipper extension, available on Chrome and Firefox, to
          save web pages or take screenshots as notes.
        </p>
        <div>
          <button className="bg-primary-color-two rounded-md p-2 text-sm">
            Let's Go
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
}

export default SectionFour