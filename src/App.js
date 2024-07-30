function App() {
  return (
    <div className="bg-primary-color-one text-white h-auto py-[16px] px-[220px]">
      <div>
        <div className="flex justify-between  items-center">
          <img src="/images/logo.jpg" alt="logo" width={191} />
          <div className="flex justify-between">
            <div className="px-5">Products</div>
            <div className="px-5">Solutions</div>
            <div className="px-5">Resources</div>
            <div className="px-5">Pricing</div>
          </div>
          <div className="flex gap-5">
            <button className="px-5 bg-[#FFE492] text-primary-color-one rounded-md text-sm">
              Login
            </button>

            <button className="bg-primary-color-two rounded-md p-2 text-sm">
              Try Whitespace free
            </button>
          </div>
        </div>

        <div className="flex py-[140px] gap-10">
          <div className="flex flex-col gap-[24px]">
            <h1 className="text-[40px] font-semibold">
              Get More Done with whitepace
            </h1>
            <p className="text-sm">
              Project management software that enables your teams to
              collaborate, plan, analyze and manage everyday tasks
            </p>
            <div>
              <button className="bg-primary-color-two rounded-md p-2 text-sm">
                Try Whitespace free
              </button>
            </div>
          </div>
          <img src="/images/Image-container.jpg" alt="landing-image" className="w-[524px] h-[449px]"/>
        </div>
      </div>
    </div>
  );
}

export default App;
