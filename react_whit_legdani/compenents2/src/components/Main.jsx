import Header from "./Header";
import Card from "./Card";
import Card2 from "./Card2";
import Button from "./button";

function Main(){
    let nom = "sidqui";
    let isLogged =false;
    let page = 1;
    return(
        <>
            <main className="bg-gray-300 w-4/5 h-full">
                <Header/>
                <div className="p-3">
                    <h1 className="text-5xl ">Dashboard</h1>
                    <p>This is how your company is doing it</p>
                </div>
                {isLogged?
                <section className="p-6 flex justify-between" >
                    <p>hi {nom}</p>
                 <Card color={"blue"} name={"Impression"} number1={"9.5K"} number2={"0.03"}/>
                 <Card color={"blue"} name={"Clicks"} number1={"4.3K"} number2={"3.75"}/>
                 <Card color={"green"} name={"Engagments"} number1={"21K"} number2={"-2.01"}/>
                 <Card color={"purpel"} name={"Posts"} number1={"147"} number2={"1.02"}/>
                </section>
                :<section className="p-6 flex justify-between" >
                <Card color={"blue"} name={"Impression"} number1={"9.5K"} number2={"0.03"}/>
                <Card color={"blue"} name={"Clicks"} number1={"4.3K"} number2={"3.75"}/>
               </section>}
                <div className="flex h-[13%] w-10/12 bg-white m-auto rounded p-3">
                    <Card2/>
                    <Button/>
                </div>
            </main>
        </>
    )
}
export default Main;