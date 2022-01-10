import { format } from 'date-fns'
import { useState } from 'react'
import { LinksFunction } from 'remix'
import Command from './command'
import terminalStyles from '~/styles/terminal.css'

export const links: LinksFunction = () => {
  return [{ rel: 'stylesheet', href: terminalStyles }]
}

const genId = () => {
  return Date.now()
}

export default function terminal() {
  const [commands, setCommands] = useState<{ id: number }[]>([{ id: genId() }])

  const addNewPrompt = () => {
    setCommands([...commands, { id: genId() }])
  }

  const clearTerminal = () => {
    setCommands([{ id: genId() }])
  }

  const delay = (ms: number) => new Promise((res) => setTimeout(res, ms))
  const date = format(new Date(), 'E MMM  d K:mm:ss')

  return (
    <div className='terminal'>
      <div className='terminal-header'>
        <div className='circles'>
          <div className='circle circle-red'></div>
          <div className='circle circle-yellow'></div>
          <div className='circle circle-green'></div>
        </div>
        github.com/jschol3s
      </div>
      <div className='terminal-body'>
        <div className='login'>Last login: {date}</div>
        {commands?.map((CommandState) => (
          <Command
            key={CommandState.id}
            addNewPrompt={addNewPrompt}
            clearTerminal={clearTerminal}
          />
        ))}
      </div>
    </div>
  )
}
