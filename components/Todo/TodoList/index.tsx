import { useMemo, useState, useCallback } from "react";

// styles
import * as S from "./styles.styled";

// Redux hooks
import { useAppSelector } from "../../../app/hooks";

// Slicer functions
import { selectJobList } from "../../../features/JobListSlice";
import { selectPriorityOptions } from "../../../features/PriorityOptionsSlice";

// icons
import {
  FiSearch,
  FiEdit,
  FiDelete,
  FiArrowDown,
  FiArrowUp,
} from "react-icons/fi";

// types
import { IJob, IPrioritySelect } from "../model";

// components
import Input from "../../Input";
import Select from "../../Select";
import Button from "../../Button";
import Badge from "../../Badge";
import EditTodo from "../EditTodo";
import DeleteTodo from "../DeleteTodo";

const SORT_MODE_TYPES: { name: string; priority: string } = {
  name: "name",
  priority: "priority",
};

const INITIAL_SORT_PRIORITY: IPrioritySelect = {
  value: 0,
  label: "Priority (all)",
};

function TodoList(): JSX.Element {
  const jobList: IJob[] = useAppSelector(selectJobList);
  const priorityOptions: IPrioritySelect[] = useAppSelector(
    selectPriorityOptions
  );

  const [sortPriority, setSortPriority] = useState<string | number>(
    INITIAL_SORT_PRIORITY.value
  );
  const [searchText, setSearchText] = useState<string>("");

  const [nameSortMode, setnameSortMode] = useState<boolean>(true);
  const [prioritySortMode, setprioritySortMode] = useState<boolean>(true);
  const [lastSelected, setLastSelected] = useState<string>(
    SORT_MODE_TYPES.priority
  );

  const [editJobObj, setEditJobObj] = useState<IJob>();
  const [deleteJobObj, setDeleteJobObj] = useState<IJob>();

  const handleSelectOnChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSortPriority(Number(e.target.value));
  };

  const handleInputOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchText(e.target.value);
  };

  const toggleLastSelected = (sortMode: string) => {
    if (sortMode === SORT_MODE_TYPES.priority) {
      setLastSelected(SORT_MODE_TYPES.priority);
      setprioritySortMode(!prioritySortMode);
    } else {
      setLastSelected(SORT_MODE_TYPES.name);
      setnameSortMode(!nameSortMode);
    }
  };

  const sortByName = useCallback(
    (a: IJob, b: IJob) => {
      if (a.name < b.name) {
        return nameSortMode ? -1 : 1;
      }

      if (a.name > b.name) {
        return nameSortMode ? 1 : -1;
      }

      return 0;
    },
    [nameSortMode]
  );

  const sortByPriority = useCallback(
    (a: IJob, b: IJob) => {
      if (a.priority < b.priority) {
        return prioritySortMode ? -1 : 1;
      }

      if (a.priority > b.priority) {
        return prioritySortMode ? 1 : -1;
      }

      return 0;
    },
    [prioritySortMode]
  );

  const filteredJobs = useMemo((): IJob[] => {
    let _jobList: IJob[] = JSON.parse(JSON.stringify(jobList));

    if (sortPriority !== INITIAL_SORT_PRIORITY.value) {
      _jobList = _jobList.filter(
        (job: IJob) =>
          job.priority === sortPriority &&
          job.name.toLowerCase().includes(searchText.toLowerCase())
      );
    } else {
      _jobList =
        searchText === ""
          ? _jobList
          : _jobList.filter((job) =>
              job.name.toLowerCase().includes(searchText.toLowerCase())
            );
    }

    if (lastSelected === "priority") {
      return _jobList.sort(sortByPriority);
    } else {
      // Sort By Name

      return _jobList.sort(sortByName);
    }
  }, [
    sortPriority,
    lastSelected,
    jobList,
    searchText,
    sortByPriority,
    sortByName,
  ]);

  const renderOptions = (options: Array<IPrioritySelect>): JSX.Element[] => {
    return options.map((option: IPrioritySelect) => (
      <option key={option.value} value={option.value}>
        {option.label}
      </option>
    ));
  };

  return (
    <>
      <S.Wrapper>
        <S.HeaderWrapper>
          <S.Title>Job List</S.Title>
          <S.Count>
            ({filteredJobs.length}/{jobList.length})
          </S.Count>
        </S.HeaderWrapper>
        <S.FilterWrapper>
          <S.FilterInput>
            <Input
              placeholder="Job Name"
              icon={<FiSearch />}
              onChange={handleInputOnChange}
            />
          </S.FilterInput>
          <S.FilterInput>
            <Select
              onChange={handleSelectOnChange}
              options={[
                {
                  value: INITIAL_SORT_PRIORITY.value,
                  label: INITIAL_SORT_PRIORITY.label,
                },
                ...priorityOptions,
              ]}
              renderItem={renderOptions}
            />
          </S.FilterInput>
        </S.FilterWrapper>

        <S.TableWrapper>
          <S.Table>
            <S.Thead>
              <S.Tr>
                <S.Th style={{ width: "60%" }} className="-sort-mode">
                  <Button
                    variant="ghost"
                    onClick={() => toggleLastSelected(SORT_MODE_TYPES.name)}
                    {...(lastSelected === SORT_MODE_TYPES.name && {
                      icon: nameSortMode ? <FiArrowDown /> : <FiArrowUp />,
                    })}
                  >
                    Name
                  </Button>
                </S.Th>
                <S.Th style={{ width: "30%" }} className="-sort-mode">
                  <Button
                    variant="ghost"
                    onClick={() => toggleLastSelected(SORT_MODE_TYPES.priority)}
                    {...(lastSelected === SORT_MODE_TYPES.priority && {
                      icon: prioritySortMode ? <FiArrowDown /> : <FiArrowUp />,
                    })}
                  >
                    Priority
                  </Button>
                </S.Th>
                <S.Th style={{ width: "10%" }}>Action</S.Th>
              </S.Tr>
            </S.Thead>
            <S.Tbody>
              {filteredJobs.length > 0 &&
                filteredJobs.map((job: IJob) => (
                  <S.Tr key={job.id}>
                    <S.Th>{job.name}</S.Th>
                    <S.Th>
                      <Badge
                        variant={
                          priorityOptions
                            .find((option) => option.value === job.priority)
                            ?.label?.toLowerCase() ?? "trivial"
                        }
                      >
                        {priorityOptions.find(
                          (option) => option.value === job.priority
                        )?.label ?? "Trivial"}
                      </Badge>
                    </S.Th>
                    <S.Th>
                      <S.ButtonsHolder>
                        <Button onClick={() => setEditJobObj(job)}>
                          <FiEdit />
                        </Button>

                        <Button onClick={() => setDeleteJobObj(job)}>
                          <FiDelete />
                        </Button>
                      </S.ButtonsHolder>
                    </S.Th>
                  </S.Tr>
                ))}
            </S.Tbody>
          </S.Table>
        </S.TableWrapper>
      </S.Wrapper>

      {editJobObj && <EditTodo job={editJobObj} setJob={setEditJobObj} />}

      {deleteJobObj && (
        <DeleteTodo job={deleteJobObj} setJob={setDeleteJobObj} />
      )}
    </>
  );
}

export default TodoList;
