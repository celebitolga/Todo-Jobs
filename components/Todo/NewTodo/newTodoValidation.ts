import * as yup from "yup";

const newTodoValidation = yup.object({
  name: yup
    .string()
    .trim()
    .max(255)
    .matches(
      /^[A-Za-z0-9 wığüşöçĞÜŞÖÇİ_]*[A-Za-z0-9 wığüşöçĞÜŞÖÇİ][A-Za-z0-9 wığüşöçĞÜŞÖÇİ_]*$/i,
      "Only letters and numbers are allowed"
    )
    .required("Name is required"),
  priority: yup.number().min(0, 'Priority is required').required("Priority is required"),
});

export default newTodoValidation;
