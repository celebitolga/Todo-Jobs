import { useFormik } from "formik";

// Redux hooks
import { useAppDispatch, useAppSelector } from "../../../../app/hooks";

// Slicer functions
import { createNewJob } from "@Features/jobListSlice";
import { selectPriorityOptions } from "@Features/priorityOptionsSlice";

// icons
import { FiPlus } from "react-icons/fi";

// styles
import * as S from "./styles.styled";

// validation
import newTodoValidation from "./newTodoValidation";

// components
import { Label, Input, Select, Button } from "@Components";

function NewTodo(): JSX.Element {
  const dispatch = useAppDispatch();
  const priorityOptions = useAppSelector(selectPriorityOptions);

  const onSubmitNewTodo = ({
    name,
    priority,
  }: {
    name: string;
    priority: string | number;
  }): void => {
    dispatch(
      createNewJob({
        id: Date.now(),
        name,
        priority: Number(priority),
      })
    );
  };

  const formik = useFormik({
    initialValues: {
      name: "",
      priority: -1,
    },
    onSubmit: (values, bag) => {
      onSubmitNewTodo(values);

      bag.resetForm();
    },
    validationSchema: newTodoValidation,
  });

  const renderOptions = (options: Array<IPrioritySelect>): JSX.Element[] => {
    return options.map((option: IPrioritySelect) => (
      <option key={option.value} value={option.value}>
        {option.label}
      </option>
    ));
  };

  return (
    <S.Wrapper>
      <S.Title>Create New Job</S.Title>
      <S.Form onSubmit={formik.handleSubmit}>
        <S.FormControl>
          <Label htmlFor="name">Job Name</Label>
          <Input
            type="text"
            name="name"
            id="name"
            value={formik.values.name}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            maxLength={255}
            error={formik.errors.name && formik.touched.name ? true : false}
          />

          {formik.errors.name && formik.touched.name && (
            <S.Paragraph
              className={`${
                formik.errors.name && formik.touched.name ? "-error" : ""
              }`}
            >
              {formik.errors.name}
            </S.Paragraph>
          )}
        </S.FormControl>

        <S.FormControl>
          <Label htmlFor="priority">Job Priority</Label>
          <Select
            name="priority"
            id="priority"
            value={formik.values.priority}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={
              formik.errors.priority && formik.touched.priority ? true : false
            }
            options={[
              {
                value: "",
                label: "Choose",
              },
              ...priorityOptions,
            ]}
            renderItem={renderOptions}
          />

          {formik.errors.priority && formik.touched.priority && (
            <S.Paragraph
              className={`${
                formik.errors.priority && formik.touched.priority
                  ? "-error"
                  : ""
              }`}
            >
              {formik.errors.priority}
            </S.Paragraph>
          )}
        </S.FormControl>

        <S.ButtonWrapper>
          <Button
            type="submit"
            variant="trivial"
            icon={<FiPlus size="1.75rem" />}
          >
            Create
          </Button>
        </S.ButtonWrapper>
      </S.Form>
    </S.Wrapper>
  );
}

export default NewTodo;
