"use client"
const HeaderButton = ({subheader, header}) => {
    return (
        <div className="text-center flex flex-col justify-center items-center">
            <h4 className="text-yellow-500 text-xl">-- {subheader} --</h4><br />
            <hr className="bg-gray-300 lg:w-96 w-48" /><br />
            <h1 className="font-bold text-2xl">{header}</h1><br />
            <hr className="bg-gray-300 lg:w-96 w-48"  /><br />
        </div>
    );
};

export default HeaderButton;