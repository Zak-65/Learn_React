import Logo from "./logo";
import BtnTiree from "./btnTiree";
import SwipeDownBtn from "./swipeDownBtn";
function Menu(){
    return(
        <>
        <aside className="flex flex-col h-full w-1/5  ">
        <div className="bg-violet-600 h-20 flex justify-between pt-6 p-6">
            <Logo/>
            <BtnTiree />
        </div>
        <div className="bg-violet-950 flex-1 h-auto ">
            <profile>
                <p>profile</p>
                <p>test</p>
            </profile>
            <div className="p-10" >
                <main >
                    <p className="text-white mb-4">Main</p>
                    
                    <SwipeDownBtn n/>
                    <SwipeDownBtn name={"Layout"}/>
                    <SwipeDownBtn name={"Forms"}/>
                    <SwipeDownBtn name={"Tables"}/>
                    <SwipeDownBtn name={"pages"}/>
                </main>
                <apps>
                    <p className="text-white mb-4">Apps</p>
                    <SwipeDownBtn name={"Mail"}/>
                    <SwipeDownBtn name={"Calandar"}/>
                    <SwipeDownBtn name={"Invoicon"}/>
                </apps>
            </div>
        </div>
        </aside>
        </>
    );
}

export default Menu;