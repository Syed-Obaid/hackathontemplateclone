import React from "react";
import { FaUser, FaShoppingBag } from "react-icons/fa";
import { FaTag } from "react-icons/fa6";
import { IoSearch } from "react-icons/io5";

function Blogdetailhero() {
  return (
    <>
      <section className="max-w-screen-2xl mx-auto px-4 sm:px-6 md:px-8  pb-10">
        <div className="flex flex-wrap justify-evenly py-8 mx-auto">
          <div>
            <div>
              <img src="/bloghero1.png" alt="" />
              <div className="flex flex-wrap space-x-5 items-center py-4">
                <p className="text-[#9F9F9F] text-[16px] flex items-center">
                  <FaUser className="mr-3" />
                  Admin
                </p>
                <p className="text-[#9F9F9F] text-[16px] flex items-center">
                  <FaShoppingBag className="mr-3" />
                  14 ocr 2022
                </p>
                <p className="text-[#9F9F9F] text-[16px] flex items-center">
                  <FaTag className="mr-3" />
                  wood
                </p>
              </div>
            </div>

            <div>
              <h1 className="text-[32px] font-semibold py-2">
                Going all-in with millennial design
              </h1>

              <p className="text-[16px] text-[#9F9F9F] max-w-4xl py-2">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nihil,
                perferendis obcaecati ratione tempore eum facilis quis odit!
                Natus, illo veritatis eum sed, quam tempora quasi at quidem
                possimus minus voluptatum!Lorem ipsum dolor sit amet
                consectetur, adipisicing elit. Nihil, perferendis obcaecati
                ratione tempore eum facilis quis odit! Natus, illo veritatis eum
                sed, quam tempora quasi at quidem possimus minus voluptatum!
              </p>
              <button className="text-[20px] border-b-2 border-black py-2">
                Read More
              </button>
            </div>

            <div>
              <img src="/bloghero2.png" alt="" />
              <div className="flex flex-wrap space-x-5 items-center py-4">
                <p className="text-[#9F9F9F] text-[16px] flex items-center">
                  <FaUser className="mr-3" />
                  Admin
                </p>
                <p className="text-[#9F9F9F] text-[16px] flex items-center">
                  <FaShoppingBag className="mr-3" />
                  14 ocr 2022
                </p>
                <p className="text-[#9F9F9F] text-[16px] flex items-center">
                  <FaTag className="mr-3" />
                  Handmade
                </p>
              </div>
            </div>

            <div>
              <h1 className="text-[32px] font-semibold py-2">
                Exploring new ways of decorating
              </h1>

              <p className="text-[16px] text-[#9F9F9F] max-w-4xl py-2">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nihil,
                perferendis obcaecati ratione tempore eum facilis quis odit!
                Natus, illo veritatis eum sed, quam tempora quasi at quidem
                possimus minus voluptatum!Lorem ipsum dolor sit amet
                consectetur, adipisicing elit. Nihil, perferendis obcaecati
                ratione tempore eum facilis quis odit! Natus, illo veritatis eum
                sed, quam tempora quasi at quidem possimus minus voluptatum!
              </p>
              <button className="text-[20px] border-b-2 border-black py-2">
                Read More
              </button>
            </div>

            <div>
              <img src="/bloghero3.png" alt="" />
              <div className="flex flex-wrap space-x-5 items-center py-4">
                <p className="text-[#9F9F9F] text-[16px] flex items-center">
                  <FaUser className="mr-3" />
                  Admin
                </p>
                <p className="text-[#9F9F9F] text-[16px] flex items-center">
                  <FaShoppingBag className="mr-3" />
                  14 ocr 2022
                </p>
                <p className="text-[#9F9F9F] text-[16px] flex items-center">
                  <FaTag className="mr-3" />
                  wood
                </p>
              </div>
            </div>

            <div>
              <h1 className="text-[32px] font-semibold py-2">
                Handmade pieces that took time to make
              </h1>

              <p className="text-[16px] text-[#9F9F9F] max-w-4xl py-2">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nihil,
                perferendis obcaecati ratione tempore eum facilis quis odit!
                Natus, illo veritatis eum sed, quam tempora quasi at quidem
                possimus minus voluptatum!Lorem ipsum dolor sit amet
                consectetur, adipisicing elit. Nihil, perferendis obcaecati
                ratione tempore eum facilis quis odit! Natus, illo veritatis eum
                sed, quam tempora quasi at quidem possimus minus voluptatum!
              </p>
              <button className="text-[20px] border-b-2 border-black py-2">
                Read More
              </button>
            </div>
          </div>

          <div>
            <div className="flex flex-col md:flex-row lg:flex-col items-center md:gap-5 lg:gap-0 space-y-5 py-5">
              <div>
                <p className="relative">
                  <input
                    type="text"
                    name=""
                    id=""
                    className="border-2 border-[#9F9F9F] py-2 rounded"
                  />
                  <IoSearch className="text-2xl absolute right-4 bottom-3 " />
                </p>

                <h1 className="font-semibold text-[28px] py-8">Categories</h1>
                <div className="flex flex-col space-y-10 py-5">
                  <p className="text-[16px] text-[#9F9F9F] flex flex-wrap justify-between  ">
                    <span>Crafts </span>
                    <span className="text-end">2</span>
                  </p>
                  <p className="text-[16px] text-[#9F9F9F] flex flex-wrap justify-between ">
                    <span>Design </span>
                    <span className="text-end">8</span>
                  </p>
                  <p className="text-[16px] text-[#9F9F9F] flex flex-wrap justify-between ">
                    <span>Handmade </span>
                    <span className="text-end">7</span>
                  </p>
                  <p className="text-[16px] text-[#9F9F9F] flex flex-wrap justify-between ">
                    <span>Interior </span>
                    <span className="text-end">1</span>
                  </p>
                  <p className="text-[16px] text-[#9F9F9F] flex flex-wrap justify-between ">
                    <span>wood </span>
                    <span className="text-end">6</span>
                  </p>
                </div>
              </div>

              <div className="pt-5">
                <h1 className="font-semibold text-[28px] py-8">Recent Posts</h1>
                <div className="flex flex-col space-y-10 py-5">
                  <p className="text-[16px] text-[#9F9F9F] flex flex-wrap justify-between  space-x-4">
                    {" "}
                    <img src="blogsmall1.png" alt="" />
                    <p className="flex flex-col justify-center items-center ">
                      <span className=" w-[10rem] text-black ">
                        Going all-in with millennial design
                      </span>
                      <span className="text-[12px] text-[#9F9F9F]">
                        03 Aug 2022
                      </span>
                    </p>
                  </p>
                  <p className="text-[16px] text-[#9F9F9F] flex flex-wrap justify-between space-x-4">
                    {" "}
                    <img src="blogsmall2.png" alt="" />
                    <p className="flex flex-col justify-center items-center ">
                      <span className=" w-[10rem] text-black ">
                        Exploring new ways of decorating
                      </span>
                      <span className="text-[12px] text-[#9F9F9F]">
                        03 Aug 2022
                      </span>
                    </p>
                  </p>
                  <p className="text-[16px] text-[#9F9F9F] flex flex-wrap justify-between space-x-4">
                    {" "}
                    <img src="blogsmall3.png" alt="" />
                    <p className="flex flex-col justify-center items-center ">
                      <span className=" w-[10rem] text-black ">
                        Handmade pieces that took time to make
                      </span>
                      <span className="text-[12px] text-[#9F9F9F]">
                        03 Aug 2022
                      </span>
                    </p>
                  </p>
                  <p className="text-[16px] text-[#9F9F9F] flex flex-wrap justify-between space-x-4">
                    {" "}
                    <img src="blogsmall4.png" alt="" />
                    <p className="flex flex-col justify-center items-center ">
                      <span className=" w-[10rem] text-black ">
                        Modern home in Milan
                      </span>
                      <span className="text-[12px] text-[#9F9F9F]">
                        03 Aug 2022
                      </span>
                    </p>
                  </p>
                  <p className="text-[16px] text-[#9F9F9F] flex flex-wrap justify-between space-x-4">
                    {" "}
                    <img src="blogsmall5.png" alt="" />
                    <p className="flex flex-col justify-center items-center ">
                      <span className=" w-[10rem] text-black ">
                        Colorful office redesign
                      </span>
                      <span className="text-[12px] text-[#9F9F9F]">
                        03 Aug 2022
                      </span>
                    </p>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className=" flex flex-wrap justify-center gap-8 py-12">
          <p className="text-[20px] bg-[#FBEBB5] w-[60px] text-center content-center h-[60px] rounded">
            1
          </p>
          <p className="text-[20px] bg-[#FFF9E5] w-[60px] text-center content-center h-[60px] rounded">
            2
          </p>
          <p className="text-[20px] bg-[#FFF9E5] w-[60px] text-center content-center h-[60px] rounded">
            3
          </p>
          <p className="text-[20px] bg-[#FFF9E5] w-[98px] text-center content-center h-[60px] rounded">
            Next
          </p>
        </div>
      </section>
    </>
  );
}

export default Blogdetailhero;
