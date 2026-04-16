import { useCallback, useEffect, useState } from "react";

function UseCallback2() {
  const [size, setSize] = useState(0);
  const [isDark, setIsDark] = useState(false);

  const createBoxStyle =useCallback( () => {
    return {
      backgroundColor: "pink",
      width: `${size}px`,
      height: `${size}px`,
    };
  },[size]);

  return (
    <div style={{ backgroundColor: isDark ? "black" : "white" }}>
      <input
        type="number"
        value={size}
        onChange={(e) => {
          setSize(e.target.value);
        }}
      />
      <button onClick={() => setIsDark(!isDark)}>Change Theme</button>
      <Box createBoxStyle={createBoxStyle} />
    </div>
  );
}

function Box({ createBoxStyle }) {
  const [style, setStyle] = useState(createBoxStyle());
  useEffect(() => {
    console.log("Box sizing....");
    setStyle(createBoxStyle());
  }, [createBoxStyle]);
  return <div style={style}></div>;
}

export default UseCallback2;
