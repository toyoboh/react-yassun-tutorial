import { useState, useEffect } from "react";
import { List } from "./List";
import { Form } from "./Form";
import { getLanguages } from "./const/languages.js";


function App() {
  const [tab, setTab] = useState("list");
  const [langs, setLangs] = useState([]);

  useEffect(() => {
    fetchLanguages();
  }, [])

  const fetchLanguages = async () => {
    const languages = await getLanguages();
    setLangs(languages);
  }

  const addLang = (lang) => {
    setLangs([...langs, lang]);
    setTab("list");
  }

  return (
    <div>
      <header>
        <ul>
          <li onClick={ () => setTab("list") }>list</li>
          <li onClick={ () => setTab("form") }>form</li>
        </ul>
      </header>
      <hr />
      {
        tab === "list" ? <List langs={langs} /> : <Form onAddLang={addLang} />
      }
    </div>
  );
}

export default App;