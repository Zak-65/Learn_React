import { createRoot } from 'react-dom/client'
import Menu  from './menu';
import Header from './header';
import Main from './main';

createRoot(document.getElementById('root')).render(
  <>
  <div className='flex h-full w-full '>
    <Menu/>
    <div className='h-full'>
      <Header/>
      <Main/>
    </div>
  </div>
    
  </>
)
