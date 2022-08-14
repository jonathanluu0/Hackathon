import React from 'react'
import './Homepage.css';
import ezWiz from './images/Moving_Wizard.gif';
import medWiz from './images/gandalf_hard.gif';
import hardWiz from './images/Kuro_Wizard.gif';
import App from './App'


export default function Homepage() {
  return (
    <div className='grid place-items-center h-screen'>
      <div className=''>
        <h1 className='text-9xl'>Tricky Wizard</h1>
      </div>

      <div className='grid grid-cols-3 gap-4 place-items-center h-screen'>
        <div className="difficulty card" onClick={startGame}>
          <button className="flex flex-col" type="easy"><img src={ezWiz} />
            EASY
          </button>
        </div>

        <div className="difficulty card" onClick={startGame}>
          <button className="flex flex-col" type="medium"><img src={medWiz} />
            MEDIUM
          </button>
        </div>

        <div className="difficulty card" onClick={startGame}>
            <button className="flex flex-col" type="hard"> <img src={hardWiz} />
              HARD
            </button>
        </div>

        <div className='col-start-2 col-end-3'>
          <label htmlFor="name">Player Name: </label>
          <input type="text" id="name" name="character_name" />
        </div>

      </div>
    </div>
  )
}

function startGame(){
  window.location.href='app';
}