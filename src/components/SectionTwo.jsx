import React from 'react'

const SectionTwo = () => {
  return (
    <div className="flex py-[140px] gap-10 px-[220px] bg-white text-black">
      <div className="flex flex-col gap-[24px]">
        <h1 className="text-[40px] font-semibold">Project Management</h1>
        <p className="text-sm">
          Images, videos, PDFs and audio files are supported. Create math
          expressions and diagrams directly from the app. Take photos with the
          mobile app and save them to a note.
        </p>
        <div>
          <button className="bg-primary-color-two rounded-md p-2 text-sm">
            Get Started
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

export default SectionTwo