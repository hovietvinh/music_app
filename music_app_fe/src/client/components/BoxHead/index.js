
function BoxHead(props) {
    const {title} = props
    return (
        <>
            <div className="mb-[30px]">
                <h1 className="mb-0 text-[28px] font-bold text-green-400 ">{title}</h1>
            </div>
            
        </>
    );
}

export default BoxHead;