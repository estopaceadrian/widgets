import Accordion from './components/Accordion/Accordion';
import Count from './components/Count';
import Dropdown from './components/Dropdown/Dropdown';
import GetUser from './components/GetUser/GetUser';
import Header from './components/Header';
import Route from './components/Route';
import Search from './components/Search';
import Todo from './components/Todo/Todo';
import Translate from './components/Translate/Translate';

export default function App() {
  return (
    <div>
      <Header />
      <Route path="/">
        <Accordion />
      </Route>
      <Route path="/count">
        <Count />
      </Route>
      <Route path="/dropdown">
        <Dropdown />
      </Route>
      <Route path="/getuser">
        <GetUser />
      </Route>
      <Route path="/search">
        <Search />
      </Route>
      <Route path="/todo">
        <Todo />
      </Route>
      <Route path="/translate">
        <Translate />
      </Route>
    </div>
  );
}
