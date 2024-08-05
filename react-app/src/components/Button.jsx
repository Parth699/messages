function Button(props) {
    console.log(props)
    return (
        <button className="text-white px-4 py-2 bg-transparent hover:bg-stone-200 hover:bg-opacity-50 rounded-3xl cursor-pointer">
            {props.children}
        </button>
    );
}


export default Button;