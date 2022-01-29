// Dependencies
import Image from "next/image";
import Link from "next/link";

export default function NavBar() {
  return (
    <div className="flex items-center w-full p-4">
      <div className="flex items-center w-2/12">
        <Image src="/tweeter.svg" alt="logo" width={130} height={40} />
      </div>
      <div className="flex gap-5 w-8/12 justify-center">
        <Link href="/">Home</Link>
        <Link href="/explorer">Explorer</Link>
        <Link href="/bookmarks">Bookmarks</Link>
      </div>
      <div className="w-2/12 flex justify-end">Log in</div>
    </div>
  );
}
