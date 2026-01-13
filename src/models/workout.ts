export interface WorkoutCardProps {
  name?: string,
  minutes?: number,
  seconds?: number,
}

export interface WorkoutsPageProps {
  workouts: WorkoutCardProps[];
}
