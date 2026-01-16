import { useState } from "react"

function WorkoutStopwatchPage() {

  const [isPaused, setPause] = useState(false)

  return (
    <div className='workout-stopwatch-page'>

      <div className="row">
        <button className='button-action' onClick={() => alert("todo")}> ⬅️ Prev </button>
        <button className='button-action' onClick={() => alert("todo")}> ➡️ Next</button>
      </div>

      <div>
        <h1>mm:ss</h1> {/* time left of the current timer */}
        <h2>jumping jacks </h2>  {/* current timer name */}
        <h3>set 1 of 4</h3> 
        <h4>general fitness workout</h4> {/* current workout name */}
      </div>

      {!isPaused ? (
        <div className="row">
          <button className='button-action' onClick={() => alert("todo")}> 🔁 Redo</button>
          <button className='button-action' onClick={() => setPause(true)}> ⏸️ Pause</button>
        </div>
      ) : (
        <div className="row">
          <button className='button-action' onClick={() => alert("todo")}> ⏹️ Stop (Exit)</button>
          <button className='button-action' onClick={() => setPause(false)}> ▶️ Continue</button>
        </div>
      )}

    </div>
  )
}

export default WorkoutStopwatchPage