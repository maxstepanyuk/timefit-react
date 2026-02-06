export interface WorkoutCardProps {
  name?: string,
  minutes?: number,
  seconds?: number,
}

export interface WorkoutsPageProps {
  workouts: WorkoutCardProps[];
}



export interface TimerSectionProps {
  id: number
  name?: string
  minutes: number,
  seconds: number,
  onTimerDelete: (id: number) => void;
}

export interface SetSectionProps {
  id: number
  repeat: number,
  timers: TimerSectionProps[]
  onSetDelete: (id: number) => void;
}

export interface WorkoutProps {
  name?: string,
  description?: string,
  sets: { repeat: number, timers: TimerSectionProps[] }[];
}

export interface WorkoutDetailsPageProps {
  workout: WorkoutProps
}