import { SetStateAction } from 'react'
import {
  About,
  Contact,
  Default,
  Help,
  Social,
  Source,
  Welcome,
} from './commandOutput'

export function handleCommands(
  input: string,
  props: { addNewPrompt: () => void; clearTerminal: () => void },
  setOutput: {
    (value: SetStateAction<JSX.Element>): void
    (arg0: JSX.Element): void
  }
) {
  switch (input) {
    case '':
      props.addNewPrompt()
      break
    case 'clear':
      props.clearTerminal()
      break
    case 'welcome':
      setOutput(<Welcome />)
      props.addNewPrompt()
      break
    case 'about':
      setOutput(<About />)
      props.addNewPrompt()
      break
    case 'social':
      setOutput(<Social />)
      props.addNewPrompt()
      break
    // TODO: Implement contact feature
    // case 'contact':
    //   setOutput(<Contact />)
    //   props.addNewPrompt()
    //   break
    case 'source':
      setOutput(<Source />)
      props.addNewPrompt()
      break
    case 'help':
      setOutput(<Help />)
      props.addNewPrompt()
      break
    default:
      setOutput(<Default input={input} />)
      props.addNewPrompt()
      break
  }
}
