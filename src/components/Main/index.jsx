import classes from 'src/components/Main/Main.module.css'
import { Footer } from 'src/components/Footer'
import { Headline } from 'src/components/Headline'
import { Links } from 'src/components/Links'

export function Main(props) {
  return (
    <main className={classes.main}>
      <Headline page={props.page}>
        <code className={classes.code}>pages/{props.page}.js</code>
      </Headline>
      <Links />
    </main>
  )
}
