export interface IJob {
  id: number;
  name: string;
  priority: number;
}

export interface IPrioritySelect {
  value: string | number;
  label: string;
}