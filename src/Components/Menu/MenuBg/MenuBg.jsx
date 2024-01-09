import "./menubg.css";

const MenuBg = ({bgImage,header,subheader}) => {
    return (
        <div className={`${bgImage}   md:p-24` }>
            <div className="z-50 bg-black bg-opacity-60 rounded-xl shadow-lg shadow-gray-900 text-white flex flex-col justify-center items-center p-20">
                <h1 className="md:text-4xl text-xl text-white font-bold">{header}</h1>
                <p className="text-center mt-5">{subheader}</p>
            </div>
        </div>
    );
};

export default MenuBg;