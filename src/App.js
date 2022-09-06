import React, { useEffect, useState } from 'react';

function App() {
  const [data, setData] = useState('');

  useEffect(() => {
    (async function () {
      const text = await( await fetch(`/api/message`)).text();
      setData(text);
    })();
  }, [])

  return <div>Hello! <br /> {data}</div>;
}

export default App;
