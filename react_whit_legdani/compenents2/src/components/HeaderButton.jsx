function HeaderButton(props) {
    return (
      <a
        href="#"
        className="relative p-1 rounded-md flex items-center"
      >
        <div className="relative">
          <i
            className={`${props.icon.type} ${props.icon.icon} text-blue-400 font-bold text-2xl hover:text-blue-950`}
          ></i>
  
          <span className="absolute top-[-14px] right-[-14px] bg-blue-300 text-white text-sm font-extrabold py-1 px-2 rounded-full">
            {props.number}
          </span>
        </div>
  
        <span className="text-gray-200 text-xl text-start ml-4">
          {props.content}
        </span>
      </a>
    );
  }
  
  export default HeaderButton;