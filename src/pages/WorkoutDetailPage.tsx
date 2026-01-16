import { useState } from "react"
import type { editMode } from "../models/util"
import type { WorkoutDetailsPageProps, WorkoutProps, SetSectionProps, TimerSectionProps } from "../models/workout"

function TimerSection({ minutes = 0, seconds = 0, name = 'timer', isEditMode = false }: TimerSectionProps & editMode) {

  const [nameValue, setNameValue] = useState(name)
  const [minutesValue, setMinutesValue] = useState(minutes)
  const [secondsValue, setSecondsValue] = useState(seconds)

  function handleUpdSecondsValue(sec: number) {
    if (sec < 60 && sec >= 0) {
      setSecondsValue(sec)
    }
  }

  return (
    <div className='timer'>

      {isEditMode ? (<>

        <input
          type="text" name="name" id="name" placeholder="name"
          value={nameValue}
          onChange={(e) => setNameValue(e.target.value)}
        />
        <div className="row min-sec-inputs">
          <input
            type="number" name="minutes" id="minutes" placeholder="minutes" min={0}
            value={minutesValue}
            onChange={(e) => setMinutesValue(Number(e.target.value))}
          />
          <p>:</p>
          <input
            type="number" name="seconds" id="seconds" placeholder="seconds" min={0} max={59}
            value={secondsValue}
            onChange={(e) => handleUpdSecondsValue(Number(e.target.value))}
          />
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

  const [repeatValue, setRepeatValue] = useState(repeat)

  function handleUpdRepeatValue(repeats: number) {
    if (repeats >= 0) {
      setRepeatValue(repeats)
    } else {
      setRepeatValue(0)
    }
  }

  return (
    <div className='set-section'>
      <p>Sets: {repeatValue}</p>
      {isEditMode && (
        <div className="row">
          <button className="button-mini" onClick={() => handleUpdRepeatValue(repeatValue - 1)}>remove set rep</button>
          <button className="button-mini" onClick={() => alert("todo")}>delete set</button>
          <button className="button-mini" onClick={() => handleUpdRepeatValue(repeatValue + 1)}>add set rep</button>
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

  const [nameValue, setNameValue] = useState(name)
  const [decriptionValue, setDecriptionValue] = useState(decription)


  return (
    <div className='workout'>
      {isEditMode ? (<>
        <div className="row"></div>
        <input
          type="text" placeholder="name" className="text-center"
          value={nameValue} onChange={(e) => setNameValue(e.target.value)}
        />
        <br />
        <textarea
          placeholder="decription"
          value={decriptionValue}
          onChange={(e) => setDecriptionValue(e.target.value)}
        ></textarea>
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