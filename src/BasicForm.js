import { useFormik } from "formik"


const validateForm = (values) => {
  const errors = {}
  console.log("validateForm", values)

  //email min 5 chars and pattern
  if (!values.email) {
    errors.email = 'Required';
  } else if (
    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
  ) {
    errors.email = 'Invalid email address';
  } else if (values.email.length < 5) {
    errors.email = "Email should be atleast 5 characters"
  }


  //min 8 characters
  if (values.password.length < 8) {
    errors.password = "Please provide a longer password"
  }
  if (values.password.length > 12) {
    errors.password = "Password should between 8 to 12 characters"
  }
  console.log(errors)
  return errors
}

export function BasicForm() {
  const formik = useFormik({  // const {handleSubmit, values, handleChange, handleBlur, errors, touched } we can use destructuring like this
    initialValues: { email: "", password: "" },
    validate: validateForm,  //after calling validateForm,if it doesnt return error then only onSubmit will be called
    onSubmit: (values) => {
      console.log("onSubmit", values)
    }
  })
  return (
    <form onSubmit={formik.handleSubmit}>
      <input
        id="email"
        name="email"
        value={formik.values.email} type="email"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        placeholder="Enter your email"
      />
      {formik.errors.email && formik.touched.email && formik.errors.email}


      <input
        id="password"
        name="password"
        value={formik.values.password} type="password"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        placeholder="Enter your password"
      />

      {/* only display error when user moves away or backspaces passowrd field */}
      {formik.errors.password && formik.touched.password && formik.errors.password}

      <button type="submit">Submit</button>

    </form>
  );
}
