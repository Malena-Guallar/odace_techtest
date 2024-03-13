import "./Block.css";

function Block({
  height,
  width,
  text,
  padding,
  fontSize,
  fontFamily,
  classN }) {
  return (
    <div
      className="block"
      style={{
        height: height,
        width: width,
        padding: padding,
        fontSize: fontSize,
        fontFamily: fontFamily,
      }}
    >
      <div className={classN}>
        <p>{text}</p>
      </div>
    </div>
  );
}

export default Block;
