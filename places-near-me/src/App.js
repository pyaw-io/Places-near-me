import Header from './components/Header';
import Map from './components/Map'
import List from './components/List'
import classes from './App.module.css'


function App() {
  return (
    <div >
      <Header/>
      <main className={classes.main}>
      <List/>
      <Map/>
      </main>
    </div>
  );
}

export default App;
