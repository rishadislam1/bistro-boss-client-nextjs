
const HeaderButton = ({subheader, header}) => {
    return (
        <div className="text-center flex flex-col justify-center items-center">
            <h4 className="text-yellow-500 text-xl">-- {subheader} --</h4><br />
            <hr className="bg-gray-300 w-96" /><br />
            <h1 className="font-bold text-2xl">{header}</h1><br />
            <hr className="bg-gray-300 w-96"  /><br />
        </div>
    );
};

export default HeaderButton;