import { useState } from 'react'
import { LinksFunction } from 'remix'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import commandStyles from '~/styles/command.css'

export const links: LinksFunction = () => {
  return [{ rel: 'stylesheet', href: commandStyles }]
}

const Command = (props: {
  addNewPrompt: () => void
  clearTerminal: () => void
}) => {
  const [submitted, setSubmitted] = useState(false)
  const [input, setInput] = useState<string>('')
  const [output, setOutput] = useState<JSX.Element>(<></>)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
    switch (input) {
      case '':
        break
      case 'clear':
        setInput('')
        setOutput(<></>)
        props.clearTerminal()
        break
      case 'welcome':
        setOutput(
          <p>
            Welcome! 🎉 Thanks for visiting!
            <br />
            This website is an interactive terminal.
            <br />
            Try typing in <b>help</b> to see a list of available commands.
          </p>
        )
        props.addNewPrompt()
        break
      case 'about':
        setOutput(
          <p>
            Hey there! 👋
            <br />
            My name is Jadon. I'm a Software Developer based in Utah.
            <br />
            I enjoy all kinds of development, but I'm most interested in web and
            mobile development.
            <br />
            I aspire to learn as much as I can so that I can contribute to
            pushing the boudaries of what's possible with development.
            <br />
            In my free time I enjoy playing pickleball and soccer, watching the
            NBA, spending time with friends and family, the occasional video
            game, and learning new things.
            <br />
            I'm always interested in new connections and opportunities, so don't
            hesitate to reach out!
          </p>
        )
        props.addNewPrompt()
        break
      case 'social':
        setOutput(
          <p>
            <a href='https://github.com/jschol3s' className='social-link'>
              <FontAwesomeIcon icon={faGithub} />
              Github
            </a>
            <br />
            <a
              href='https://www.linkedin.com/in/jadon-scholes-a97110172'
              className='social-link'
            >
              <FontAwesomeIcon icon={faLinkedin} />
              Linkedin
            </a>
            <br />
            <a href='https://twitter.com/jadonscholes' className='social-link'>
              <FontAwesomeIcon icon={faTwitter} />
              Twitter
            </a>
          </p>
        )
        props.addNewPrompt()
        break
      case 'contact':
        //TODO: implement contact functionality
        break
      case 'source':
        //TODO: implement source functionality
        break
      case 'help':
        setOutput(
          <p>
            Available commands:
            <br />
            <b>about</b> - About me
            <br />
            <b>social</b> - Social links
            <br />
            <b>contact</b> - Send me an email
            <br />
            <b>source</b> - View the source code
            <br />
            <b>clear</b> - clear the terminal
            <br />
            <b>help</b> - view the help message
            <br />
            <b>welcome</b> - view the welcome message (this message)
          </p>
        )
        props.addNewPrompt()
        break
      default:
        setOutput(
          <p>
            Command not found: {input}
            <br />
            Please type help for allowed commands
          </p>
        )
        props.addNewPrompt()
        break
    }
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
