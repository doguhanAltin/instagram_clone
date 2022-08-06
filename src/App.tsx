import React, { useEffect, useRef, useState } from "react";
import "./App.css";
import { Input } from "./components/Input";
import { AiFillFacebook } from "react-icons/ai";
/* eslint-disable */

function App() {
  const ref = useRef<HTMLDivElement>(null);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const enabled = username && password;
  useEffect(() => {
    let images = ref.current?.querySelectorAll("img");
    let total: any = images?.length;
    let current: number = 0;
    const imageSlider: any = () => {
      if (current > 0) {
        //@ts-ignore
        images[current - 1].classList.add("opacity-0");
      } else {
        //@ts-ignore

        images[total - 1].classList.add("opacity-0");
      }
      //@ts-ignore

      images[current].classList.remove("opacity-0");
      if (current === total - 1) {
        current = 0;
      } else {
        current += 1;
      }
    };
    imageSlider();
    let interval = setInterval(imageSlider, 6000);
    return () => {
      clearInterval(interval);
    };
  }, [ref]);
  return (
    <div className="h-full w-full flex items-center gap-x-8 justify-center">
      <div className=" hidden md:block w-[380px] h-[581px]  relative bg-logo-pattern bg-[length:468.32px_634.15px] bg-[top_left_-46px]">
        <div
          className="w-[250px] h-[538px] absolute top-[27px] right-[18px]"
          ref={ref}
        >
          <img
            className="w-full h-full absolute top-0 left-0 opacity-0 transition-opacity duration-1000 ease-linear"
            src="https://www.instagram.com/static/images/homepage/screenshots/screenshot1-2x.png/cfd999368de3.png"
            alt=""
          />
          <img
            className="w-full h-full absolute top-0 left-0 opacity-0 transition-opacity duration-1000 ease-linear"
            src="https://www.instagram.com/static/images/homepage/screenshots/screenshot2-2x.png/80b8aebdea57.png"
            alt=""
          />
          <img
            className="w-full h-full absolute top-0 left-0 opacity-0 transition-opacity duration-1000 ease-linear"
            src="https://www.instagram.com/static/images/homepage/screenshots/screenshot3-2x.png/fe2540684ab2.png"
            alt=""
          />
          <img
            className="w-full h-full absolute top-0 left-0 opacity-0 transition-opacity duration-1000 ease-linear"
            src="https://www.instagram.com/static/images/homepage/screenshots/screenshot4-2x.png/8e9224a71939.png"
            alt=""
          />
        </div>
      </div>
      <div className="w-[350px] grid gap-y-3">
        <div className="bg-white border p-[40px] pt-6 pb-2">
          <a href="#" className="flex justify-center mb-8">
            <img
              className="h-[51px]"
              src="https://www.instagram.com/static/images/web/logged_out_wordmark-2x.png/d2529dbef8ed.png"
            />
          </a>

          <form className="grid gap-y-1">
            <Input
              label="Phone number, username or email"
              onChange={(e: any) => setUsername(e.target.value)}
              type="text"
              value={username}
            />
            <Input
              label="password"
              onChange={(e: any) => setPassword(e.target.value)}
              type="password"
              value={password}
            />
            <button
              type="submit"
              disabled={!enabled}
              className="h-[30px] mt-2 rounded-sm bg-brand font-medium text-white text-sm disabled:opacity-50"
            >
              Log In{" "}
            </button>
            <div className="flex items-center ">
              <div className="h-px bg-gray-300 flex-1" />
              <span className="px-4 text-[13px] text-gray-500 font-semibold my-2 mb-3.5">
                {" "}
                OR
              </span>
              <div className="h-px bg-gray-300 flex-1" />
            </div>
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
          </form>
        </div>
        <div className="bg-white border p-4 text-sm text-center">
          {" "}
          Don't Have an account?{" "}
          <a className="text-brand text-sm font-semibold"> Sign Up</a>
        </div>
      </div>
    </div>
  );
}

export default App;
