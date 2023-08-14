import './App.css'
import SearchBar from "./Components/SearchBar";
import BookData from "./Data.json";

export default function App() {
  return (
    <>
      <div>
        <a href="https://mui.com/" target="_blank">
          <img src="https://seeklogo.com/images/M/material-ui-logo-5BDCB9BA8F-seeklogo.com.png" className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src="https://light9639.github.io/React-GSAP-TypeScript/assets/img/react-35ef61ed.svg" className="logo react" alt="React logo" />
        </a>
      </div>
      <h2>Input에 책 이름을 입력하시오.</h2>
      <SearchBar placeholder="영어로 입력해주세요..." data={BookData} />
    </>
  )
}
