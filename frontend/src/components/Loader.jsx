import "./loader.css";

const Loader = () => {
  return (
    <div className="loader-container">
      <div className="cube">
        <div className="face front"></div>
        <div className="face back"></div>
        <div className="face left"></div>
        <div className="face right"></div>
        <div className="face top"></div>
        <div className="face bottom"></div>
      </div>

      <p className="mt-4 text-lg">Generating Flow...</p>
    </div>
  );
};

export default Loader;