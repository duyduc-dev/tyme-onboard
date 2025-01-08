import ListLevel from "../../components/ListLevel";

const GameHomePage = () => {
  return (
    <div className="min-h-screen bg-[#142025] pb-[100px]">
      <div className="max-w-[1200px] mx-auto w-full pb-[56px] px-4">
        <div className="h-[100px] flex items-center">
          <div className="flex items-center justify-between w-full">
            <img
              src="https://vietnam.tyme.com/wp-content/uploads/2022/10/TymeX_1_white-3-1.png"
              alt=""
              className="object-cover h-[40px]"
            />
            <img
              src="https://online.fliphtml5.com/adgbw/bzjk/files/extfile/booklogo.png?1725187880&20211006172002"
              alt=""
              className="object-cover h-[40px]"
            />
          </div>
        </div>
        <div className="relative flex gap-10">
          <div className="flex-1">
            <div className="flex items-center mx-auto mb-5">
              <div className="flex items-center w-full gap-1">
                <div className="h-[2px] flex-1  bg-[rgb(82,101,109)] rounded"></div>
                <div className="flex-1 text-center text-[rgb(82,101,109)] text-[18px] font-bold">
                  Get started
                </div>
                <div className="h-[2px] flex-1  bg-[rgb(82,101,109)] rounded"></div>
              </div>
            </div>
            <div className="mb-10">
              <ListLevel />
            </div>
            <div className="flex items-center mx-auto mb-5">
              <div className="flex items-center w-full gap-1">
                <div className="h-[2px] flex-1 bg-[rgb(82,101,109)] rounded"></div>
                <div className="flex-1 text-center text-[rgb(82,101,109)] text-[18px] font-bold">
                  Introduce yourself
                </div>
                <div className="h-[2px] flex-1  bg-[rgb(82,101,109)] rounded"></div>
              </div>
            </div>
            <div className="mb-10">
              <ListLevel
                invert
                logoUrl="https://d35aaqx5ub95lt.cloudfront.net/images/pathCharacters/dark/a3e1fd17f6d11b10ecae6bf5bc1ca701.svg"
              />
            </div>
            <div className="flex items-center mx-auto mb-5">
              <div className="flex items-center w-full gap-1">
                <div className="h-[2px] flex-1 bg-[rgb(82,101,109)] rounded"></div>
                <div className="flex-1 text-center text-[rgb(82,101,109)] text-[18px] font-bold">
                  Talk about your objects
                </div>
                <div className="h-[2px] flex-1  bg-[rgb(82,101,109)] rounded"></div>
              </div>
            </div>
            <div className="mb-10">
              <ListLevel logoUrl="https://d35aaqx5ub95lt.cloudfront.net/images/pathCharacters/dark/a3e1fd17f6d11b10ecae6bf5bc1ca701.svg" />
            </div>
          </div>
          <div className="relative">
            <div className="sticky top-[56px] z-[999]">
              <div className="border-[2px] w-[350px] border-[rgb(82,101,109)] px-4 py-3 rounded-[12px]">
                <p className="font-bold text-white">Daily tasks</p>
                <div className="flex items-center gap-2 mt-8">
                  <img
                    src="https://d35aaqx5ub95lt.cloudfront.net/images/goals/2b5a211d830a24fab92e291d50f65d1d.svg"
                    alt=""
                  />
                  <div className="flex items-center flex-1 gap-2">
                    <div className="bg-[rgb(82,101,109)] h-[18px] rounded-xl flex-1 text-center text-[13px] font-bold leading-2 text-white">
                      8/20
                    </div>
                    <img src="https://d35aaqx5ub95lt.cloudfront.net/images/goals/df7eda7cc1cc833ba30cd1e82781b68f.svg" />
                  </div>
                </div>
              </div>
              <div className="border-[2px] w-[350px] border-[rgb(82,101,109)] px-4 py-3 rounded-[12px] mt-5">
                <p className="font-bold text-white">Unlock Leaderboards!</p>
                <div className="flex items-center gap-2 mt-8">
                  <img
                    src="https://d35aaqx5ub95lt.cloudfront.net/images/goals/2b5a211d830a24fab92e291d50f65d1d.svg"
                    alt=""
                  />
                  <div className="flex items-center flex-1 gap-2">
                    <div className="bg-[rgb(82,101,109)] h-[18px] rounded-xl flex-1 text-center text-[13px] font-bold leading-2 text-white">
                      8/20
                    </div>
                    <img src="https://d35aaqx5ub95lt.cloudfront.net/images/goals/df7eda7cc1cc833ba30cd1e82781b68f.svg" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GameHomePage;
