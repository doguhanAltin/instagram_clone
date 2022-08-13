import React, { useEffect, useRef, useState } from "react";
import { Input } from "../../components/Input";
import { AiFillFacebook } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { setUser } from "../../store/auth";
import { useNavigate, useLocation, Link } from "react-router-dom";
import { ILocationState } from "../../global/interfaces";
import { Formik, Form } from "formik";
import { login, register } from "../../firebase";
import { LoginSchema } from "../../validation";
import { Button } from "../../components/Button";
import { Separator } from "../../components/Separator";
import { RegisterSchema } from "../../validation/register-schema";

type TValues = {
  email: string;
  full_name: string;
  username: string;
  password: string;
};

export const Register = () => {
  const ref = useRef<HTMLDivElement>(null);

  const navigate = useNavigate();
  const location: any = useLocation();

  const handleSubmit = async (values: TValues, actions: any) => {
    const response = await register(values);
    if (response) {
      navigate(location.state?.return_url || "/", { replace: true });
    }
  };
  return (
    <div className="w-[350px] grid gap-y-3">
      <div className="bg-white border p-[40px] pt-10 pb-6">
        <a href="#" className="flex justify-center mb-4">
          <img
            className="h-[51px]"
            src="https://www.instagram.com/static/images/web/logged_out_wordmark-2x.png/d2529dbef8ed.png"
          />
        </a>
        <p className="=text-[17px] font-semibold text-[#8e8e8e] text-center mb-6">
          Sign up to see photos and videos from your friends
        </p>

        <Button>
          <AiFillFacebook size={20} />
          Log in with Facebook
        </Button>

        <Separator />

        <Formik
          validationSchema={RegisterSchema}
          initialValues={{
            email: "",
            full_name: "",
            username: "",
            password: "",
          }}
          onSubmit={handleSubmit}
        >
          {({ isSubmitting, isValid, dirty, values }) => (
            <Form className="grid gap-y-1">
              <Input label="Email" type="text" name="email" />
              <Input label="Full Name" type="text" name="full_name" />
              <Input label="User Name" type="text" name="username" />
              <Input label="Password" type="password" name="password" />
              <p className="text-xs text-[#8e8e8e] py-2">
                People who use our service may have uploaded your contact information to Instagram.<a href="#" className="font-semibold">Learn More</a> 
                <br/><br/>
                By signing up , you agree to our <a href="#" className="font-semibold">Terms</a>, <a href="#" className="font-semibold">Data Policy </a>and <a href="#" className="font-semibold">Cookies Policy.</a>
              </p>
              <Button
                type="submit"
                disabled={!isValid || !dirty || isSubmitting}
              >
                {" "}
                Sign Up
              </Button>
            </Form>
          )}
        </Formik>
      </div>
      <div className="bg-white border p-4 text-sm text-center">
        {" "}
     Have an account?{" "}
        <Link to={"/auth/login"} className="text-brand text-sm font-semibold"> Log in</Link>
      </div>
    </div>
  );
};
