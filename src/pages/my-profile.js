// Dependencies
import Image from "next/image";
import Head from "next/head";
import { AiOutlineUserAdd, AiOutlineHeart } from "react-icons/ai";
import { MdOutlineModeComment } from "react-icons/md";
import { FaRetweet } from "react-icons/fa";
import { BsBookmarkPlus, BsImage } from "react-icons/bs";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Daniel Jensen - Tweeter</title>
        <meta
          name="description"
          content="Photographer & Filmmaker based in Copenhagen, Denmark"
        />
      </Head>
      <div className="w-full flex flex-col items-center bg-gray-100">
        <Image
          src={"https://source.unsplash.com/random/1400x300"}
          alt="Ramdom picture"
          width={1400}
          height={300}
        />
        <div className="w-4/5 flex flex-col gap-5 relative -top-12">
          <div className="bg-white rounded-lg shadow-lg p-4 w-full flex">
            <section className="relative -top-14 w-2/12">
              <Image
                src={"https://source.unsplash.com/random/150x150"}
                alt="Profile picture"
                width={150}
                height={150}
                className="rounded-md border border-white"
              />
            </section>
            <section className="flex flex-col gap-10 px-4 w-8/12">
              <div className="flex gap-8 items-center">
                <p className="font-semibold text-2xl">Daniel Jensen</p>
                <p className="text-xs">
                  <span className="font-semibold">2,569</span> Following
                </p>
                <p className="text-xs">
                  <span className="font-semibold">10.8k</span> Followers
                </p>
              </div>
              <div>
                <p>
                  Photographer & Filmmaker based in Copenhagen, Denmark ✵ 🇩🇰
                </p>
              </div>
            </section>
            <section className="w-2/12">
              <button className="bg-blue-500 text-white px-5 py-1 rounded-md flex gap-2 items-center">
                <AiOutlineUserAdd />
                Follow
              </button>
            </section>
          </div>
          <div className="flex gap-5">
            <div className="w-2/5 flex flex-col gap-5">
              <section className="bg-white rounded-lg shadow-lg p-4">
                <ul>
                  <li className="py-2">Tweets</li>
                  <li className="py-2">Tweets & replies</li>
                  <li className="py-2">Media</li>
                  <li className="py-2">Likies</li>
                </ul>
              </section>
            </div>
            <div className="w-3/5 flex flex-col gap-5">
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
          </div>
        </div>
      </div>
    </div>
  );
}
