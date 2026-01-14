import type { editMode } from "../models/util"
import type { WorkoutDetailsPageProps, WorkoutProps, SetSectionProps, TimerSectionProps } from "../models/workout"

function TimerSection({ minutes = 0, seconds = 0, name = 'timer', isEditMode = false }: TimerSectionProps & editMode) {
  return (
    <div className='timer'>

      {isEditMode ? (<>
        <input type="text" name="name" id="name" value={name} placeholder="name" />
        <div className="row min-sec-inputs">
          <input type="number" name="minutes" id="minutes" value={minutes} placeholder="minutes" min={0} />
          <p>:</p>
          <input type="number" name="seconds" id="seconds" value={seconds} placeholder="seconds" min={0} max={59} />
        </div>
        <button className="button-mini" onClick={() => alert("todo")}>delete timer</button>
      </>) : (<>
        <p>{name}</p>
        <p >{minutes}:{seconds}
        </p>
      </>)
      }

    </div>
  )
}

function SetSection({ repeat = 0, timers, isEditMode = false }: SetSectionProps & editMode) {

  let timersHtml
  if (timers && timers.length > 0) {
    timersHtml = timers.map(timer => <TimerSection minutes={timer.minutes} seconds={timer.seconds} name={timer.name} isEditMode={isEditMode}></TimerSection>)
  } else {
    timersHtml = "no timers"
  }

  return (
    <div className='set-section'>
      <p>Sets: {repeat}</p>
      {isEditMode && (
        <div className="row">
          <button className="button-mini" onClick={() => alert("todo")}>add set rep</button>
          <button className="button-mini" onClick={() => alert("todo")}>delete set</button>
          <button className="button-mini" onClick={() => alert("todo")}>remove set rep</button>
        </div>
      )}
      <div className='timers'>
        {timersHtml}
      </div>
      {isEditMode && (
        <button className="button-mini" onClick={() => alert("todo")}>add timer</button>
      )}
    </div>
  )
}

function Workout({ name = "no name", decription = "no description", sets, isEditMode = false }: WorkoutProps & editMode) {

  let setsHtml
  if (sets && sets.length > 0) {
    setsHtml = sets.map(set => <SetSection repeat={set.repeat} timers={set.timers} isEditMode={isEditMode} />)
  } else {
    setsHtml = "no sets"
  }

  return (
    <div className='workout'>
      {isEditMode ? (<>
        <div className="row"></div>
        <input type="text" value={name} placeholder="name" className="text-center" />
        <br />
        <textarea placeholder="decription" value={decription}></textarea>
      </>) : (<>
        <h3>{name}</h3>
        <p>description: {decription}</p>
      </>)}
      <div className='sets'>
        {setsHtml}
      </div>
    </div>
  )
}

function WorkoutDetailsPage({ workout, isEditMode = false }: WorkoutDetailsPageProps & editMode) {
  return (
    <div className='your-timers-page'>
      <Workout name={workout.name} decription={workout.decription} sets={workout.sets} isEditMode={isEditMode} ></Workout>
      <div className="row">
        {isEditMode ? (<>
          <button className='button-action' onClick={() => alert("todo")}> 💾 save workout</button>
          <button className='button-action' onClick={() => alert("todo")}> ➕ add set</button>
        </>) : (<>
          <a href="/todo">
            <button className='button-action' onClick={() => alert("todo")}> 🚪 back</button>
          </a>
          <a href="/todo">
            <button className='button-action' onClick={() => alert("todo")}> 💪 begin</button>
          </a>
        </>)
        }
      </div>
    </div>
  )
}

export default WorkoutDetailsPage