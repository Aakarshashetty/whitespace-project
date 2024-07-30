import React from 'react'

const SectionFive = () => {
  return (
    <div className="flex py-[140px] gap-10 px-[220px] bg-white text-black">
      <img
        src="/images/Image-container.jpg"
        alt="landing-image"
        className="w-[524px] h-[449px]"
      />
      <div className="flex flex-col gap-[24px]">
        <h1 className="text-[40px] font-semibold">
          Customise it to your needs
        </h1>
        <p className="text-sm">
          Customise the app with plugins, custom themes and multiple text
          editors (Rich Text or Markdown). Or create your own scripts and
          plugins using the Extension API.
        </p>
        <div>
          <button className="bg-primary-color-two rounded-md p-2 text-sm text-white">
            Let's Go
          </button>
        </div>
      </div>
    </div>
  );
}

export default SectionFive