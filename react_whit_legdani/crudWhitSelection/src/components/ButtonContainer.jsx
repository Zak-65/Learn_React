import Button from "./small/Button";

export default function ButtonContainer({update,create,del}){
  return (
    <div className="flex gap-4">
      <Button content={"Update"} colors={"bg-orange-700 hover:bg-orange-900"} update={update} del={del} create={create} />
      <Button content={"Delete"} colors={"bg-red-700 hover:bg-red-900"} update={update} del={del} create={create} />
      <Button content={"Create"} colors={"bg-green-700 hover:bg-green-900"} update={update} del={del} create={create} />
    </div>
  );
}
