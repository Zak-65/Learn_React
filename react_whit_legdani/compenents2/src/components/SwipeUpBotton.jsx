import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTableColumns,faChevronDown,faTable,faMailForward} from '@fortawesome/free-solid-svg-icons';
function SwipeDownBtn({icone,name}){
    return(
        <>
        <div className='flex justify-between p-2'>
            <div className='flex'>
                <FontAwesomeIcon className='mr-2' icon={"faTableColumns"} size="lg" style={{color: "#a7a8aa",}} />
                <p className='text-white' >{name}</p>
            </div>
            <div>
                 <FontAwesomeIcon icon={faChevronDown} style={{color: "#ffffff",}} />
            </div>
        </div>
        </>
    );
}
export default SwipeDownBtn