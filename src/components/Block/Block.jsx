import "./Block.css"

function Block ({ height, width, text, textColor, padding }) {

    return (
        <div className="block" style={{height: height,  width: width, color: textColor, padding: padding}}>
            <p>{text}</p>
        </div>
    )
}

export default Block; 