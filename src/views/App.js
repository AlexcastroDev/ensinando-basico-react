import { useDispatch, useSelector } from 'react-redux';
import { Button } from '../components/Button/Button';
//import { useAppContext } from '../contexts/AppProvider';
import { getPeople } from '../store/actions/people';

function App() {
  //const {people, requestPeople} = useAppContext()
  const dispatch = useDispatch()
  const people = useSelector(state => state.characters.people)
  const isLoading = useSelector(state => state.characters.isLoading)
  const requestPeople = () => !isLoading && dispatch(getPeople())

  return (
    <div className="App">
      <div className='actions'>
        <Button onClick={requestPeople} loading={isLoading} variant="primary">teste</Button>
        <Button variant="secondary">teste</Button>
        <Button>teste</Button>
     </div>
     <ul>
       { people.map((person, index) =>
          <li key={index}>{ person.name } - {person.height}</li>
       )}
      
     </ul>
    </div>
  );
}

export default App;
