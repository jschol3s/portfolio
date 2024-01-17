import { useState } from 'react'
import { LinksFunction } from '@remix-run/node'
import { handleCommands } from './handleCommands'
import commandStyles from '~/styles/command.css'

export const links: LinksFunction = () => {
  return [{ rel: 'stylesheet', href: commandStyles }]
}

export const Command = (props: {
  addNewPrompt: () => void
  clearTerminal: () => void
}) => {
  const [submitted, setSubmitted] = useState(false)
  const [input, setInput] = useState<string>('')
  const [output, setOutput] = useState<JSX.Element>(<></>)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
    handleCommands(input, props, setOutput)
  }

  const promptTitle = 'vistor@jadonscholes ~ % '

  return (
    <div className='command'>
      <div className='prompt-title'>
        <form onSubmit={(e) => handleSubmit(e)} autoComplete='off'>
          <label>{promptTitle}</label>
          <input
            type='text'
            onChange={(e) => setInput(e.target.value)}
            className='terminal-input'
            disabled={submitted}
            autoFocus
          ></input>
        </form>
        <div className='terminal-output'>{output}</div>
      </div>
    </div>
  )
}

export default Command
