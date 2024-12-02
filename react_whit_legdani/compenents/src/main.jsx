import Card from "./card";
function Main(){
    return(
        <>
        <div className="bg-gray-200 h-full p-10 ">
            <h1 className=" text-6xl font-bold mb-4" >Dashboard</h1>
            <p className="text-xl">This is how your company is doing it</p>
            <section className=" pt-5 flex justify-between">
                <Card color={"blue"} name={"Impression"} number1={"9.5K"} number2={"0.03"}/>
                <Card name={"Cliks"} number1={"4.3K"} number2={"3.75"}/>
                <Card name={"Engagments"} number1={"21K"} number2={"-2.01"}/>
                <Card name={"Posts"} number1={"147"} number2={"1.02"}/>
            </section>
        </div>
        </>
    );
}
export default Main;