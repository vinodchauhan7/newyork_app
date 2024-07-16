import './App.css';
import Navbar from './components/Common/Navbar';
import MostPopularArticals from './components/MostPopularArticle/';
import {Route, Routes} from 'react-router-dom';
import ArticleDetailPage from './components/MostPopularArticle/ArticleDetailPage';

function App() {

  return (
    <main className='flex flex-col px-2 py-2 h-screen w-full'>
      <Navbar />
      <section id='Popular_Articles'>
      <Routes>
         <Route>
           <Route path="/" element={<MostPopularArticals />} />
           <Route path="/article/:id" element={<ArticleDetailPage />} />
         </Route>
       </Routes>
      </section>
      <footer className='flex mt-4 justify-center flex-grow border-t-2 border-black font-bold text-xl'>
        <span className='justify-center items-center mt-2'>New York Times</span>
      </footer>
    </main>
  );
}

export default App;
