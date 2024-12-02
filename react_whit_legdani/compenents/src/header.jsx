import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faMagnifyingGlass} from '@fortawesome/free-solid-svg-icons';
function Header(){
    return(
        <>
            <div className="bg-white borde shadow-slate-900 h-20 w-full justify-between pt-6 p-6">
                <div className="bg-gray-100 w-3/5  h-10 rounded-xl pl-6">
                <FontAwesomeIcon icon={faMagnifyingGlass} style={{color: "#74C0FC",}} />
                <input type="text" className="bg-gray-100 h-full w-3/5   rounded-xl pl-6" placeholder="Search" />
                </div>
            </div>
        </>
    );
}
export default Header;