import clsx from "clsx";

const Layout = ({ children, className, ...rest }) => {
  return (
    <div className="">
      <header className="bg-[#262626] h-[56px] flex items-center fixed top-0 left-0 right-0 z-10">
        <div className="max-w-[800px] w-full px-4 mx-auto flex items-center justify-between">
          <img
            src="https://vietnam.tyme.com/wp-content/uploads/2022/10/TymeX_1_white-3-1.png"
            alt=""
            className="object-cover h-[40px]"
          />
          <div className="text-white">
            <img
              src="https://online.fliphtml5.com/adgbw/bzjk/files/extfile/booklogo.png?1725187880&20211006172002"
              alt=""
              className="object-cover h-[40px]"
            />
          </div>
        </div>
      </header>
      <div className="min-h-screen bg-[url(https://vietnam.tyme.com/template/assets/images/high-br.png)] bg-no-repeat bg-cover ">
        <div
          className={clsx("max-w-[800px] px-4 pb-10 mx-auto pt-[120px]", className)}
          {...rest}
        >
          {children}
        </div>
      </div>
    </div>
  );
};

export default Layout;
