import { LinksFunction } from '@remix-run/node'
import Terminal from '../components/terminal'
import styles from '~/styles/global.css'
import terminalStyles from '~/styles/terminal.css'
import commandStyles from '~/styles/command.css'

export const links: LinksFunction = () => {
  return [
    { rel: 'stylesheet', href: styles },
    { rel: 'stylesheet', href: terminalStyles },
    { rel: 'stylesheet', href: commandStyles },
  ]
}

export default function Index() {
  return (
    <div>
      <Terminal />
    </div>
  )
}
