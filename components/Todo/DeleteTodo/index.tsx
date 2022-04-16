import { useState, useEffect } from "react";

// styles
import * as S from "./styles.styled";

// Redux hooks
import { useAppDispatch } from "../../../app/hooks";

// Slicer functions
import { deleteJob } from "../../../features/JobListSlice";

// icons
import { RiErrorWarningLine } from "react-icons/ri";

// Components
import Button from "../../Button";

// Types
import { IJob } from "../model";

interface Props {
  job: IJob;
  setJob: (job?: IJob) => void;
}

function DeleteTodo({ job, setJob }: Props): JSX.Element {
  const dispatch = useAppDispatch();

  const [deletedJob] = useState<IJob>({ ...job });

  const handleSaveButton = (e: React.MouseEvent<HTMLElement>): void => {
    e.preventDefault();

    dispatch(deleteJob(deletedJob));
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

  useEffect(() => {
    document.body.style.overflowY = "hidden";

    return () => {
      document.body.style.overflowY = "auto";
    };
  }, []);

  return (
    <S.Holder onClick={handleOutsideClick}>
      <S.Wrapper>
        <S.Icon>
          <RiErrorWarningLine />
        </S.Icon>
        <S.Title>Are you sure you want to delete it?</S.Title>

        <S.ButtonsHolder>
          <Button variant="gray" onClick={handleCancelButton}>
            Cancel
          </Button>
          <Button variant="urgent" onClick={handleSaveButton}>
            Approve
          </Button>
        </S.ButtonsHolder>
      </S.Wrapper>
    </S.Holder>
  );
}

export default DeleteTodo;
