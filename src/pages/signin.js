// Dependenciea
import Head from "next/head";
import Image from "next/image";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Link from "next/link";
import { useRouter } from "next/router";
import { connect } from "react-redux";
// Actions
import * as authActions from "../actions/authActions";
// Services
import { login } from "../services/loginServices";

const schema = yup
  .object({
    user: yup.string().required("User is required"),
    password: yup.string().required("Password is required"),
  })
  .required();

function Login(props) {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const handleLogin = async (user) => {
    await login(user)
      .then(async () => {
        await props.traerDatosUsuario();
        router.push("/");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="w-full min-h-screen flex justify-center items-center bg-gray-100">
      <Head>
        <title>Sign in - Tweeter</title>
        <meta name="description" content="Login to Tweeter" />
      </Head>
      <div className="bg-white p-7 shadow-lg rounded-md w-96 flex flex-col items-center gap-2">
        <Image src="/tweeter.svg" alt="logo" width={200} height={100} />
        <form
          className="w-full flex flex-col gap-2"
          onSubmit={handleSubmit(handleLogin)}
        >
          <div className="flex flex-col gap-1">
            <input
              type="text"
              placeholder="User"
              className="outline-none p-2 bg-gray-100 rounded-md"
              {...register("user")}
            />
            <p className="text-xs px-2 text-red-500">
              {errors.user && errors.user.message}
            </p>
          </div>
          <div className="flex flex-col gap-1">
            <input
              type="password"
              placeholder="Password"
              className="outline-none p-2 bg-gray-100 rounded-md"
              {...register("password")}
            />
            <p className="text-xs px-2 text-red-500">
              {errors.password && errors.password.message}
            </p>
          </div>
          <button className="bg-blue-500 text-white px-5 py-1 rounded-md flex gap-2 items-center justify-center">
            Login
          </button>
        </form>
        <p className="flex gap-2">
          Do you have an account?
          <span className="text-blue-500 underline">
            <Link href="/signup">Sign up</Link>
          </span>
        </p>
      </div>
    </div>
  );
}

const mapStateToProps = ({ authReducer }) => authReducer;

const mapDispatchToProps = {
  ...authActions,
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
