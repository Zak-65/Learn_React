export default function Button({ content, colors,update,create,del }) {
  
  var executeFunction 
  
  if(content === "Update"){
    executeFunction = update;
  }else if(content === "Delete"){
    executeFunction = del;
  }else if(content === "Create"){
    executeFunction = create
  }

  return <button className={`${colors} px-12 py-2 rounded-md font-extrabold text-xl text-white`} onClick={()=>executeFunction()}>{content}</button>;
}
