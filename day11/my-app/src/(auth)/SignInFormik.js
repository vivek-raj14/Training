import { Formik, Form, Field, ErrorMessage } from "formik";

const SignIn = () => {
  return (
    <Formik
      initialValues={{ email: "", password: "" }}
      validate={(values) => {
        const errors = {};

        if (!values.email) {
          errors.email = "Email is required";
        }

        if (!values.password) {
          errors.password = "Password is required";
        }

        return errors;
      }}
      onSubmit={(values, { resetForm }) => {
        console.log("Login success", values);
        resetForm(); // clears inputs
      }}
    >
      <Form className="flex flex-col gap-4">
        <div>
          <Field
            name="email"
            type="email"
            placeholder="Email"
            className="border px-3 py-2"
          />
          <ErrorMessage name="email" component="p" className="text-red-500" />
        </div>

        <div>
          <Field
            name="password"
            type="password"
            placeholder="Password"
            className="border px-3 py-2"
          />
          <ErrorMessage
            name="password"
            component="p"
            className="text-red-500"
          />
        </div>

        <button type="submit">Login</button>
      </Form>
    </Formik>
  );
};

export default SignIn;
