import Head from "next/head";
import Image from "next/image";
import { BiWorld } from "react-icons/bi";
import { AiOutlineHeart, AiOutlineUserAdd } from "react-icons/ai";
import { MdOutlineModeComment } from "react-icons/md";
import { FaRetweet } from "react-icons/fa";
import { BsBookmarkPlus, BsImage } from "react-icons/bs";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Tweeter</title>
        <meta name="description" content="A social network for developers" />
      </Head>
      <div className="w-full flex justify-center bg-gray-100 py-10">
        <div className="w-[70%] flex gap-5">
          <div className="flex flex-col gap-5 w-[70%] ">
            <div className="p-4 bg-white shadow-lg rounded-xl">
              <div className="border-b pb-2">
                <p className="font-semibold text-xs">Tweet something</p>
              </div>
              <div className="flex gap-1 py-2">
                <div className="w-1/12">
                  <Image
                    src="https://source.unsplash.com/random/50x50"
                    width={50}
                    height={50}
                    alt="your profile picture"
                    className="rounded-md"
                  />
                </div>
                <div className="w-11/12">
                  <textarea
                    cols="30"
                    rows="2"
                    placeholder="What's happening?"
                    className="w-full outline-none resize-none p-2 text-sm"
                    maxLength={140}
                  ></textarea>
                  <div className="flex justify-between items-center">
                    <div className="flex gap-2 items-center px-2">
                      <BsImage className="text-blue-500 text-lg" />
                      <div className="flex gap-1 items-center">
                        <BiWorld className="text-blue-500 text-xl" />
                        <p className="text-xs text-blue-500">
                          Everybody can reply
                        </p>
                      </div>
                    </div>
                    <div className="">
                      <button className="bg-blue-500 text-white px-5 py-1 rounded-md flex gap-2 items-center text-sm font-light">
                        Tweet
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-5">
              <section className="bg-white rounded-lg shadow-lg p-4">
                <div className="flex gap-2">
                  <div className="">
                    <Image
                      src={"https://source.unsplash.com/random/50x50"}
                      width={50}
                      height={50}
                      alt="Profile picture"
                      className="rounded-md"
                    />
                  </div>
                  <div className="">
                    <p className="text-sm font-semibold">Peyton Lyons</p>
                    <p className="text-xs text-gray-400">24 August at 20:43 </p>
                  </div>
                </div>
                <p className="text-sm py-2">
                  Traveling – it leaves you speechless, then turns you into a
                  storyteller.
                </p>
                <Image
                  src="https://source.unsplash.com/random/600x350"
                  width={600}
                  height={350}
                  alt="Picture"
                  className="rounded-md"
                />
                <div className="border-y p-1 flex justify-around">
                  <button className="flex gap-1 items-center outline-none text-sm hover:bg-gray-200 rounded-md py-2 w-1/4 justify-center">
                    <MdOutlineModeComment /> Commets
                  </button>
                  <button className="flex gap-1 items-center outline-none text-sm hover:bg-gray-200 rounded-md py-2 w-1/4 justify-center">
                    <FaRetweet /> Retweets
                  </button>
                  <button className="flex gap-1 items-center outline-none text-sm hover:bg-gray-200 rounded-md py-2 w-1/4 justify-center">
                    <AiOutlineHeart /> Likes
                  </button>
                  <button className="flex gap-1 items-center outline-none text-sm hover:bg-gray-200 rounded-md py-2 w-1/4 justify-center">
                    <BsBookmarkPlus /> Save
                  </button>
                </div>
                <section className="flex gap-1 py-2 items-center">
                  <div className="w-[6%]">
                    <Image
                      src={"https://source.unsplash.com/random/32x32"}
                      width={32}
                      height={32}
                      alt="Profile picture"
                      className="rounded-md"
                    />
                  </div>
                  <div className="flex w-[94%] bg-gray-100 items-center rounded-md ">
                    <input
                      type="text"
                      className="w-11/12 bg-transparent outline-none border-none p-2 text-sm"
                      placeholder="Add a comment..."
                    />
                    <BsImage className="w-1/12 text-gray-400 my-auto" />
                  </div>
                </section>
              </section>
            </div>
            <div className="flex flex-col gap-5">
              <section className="bg-white rounded-lg shadow-lg p-4">
                <div className="flex gap-2">
                  <div className="">
                    <Image
                      src={"https://source.unsplash.com/random/50x50"}
                      width={50}
                      height={50}
                      alt="Profile picture"
                      className="rounded-md"
                    />
                  </div>
                  <div className="">
                    <p className="text-sm font-semibold">Peyton Lyons</p>
                    <p className="text-xs text-gray-400">24 August at 20:43 </p>
                  </div>
                </div>
                <p className="text-sm py-2">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Repellendus dicta dolorum id laudantium neque nam quaerat
                  dolor rem debitis autem officiis, dolore a dignissimos,
                  recusandae reiciendis enim dolores aliquid natus!
                </p>
                <div className="border-y p-1 flex justify-around">
                  <button className="flex gap-1 items-center outline-none text-sm hover:bg-gray-200 rounded-md py-2 w-1/4 justify-center">
                    <MdOutlineModeComment /> Commets
                  </button>
                  <button className="flex gap-1 items-center outline-none text-sm hover:bg-gray-200 rounded-md py-2 w-1/4 justify-center">
                    <FaRetweet /> Retweets
                  </button>
                  <button className="flex gap-1 items-center outline-none text-sm hover:bg-gray-200 rounded-md py-2 w-1/4 justify-center">
                    <AiOutlineHeart /> Likes
                  </button>
                  <button className="flex gap-1 items-center outline-none text-sm hover:bg-gray-200 rounded-md py-2 w-1/4 justify-center">
                    <BsBookmarkPlus /> Save
                  </button>
                </div>
                <section className="flex gap-1 py-2 items-center">
                  <div className="w-[6%]">
                    <Image
                      src={"https://source.unsplash.com/random/32x32"}
                      width={32}
                      height={32}
                      alt="Profile picture"
                      className="rounded-md"
                    />
                  </div>
                  <div className="flex w-[94%] bg-gray-100 items-center rounded-md ">
                    <input
                      type="text"
                      className="w-11/12 bg-transparent outline-none border-none p-2 text-sm"
                      placeholder="Add a comment..."
                    />
                    <BsImage className="w-1/12 text-gray-400 my-auto" />
                  </div>
                </section>
              </section>
            </div>
          </div>
          <div className="flex flex-col gap-5 w-[30%]">
            <div className="p-4 bg-white shadow-lg rounded-xl">
              <div className="border-b pb-2">
                <p className="font-semibold text-xs">Trends for you</p>
              </div>
              <section className="flex flex-col gap-4 my-4">
                <div className="flex flex-col gap-1">
                  <p className="font-bold text-sm">#edsen</p>
                  <p className="text-xs text-gray-400">999k Tweets</p>
                </div>
                <div className="flex flex-col gap-1">
                  <p className="font-bold text-sm">#programming</p>
                  <p className="text-xs text-gray-400">213k Tweets</p>
                </div>
                <div className="flex flex-col gap-1">
                  <p className="font-bold text-sm">#devchallenges</p>
                  <p className="text-xs text-gray-400">181k Tweets</p>
                </div>
                <div className="flex flex-col gap-1">
                  <p className="font-bold text-sm">#fullstack</p>
                  <p className="text-xs text-gray-400">150k Tweets</p>
                </div>
              </section>
            </div>
            <div className="p-4 bg-white shadow-lg rounded-xl">
              <div className="border-b pb-2">
                <p className="font-semibold text-xs">Who to follow</p>
              </div>
              <section className="flex flex-col my-4 gap-3 border-b pb-4">
                <div className="flex gap-1">
                  <div className="">
                    <div className="flex gap-2">
                      <div className="">
                        <Image
                          src={"https://source.unsplash.com/random/40x40"}
                          width={40}
                          height={40}
                          alt="Profile picture"
                          className="rounded-md"
                        />
                      </div>
                      <div className="">
                        <p className="text-sm font-semibold">Eduardo Serrano</p>
                        <p className="text-xs text-gray-400">120k Followers</p>
                      </div>
                    </div>
                  </div>
                  <div className="">
                    <button className="bg-blue-500 text-white px-2 py-1 rounded-md flex gap-2 items-center text-xs">
                      <AiOutlineUserAdd />
                    </button>
                  </div>
                </div>
                <p className="text-xs">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Libero, ullam eveniet animi non dolore
                </p>
                <Image
                  src={"https://source.unsplash.com/random/200x70"}
                  width={200}
                  height={70}
                  alt="profile picture"
                  className="rounded-md"
                />
              </section>
              <section className="flex flex-col my-4 gap-3 border-b pb-4">
                <div className="flex gap-1">
                  <div className="">
                    <div className="flex gap-2">
                      <div className="">
                        <Image
                          src={"https://source.unsplash.com/random/40x40"}
                          width={40}
                          height={40}
                          alt="Profile picture"
                          className="rounded-md"
                        />
                      </div>
                      <div className="">
                        <p className="text-sm font-semibold">Mariana Ramirez</p>
                        <p className="text-xs text-gray-400">752k Followers</p>
                      </div>
                    </div>
                  </div>
                  <div className="">
                    <button className="bg-blue-500 text-white px-2 py-1 rounded-md flex gap-2 items-center text-xs">
                      <AiOutlineUserAdd />
                    </button>
                  </div>
                </div>
                <p className="text-xs">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Libero, ullam eveniet animi non dolore
                </p>
                <Image
                  src={"https://source.unsplash.com/random/200x70"}
                  width={200}
                  height={70}
                  alt="profile picture"
                  className="rounded-md"
                />
              </section>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
