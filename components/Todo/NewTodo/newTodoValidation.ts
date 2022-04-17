import * as yup from "yup";

const newTodoValidation = yup.object({
  name: yup
    .string()
    .trim()
    .max(255)
    .matches(
      /^[A-Za-z0-9 _]*[A-Za-z0-9][A-Za-z0-9 _]*$/i,
      "Only letters and numbers are allowed"
    )
    .required("Name is required"),
  priority: yup.string().required("Priority is required"),
});

export default newTodoValidation;