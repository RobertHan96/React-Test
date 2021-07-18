import logo from "./logo.svg";
import "./App.css";
import Product from "./components/Product"
import Cats from "./components/Cats"
import HelloWorld, { helloToday } from "./components/HelloWorld"

// 클라이언트에서 자주 쓰는 데이터 저장 방식 : 로컬 스토리지, 세션 스토리지
window.localStorage.setItem('productName', 'Cat Tower');
window.sessionStorage.setItem('productName', 'Cat Tower');

const product = { name: 'Cat Tower', price:139_000, brand: 'coupang'}

function App() {
  const productNameFromLocalStorage = window.localStorage.getItem('productName');
  const productNameFromSessionStorage = window.sessionStorage.getItem('productName');

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React!!!
        </a>
        <p> 
          productNameFromLocalStorage : { productNameFromLocalStorage}
        </p>
        <p> 
          productNameSession : { productNameFromSessionStorage}
        </p>

      </header>
      <main> 
        <HelloWorld name="tests" />
        <Product />
        <Cats/> 
      </main>
    </div>
  );
}

export default App;
