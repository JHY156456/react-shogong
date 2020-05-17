import React, { memo } from "react";

const AddrList = memo(({ list, toggle, setPost, setDetail }) => {
  const displayAddr = addr => {
    setPost(addr.substring(0, 5) + " ");
    setDetail(addr.substring(6, addr.length) + " ");
    toggle(false);
  };

  return (
    <>
      {list.map((d, i) => (
        <li key={i} onClick={() => displayAddr(d)}  style={{cursor:'pointer'}}>
          {d}
        </li>
      ))}
    </>
  );
});

export default AddrList;