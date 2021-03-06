//import logo from './logo.svg';
import './App.css';
import AppetizersList from './components/AppetizersList';
import DessertsList from './components/DessertsList';
import DrinksList from './components/DrinksList';
import MainsList from './components/MainsList';
import RecommendationsList from './components/RecommendationsList';

function App(props) {
  return (
    <>
      <h1>The {props.name} Menu</h1>
      <AppetizersList />
      <MainsList />
      <DessertsList />
      <DrinksList />
      <RecommendationsList />
    </>
  );
}

export default App;
