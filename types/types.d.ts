interface IJob {
  id: number;
  name: string;
  priority: number;
}

interface IPrioritySelect {
  value: string | number;
  label: string;
}