import React from "react";

type containerProps = {
  styles: React.CSSProperties;
};

const Container = (props: containerProps) => {
  return <div style={props.styles}>Text Content Goes Here</div>;
};

export default Container;
