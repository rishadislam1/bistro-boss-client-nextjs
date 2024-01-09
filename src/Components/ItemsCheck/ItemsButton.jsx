

const ItemsButton = ({btnText}) => {
    return (
        <div>
            <div className="flex justify-center items-center mt-10">
            <button className="btn btn-outline btn-primary">{btnText}</button>

            </div>
        </div>
    );
};

export default ItemsButton;