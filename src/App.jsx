import Header from './components/Header'
import Main from './components/Main'
import './styles/styles.css';
import { useTodos } from './components/useTodos';

const App = () => {
  const [ todos ] = useTodos()
  return (
    <div>
      <Header />
      <Main todos={todos} />
    </div>
  )
}

export default App