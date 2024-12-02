import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import UserCard from './UserCard'
import SwipeDownBtn from './SwipeUpBotton'
function Aside(){
    return(
        <>
            <aside className="h-full w-3/12 bg-purple-950">
                <div className="bg-purple-600 h-[12%] flex justify-between items-center p-5" >
                <div>
                   <img className='h-[60px]' src="./public/assets/img.png" alt="image" />
                </div>
                <div className='text-3xl hover:text-slate-800 '>
                    <FontAwesomeIcon icon={faBars} />
                </div>
                </div>
                <div className='p-5'>
                    <UserCard/>
                    <div className=''>
                        <h1>MAIN</h1>
                        <SwipeDownBtn icone={"faMailForward"} name={"Dashboard"} />
                        <SwipeDownBtn icone={"faTableColumns"} name={"Layout"} />
                        <SwipeDownBtn name={"Farme"} />
                        <SwipeDownBtn name={"Table"} />
                        <SwipeDownBtn name={"Pages"} />
                        
                    </div>
                    <div>
                        <h1>APPS</h1>
                        <SwipeDownBtn name={"Mail"} />
                        <SwipeDownBtn name={"Calendar"} />
                        <SwipeDownBtn name={"invoices"} />
                    </div>
                </div>
            </aside>
        </>
    )
}

export default Aside
