import type { WorkoutDetailsPageProps, WorkoutProps, SetSectionProps, TimerSectionProps } from "../models/workout"

function TimerSection({ minutes = 0, seconds = 0, name = 'timer' }: TimerSectionProps) {
  return (
    <div className='timer'>
      <p>{name}</p>
      <p >{minutes}:{seconds}
      </p>

    </div>
  )
}

function SetSection({ repeat = 0, timers }: SetSectionProps) {

  let timersHtml
  if (timers && timers.length > 0) {
    timersHtml = timers.map(timer => <TimerSection minutes={timer.minutes} seconds={timer.seconds} name={timer.name}></TimerSection>)
  } else {
    timersHtml = "no timers"
  }

  return (
    <div className='set-section'>
      <p>Sets: {repeat}</p>
      <div className='timers'>
        {timersHtml}
      </div>
    </div>
  )
}

function Workout({ name = "no name", decription = "no description", sets }: WorkoutProps) {

  let setsHtml
  if (sets && sets.length > 0) {
    setsHtml = sets.map(set => <SetSection repeat={set.repeat} timers={set.timers} />)
  } else {
    setsHtml = "no sets"
  }

  return (
    <div className='workout'>
      <h3>{name}</h3>
      <p>description: {decription}</p>
      <div className='sets'>
        {setsHtml}
      </div>
    </div>
  )
}

function WorkoutDetailsPage({workout}: WorkoutDetailsPageProps) {
  return (
    <div className='your-timers-page'>
      <Workout name={workout.name} decription={workout.decription} sets={workout.sets} ></Workout>
      <div className="row">
        <a href="/todo">
          <button className='button-action'> 🚪 back</button>
        </a>
        <a href="/todo">
          <button className='button-action'> 💪 begin</button>
        </a>
      </div>
    </div>
  )
}

export default WorkoutDetailsPage