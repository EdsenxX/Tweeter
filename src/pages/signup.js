// Dependencies
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { createUser } from "../services/userServices";

const schema = yup
  .object({
    name: yup.string().required("Name is required"),
    userName: yup.string().required("User is required"),
    email: yup.string().required("Email is required"),
    password: yup.string().required("Password is required"),
    passwordConfirm: yup
      .string()
      .required("Password confirmation is required")
      .oneOf([yup.ref("password"), null], "Passwords must match"),
  })
  .required();

export default function Signup() {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const signup = async (datos) => {
    await createUser(datos)
      .then((res) => {
        router.push("/signin");
      })
      .catch((err) => {
        if (err.error.code === 11000) {
          setError(err.error.duplicatedKey, {
            type: "manual",
            message: `${err.error.duplicatedKey} already exists`,
          });
        } else {
          console.error(err);
        }
      });
  };

  return (
    <div className="w-full min-h-screen flex justify-center items-center bg-gray-100">
      <Head>
        <title>Sign up - Tweeter</title>
        <meta name="description" content="Sign up to Tweeter" />
      </Head>
      <div className="bg-white p-7 shadow-lg rounded-md w-96 flex flex-col items-center gap-2">
        <Image src="/tweeter.svg" alt="logo" width={200} height={100} />
        <form
          className="w-full flex flex-col gap-2"
          onSubmit={handleSubmit(signup)}
        >
          <div className="flex flex-col gap-1">
            <input
              type="text"
              placeholder="Full Name"
              className="outline-none p-2 bg-gray-100 rounded-md"
              {...register("name")}
            />
            <p className="text-xs px-2 text-red-500">
              {errors.name && errors.name.message}
            </p>
          </div>

          <div className="flex flex-col gap-1">
            <input
              type="text"
              placeholder="User"
              className="outline-none p-2 bg-gray-100 rounded-md"
              {...register("userName")}
            />
            <p className="text-xs px-2 text-red-500">
              {errors.userName && errors.userName.message}
            </p>
          </div>
          <div className="flex flex-col gap-1">
            <input
              type="email"
              placeholder="Email"
              className="outline-none p-2 bg-gray-100 rounded-md"
              {...register("email")}
            />
            <p className="text-xs px-2 text-red-500">
              {errors.email && errors.email.message}
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
          <div className="flex flex-col gap-1">
            <input
              type="password"
              placeholder="Confirm password"
              className="outline-none p-2 bg-gray-100 rounded-md"
              {...register("passwordConfirm")}
            />
            <p className="text-xs px-2 text-red-500">
              {errors.passwordConfirm && errors.passwordConfirm.message}
            </p>
          </div>
          <button className="bg-blue-500 text-white px-5 py-1 rounded-md flex gap-2 items-center justify-center">
            Sign up
          </button>
        </form>
        <p className="flex gap-2">
          Do you have an account?
          <span className="text-blue-500 underline">
            <Link href="/signin">Sign In</Link>
          </span>
        </p>
      </div>
    </div>
  );
}
