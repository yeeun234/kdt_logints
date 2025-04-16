import './App.css'
import Home from './components/Home'
import Nav from './components/Nav'
import Login from './components/Login'
import Subway from './components/Subway'
import TodoList from './components/TodoList'
import TsxTest from './components/TsxTest'
import { Route, Routes } from 'react-router-dom'
import { BrowserRouter } from 'react-router-dom'
import MyClock from './02MyClock/MyClock'
import Lotto from './05Lotto/Lotto'
import FoodMain from './06FoodCard/FoodMain'
function App() {


  return (
    <BrowserRouter>
    <div className='w-full xl:w-8/10 h-screen mx-auto flex flex-col'>
      <header className='w-full h-20 flex justify-center '>
          <Nav/> 
      </header>
      <main className='w-full  flex-grow text-center
      flex flex-col justify-start items-center overflow-y-auto '>  
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/Subway" element={<Subway/>}/>
          <Route path="/TodoList" element={<TodoList/>}/>
          <Route path="/test" element={<TsxTest/>}/>
          <Route path="/MyClock" element={<MyClock/>}/>
          <Route path="/Lotto" element={<Lotto/>}/>
          <Route path="/FoodMain" element={<FoodMain/>}/>
        </Routes>
      </main>
      <footer className='w-full h-20  flex justify-center items-center bg-green-100'>
       [K-Digital 부산대 25-1회차] AI 데이터 분석 풀스택 웹 개발자 양성과정
      </footer>
    </div>
    </BrowserRouter>
  )
}

export default App
