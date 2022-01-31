/* eslint-disable react-hooks/exhaustive-deps */
// Dependencies
import Image from "next/image";
import Link from "next/link";
import { connect } from "react-redux";
import { useEffect } from "react";
import { FaUserCircle } from "react-icons/fa";
import { IoMdSettings } from "react-icons/io";
import { IoIosLogOut } from "react-icons/io";
import { useRouter } from "next/router";
// Actions
import * as authActions from "../actions/authActions";

function NavBar(props) {
  const router = useRouter();

  useEffect(() => {
    if (!props.datosUsuario.length) {
      props.traerDatosUsuario();
    }
  }, []);

  const logout = () => {
    props.cerrarSesion();
    document.cookie = "token=;expires=Thu, 01 Jan 1970 00:00:01 GMT;";
    router.push("/signin");
  };

  return (
    <div className="flex items-center w-full p-4">
      <div className="flex items-center w-2/12">
        <Link href="/" passHref>
          <Image src="/tweeter.svg" alt="logo" width={130} height={40} />
        </Link>
      </div>
      <div className="flex gap-5 w-8/12 justify-center">
        <Link href="/">Home</Link>
        <Link href="/explorer">Explorer</Link>
        <Link href="/bookmarks">Bookmarks</Link>
      </div>
      <div className="w-2/12 flex justify-end">
        {Object.keys(props.datosUsuario).length ? (
          <div className="flex flex-col gap-2 relative group">
            <div className="flex items-center gap-2">
              <Image
                src={"https://source.unsplash.com/random/32x32"}
                width={32}
                height={32}
                alt="Profile picture"
                className="rounded-md"
              />
              <p> {props.datosUsuario.name} </p>
            </div>
            <div className="hidden group-hover:block p-4 bg-white rounded-lg shadow-lg absolute w-full top-9 border z-10">
              <section className="border-b">
                <Link href="/profile">
                  <a className="block my-2 p-2 text-gray-700 hover:bg-gray-200 rounded-lg font-ligth">
                    <FaUserCircle className="inline-block mr-2" />
                    Profile
                  </a>
                </Link>
                <Link href="/settings">
                  <a className="block my-2 p-2 text-gray-700 hover:bg-gray-200 rounded-lg font-ligth">
                    <IoMdSettings className="inline-block mr-2" />
                    Settings
                  </a>
                </Link>
              </section>
              <section>
                <button
                  onClick={logout}
                  className="my-2 w-full text-left block p-2 text-red-500 hover:bg-gray-200 rounded-lg font-ligth"
                >
                  <IoIosLogOut className="inline-block mr-2" />
                  Logout
                </button>
              </section>
            </div>
          </div>
        ) : (
          <Link href="/signin"> Sign in </Link>
        )}
      </div>
    </div>
  );
}

const mapStateToProps = ({ authReducer }) => authReducer;

const mapDispatchToProps = {
  ...authActions,
};

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);
