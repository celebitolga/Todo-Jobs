import { useState, useEffect } from "react";

// styles
import * as S from "./styles.styled";

// Redux hooks
import { useAppDispatch, useAppSelector } from "../../../app/hooks";

// Slicer functions
import { editJob } from "../../../features/JobListSlice";
import { selectPriorityOptions } from "../../../features/PriorityOptionsSlice";

// Components
import Label from "../../Label";
import Input from "../../Input";
import Select from "../../Select";
import Button from "../../Button";

// Types
import { IJob, IPrioritySelect } from "../model";

interface Props {
  job: IJob;
  setJob: (job?: IJob) => void;
}

function EditTodo({ job, setJob }: Props): JSX.Element {
  const dispatch = useAppDispatch();
  const priorityOptions: IPrioritySelect[] = useAppSelector(
    selectPriorityOptions
  );

  const [editedJob, setEditedJob] = useState<IJob>({ ...job });

  const handlePriorityOnChange = (e: React.ChangeEvent<HTMLSelectElement>): void => {
    setEditedJob({
      ...editedJob,
      priority: Number(e.target.value),
    });
  };

  const handleSaveButton = (e: React.MouseEvent<HTMLElement>): void => {
    e.preventDefault();

    dispatch(editJob(editedJob));
    setJob(undefined);
  };

  const handleCancelButton = (e: React.MouseEvent<HTMLElement>): void => {
    e.preventDefault();

    setJob(undefined);
  };

  const handleOutsideClick = (e: React.MouseEvent<HTMLElement>): void => {
    if (e.currentTarget === e.target) {
      setJob(undefined);
    }
  };

  const renderOptions = (options: Array<IPrioritySelect>): JSX.Element[] => {
    return options.map((option: IPrioritySelect) => (
      <option key={option.value} value={option.value}>
        {option.label}
      </option>
    ));
  };

  useEffect(() => {
    document.body.style.overflowY = "hidden";

    return () => {
      document.body.style.overflowY = "auto";
    };
  }, []);

  return (
    <S.Holder onClick={handleOutsideClick}>
      <S.Wrapper>
        <S.Title>Job Edit</S.Title>

        <S.Form>
          <S.FormControl>
            <Label>Job Name</Label>
            <Input disabled placeholder={editedJob.name} />
          </S.FormControl>

          <S.FormControl>
            <Label htmlFor="priority_save">Job Priority</Label>
            <Select
              id="priority_save"
              value={editedJob.priority}
              onChange={handlePriorityOnChange}
              options={priorityOptions}
              renderItem={renderOptions}
            />
          </S.FormControl>

          <S.FormControl className="-buttons">
            <Button variant="gray" onClick={handleCancelButton}>
              Cancel
            </Button>
            <Button variant="urgent" onClick={handleSaveButton}>
              Save
            </Button>
          </S.FormControl>
        </S.Form>
      </S.Wrapper>
    </S.Holder>
  );
}

export default EditTodo;
