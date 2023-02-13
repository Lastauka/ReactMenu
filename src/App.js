import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Main page
        </p>
        <a>
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
                  
        </a>
      </header>
    </div>
  );
}

const  mainmenu = document.querySelector("#mainmenu");
const popup = document.querySelector("#popup");
const body = document.body;

// clone menu
const menu = document.querySelector("#menu").cloneNode(1);

// call mainMenu
mainmenu.addEventListener("click", mainmenuHandler);

// witth click
function mainmenuHandler(e) {
  e.preventDefault();
  //style changing
  popup.classList.toggle("open");
  mainmenu.classList.toggle("active");
  body.classList.toggle("noscroll");
  renderPopup();



  function closeOnClick() {
    popup.classList.remove("open");
    mainmenu.classList.remove("active");
    body.classList.remove("noscroll");
  }

export default App;
};