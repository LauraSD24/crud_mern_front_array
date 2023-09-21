import ContextProviderUser from './context/ContextProviderUser';
import RoutesApp from './routes/RoutesApp';

function App() {
  return (
    <div className="App">
        <ContextProviderUser>
          <RoutesApp/>
        </ContextProviderUser>
    </div>
  );
}

export default App;
