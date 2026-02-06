export interface WorkoutCardProps {
  name?: string,
  minutes?: number,
  seconds?: number,
}

export interface WorkoutsPageProps {
  workouts: WorkoutCardProps[];
}



export interface TimerSectionProps {
  name?: string
  minutes: number,
  seconds: number,
  onTimerDelete: () => void;
}

export interface SetSectionProps {
  repeat: number,
  timers: TimerSectionProps[]
  onSetDelete: () => void;
}

export interface WorkoutProps {
  name?: string,
  description?: string,
  sets: { repeat: number, timers: TimerSectionProps[] }[];
}

export interface WorkoutDetailsPageProps {
  workout: WorkoutProps
}