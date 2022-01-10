import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'

export const Welcome = () => {
  return (
    <p>
      Welcome! 🎉 Thanks for visiting!
      <br />
      This website is an interactive terminal.
      <br />
      Try typing in <b>help</b> to see a list of available commands.
    </p>
  )
}

export const About = () => {
  return (
    <p>
      Hey there! 👋
      <br />
      My name is Jadon. I'm a Software Developer based in Utah.
      <br />
      I enjoy all kinds of development, but I'm most interested in web and
      mobile development.
      <br />
      I aspire to learn as much as I can so that I can contribute to pushing the
      boudaries of what's possible with development.
      <br />
      In my free time I enjoy playing pickleball and soccer, watching the NBA,
      spending time with friends and family, the occasional video game, and
      learning new things.
      <br />
      I'm always interested in new connections and opportunities, so don't
      hesitate to reach out!
    </p>
  )
}

export const Social = () => {
  return (
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
}

export const Contact = () => {
  return <p>contact me</p>
}

export const Source = () => {
  return (
    <p>
      View the <a href='https://github.com/jschol3s/portfolio'>source code</a>{' '}
      on Github
    </p>
  )
}

export const Help = () => {
  return (
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
      <b>welcome</b> - view the welcome message
      <br />
      <b>help</b> - view the help message (this message)
    </p>
  )
}

export const Default = (props: { input: string }) => {
  return (
    <p>
      Command not found: {props.input}
      <br />
      Please type help for allowed commands
    </p>
  )
}
