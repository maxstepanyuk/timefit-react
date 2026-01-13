import type { WorkoutCardProps, WorkoutsPageProps } from './../models/workout'

function WorkoutCard({ minutes = 0, seconds = 0, name = "no name", }: WorkoutCardProps) {
  return (
    <div className='time-section'>
      <div className='row'>
        <p>{name}</p>
        <p>{minutes}:{seconds}</p>
      </div>
      <div className='row'>
        <a href="">
          <button className='button-mini'> ✍️ edit </button>
        </a>
        <a href="">
          <button className='button-mini'> 💪 start </button>
        </a>
      </div>
    </div>
  )
}

function WorkoutsPage({ workouts }: WorkoutsPageProps) {
  let workoutsHtml
  if (workouts && workouts.length > 0) {
    workoutsHtml = workouts.map(workout => <WorkoutCard name={workout.name} seconds={workout.seconds} minutes={workout.minutes} />)
  } else {
    workoutsHtml = "no workouts"
  }

  return (
    <div className='your-workouts-page'>
      {workoutsHtml}
      <div className="row">
        <a href="">
          <button className='button-action'> ℹ️ info</button>
        </a>
        <a href="">
          <button className='button-action'> ➕ add </button>
        </a>
      </div>
    </div>
  )
}

export default WorkoutsPage