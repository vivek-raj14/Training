import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const loginSchema = Yup.object({
  email: Yup.string()
    .email("Invalid email format")
    .required("Email is required"),

  password: Yup.string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
});

const SignInYup = () => {
  return (
    <div className="w-full h-screen flex items-center justify-center">
      <div className="w-[400px] bg-black p-10 rounded-2xl">
        <h2 className="text-3xl text-white text-center mb-6">Login</h2>

        <Formik
          initialValues={{ email: "", password: "" }}
          validationSchema={loginSchema}
          onSubmit={(values, { resetForm }) => {
            console.log("Login Success", values);
            resetForm(); // clears inputs ONLY on success
          }}
        >
          {() => (
            <Form>
              {/* EMAIL */}
              <div className="flex flex-col gap-1 mb-4">
                <label className="text-white">Email</label>

                <Field
                  name="email"
                  type="email"
                  placeholder="Enter your Email"
                  className="rounded-xl px-4 py-2"
                />

                {/* Always reserve space to prevent layout shift */}
                <p className="text-red-500 text-sm min-h-[20px]">
                  <ErrorMessage name="email" />
                </p>
              </div>

              {/* PASSWORD */}
              <div className="flex flex-col gap-1 mb-6">
                <label className="text-white">Password</label>

                <Field
                  name="password"
                  type="password"
                  placeholder="Enter your Password"
                  className="rounded-xl px-4 py-2"
                />

                <p className="text-red-500 text-sm min-h-[20px]">
                  <ErrorMessage name="password" />
                </p>
              </div>

              <button
                type="submit"
                className="w-full bg-red-500 text-white py-2 rounded-xl hover:bg-red-600"
              >
                Login
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default SignInYup;
