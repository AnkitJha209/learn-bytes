import { FcGoogle } from "react-icons/fc";
import { useSelector } from "react-redux";

// import frameImg from "../../../assets/Images/frame.png"
import LoginForm from "./LoginForm";
import SignupForm from "./SignupForm";

function Template({ title, description1, description2, image, formType }) {
  const { loading } = useSelector((state) => state.auth);

  return (
    <div className="grid place-items-center pt-10 bg-gradient-to-br min-h-screen from-teal-900 via-emerald-900 to-green-900 text-white">
      {loading ? (
        <div className="spinner"></div>
      ) : (
        <div className="mx-auto flex w-11/12 max-w-maxContent flex-col-reverse justify-between gap-y-12 py-12 md:flex-row md:gap-y-0 md:gap-x-12">
          {/* Text Section */}
          <div className="mx-auto w-11/12 max-w-[450px] md:mx-0">
            <h1 className="text-[1.875rem] font-semibold leading-[2.375rem]">
              {title}
            </h1>
            <p className="mt-4 text-[1.125rem] leading-[1.625rem]">
              <span className="text-teal-100">{description1}</span>{" "}
              <span className="font-edu-sa font-bold italic text-blue-100">
                {description2}
              </span>
            </p>
            {formType === "signup" ? <SignupForm /> : <LoginForm />}
          </div>

          {/* Image Section */}
          <div className="relative mx-auto w-11/12 max-w-[450px] hidden sm:inline sm:mx-0">
            <img
              src={image}
              alt="Students"
              width={558}
              height={504}
              loading="lazy"
              className="absolute -top-4 right-4 z-10 rounded-lg shadow-lg"
            />
          </div>
        </div>
      )}
    </div>
  );
}

export default Template;
