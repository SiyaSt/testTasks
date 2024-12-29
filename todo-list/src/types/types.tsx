export interface DropdownContextType {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean | ((prev: boolean) => boolean)) => void;
}

export interface Options {
  value: string;
  label: string;
}

export interface Task {
  id: number;
  text: string;
  priority: priority;
  completed: boolean;
}

export type priority = "low" | "medium" | "high";
