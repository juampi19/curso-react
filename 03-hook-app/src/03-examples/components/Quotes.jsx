import { useLayoutEffect, useRef, useState } from "react";

export const Quotes = ({ author, quote }) => {
  const pRef = useRef();
  const [boxZise, setBoxZise] = useState({
    width: 0,
    height: 0,
  });

  useLayoutEffect(() => {
   const { width, height } = pRef.current.getBoundingClientRect();
    setBoxZise( { width, height } )
  }, [quote]);

  return (
    <>
      <blockquote className="blockquote text-end" style={{ display: "flex" }}>
        <p className="mb-3" ref={pRef}>
          {quote}
        </p>
        <footer className="blockquote-footer">{author}</footer>
      </blockquote>
      <code>{ JSON.stringify( boxZise ) }</code>
    </>
  );
};
