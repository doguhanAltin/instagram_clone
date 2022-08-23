import React, { useEffect, useRef, useState } from "react";
import { Input } from "../../components/Input";
import { AiFillFacebook } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { setUser } from "../../store/auth";
import { useNavigate, useLocation, Link, Navigate } from "react-router-dom";
import { ILocationState } from "../../global/interfaces";
import { Formik, Form } from "formik";
import { login } from "../../firebase";
import { LoginSchema } from "../../validation";
import { Button } from "../../components/Button";
import { Separator } from "../../components/Separator";

type TValues = {
  username: string;
  password: string;
};

export const Login = () => {
  const ref = useRef<HTMLDivElement>(null);
  const user = useSelector((state: any) => state.auth.user);
  const navigate = useNavigate();
  const location:any  = useLocation();
  const img = [
    "https://www.instagram.com/static/images/homepage/screenshots/screenshot1-2x.png/cfd999368de3.png",
    "https://www.instagram.com/static/images/homepage/screenshots/screenshot2-2x.png/80b8aebdea57.png",
    "https://www.instagram.com/static/images/homepage/screenshots/screenshot3-2x.png/fe2540684ab2.png",
    "https://www.instagram.com/static/images/homepage/screenshots/screenshot4-2x.png/8e9224a71939.png",
  ];
  useEffect(() => {
    let images = ref.current?.querySelectorAll("img");
    let total: number = typeof images !== "undefined" ? images.length : 0;
    let current = 0;
    const imageSlider: ()=>void = () => {
      //@ts-ignore
      images[(current > 0 ? current : total) - 1].classList.add("opacity-0");
      //@ts-ignore

      images[current].classList.remove("opacity-0");
      current = current === total - 1 ? 0 : current + 1;
    };
    imageSlider();
    let interval = setInterval(imageSlider, 6000);
    return () => {
      clearInterval(interval);
    };
  }, [ref]);

  if (user && typeof location.state === "object"  ) {
    return <Navigate to={location.state.return_url || "/"} replace={true} />;
  }
  const handleSubmit = async (values: TValues) => {
    const response = await login(values.username, values.password);
  };
  return (
    <div className="h-full w-full flex items-center gap-x-8 justify-center">
      <div className=" hidden md:block w-[380px] h-[581px]  relative bg-logo-pattern bg-[length:468.32px_634.15px] bg-[top_left_-46px]">
        <div
          className="w-[250px] h-[538px] absolute top-[27px] right-[18px]"
          ref={ref}
        >
          {img.map((img, key) => (
            <img
              className="w-full h-full absolute top-0 left-0 opacity-0 transition-opacity duration-1000 ease-linear"
              src={img}
              alt=""
              key={key}
            />
          ))}
        </div>
      </div>
      <div className="w-[350px] grid gap-y-3">
        <div className="bg-white border p-[40px] pt-6 pb-2">
          <div className="flex justify-center mb-8">
            <img
              className="h-[51px]"
              src="https://www.instagram.com/static/images/web/logged_out_wordmark-2x.png/d2529dbef8ed.png"
            />
          </div>

          <Formik
            validationSchema={LoginSchema}
            initialValues={{
              username: "",
              password: "",
            }}
            onSubmit={handleSubmit}
          >
            {({ isSubmitting, isValid, dirty, values }) => (
              <Form className="grid gap-y-1">
                <Input
                  label="Phone number, username or email"
                  type="text"
                  name="username"
                />
                <Input label="password" type="password" name="password" />
                {/* <button
                  disabled={!isValid || !dirty || isSubmitting}
                  type="submit"
                  className="h-[30px] mt-2 rounded-sm bg-brand font-medium text-white text-sm disabled:opacity-50"
                >
                  Log In{" "}
                </button> */}
                <Button
                  type="submit"
                  disabled={!isValid || !dirty || isSubmitting}
                  // props={ disabled: !isValid || !dirty || isSubmitting }
                >
                  {" "}
                  Log in{" "}
                </Button>
                <Separator />
                <a
                  href="#"
                  className="flex justify-center items-center gap-x-2 text-sm font-semibold text-facebook mb-2 "
                >
                  <AiFillFacebook size={20} />
                  Log in with Facebook
                </a>
                <a
                  href="#"
                  className="text-link text-xs flex items-center justify-center"
                >
                  Forgot password ?
                </a>
              </Form>
            )}
          </Formik>
        </div>
        <div className="bg-white border p-4 text-sm text-center">
          {" "}
          Don't Have an account?{" "}
          <Link
            to="/auth/register"
            className="text-brand text-sm font-semibold"
          >
            {" "}
            Sign Up
          </Link>
        </div>
      </div>
    </div>
  );
};
