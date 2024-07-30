import React from 'react'

const SectionThree = () => {
  return (
    <div className="flex py-[140px] gap-10 px-[220px] bg-white ">
      <img
        src="/images/section-image.jpg"
        alt="landing-image"
        className="w-[524px] h-[449px]"
      />
      <div className="flex flex-col gap-[24px] text-black">
        <h1 className="text-[40px] font-semibold">Work together</h1>
        <p className="text-sm">
          With whitepace, share your notes with your colleagues and collaborate
          on them. You can also publish a note to the internet and share the URL
          with others.
        </p>
        <div>
          <button className="bg-primary-color-two rounded-md p-2 text-sm">
            Try it now
          </button>
        </div>
      </div>
    </div>
  );
}

export default SectionThree