import { useEffect, useState } from "react";
import { Header } from "./components/Header";
import { KeySettings } from "./components/KeySettings";
import { Hotkey } from "./background";
import { storageKey } from "./const";

function App() {
  const [actionDefinitions, setActionDefinitions] = useState({});

  useEffect(() => {
    chrome.storage.sync.get(storageKey).then((settings) => {
      // FIXME: Change data structure for removing duplicated nest
      setActionDefinitions(settings.settings.actionDefinitions);
    });
  }, []);

  return (
    <div className="h-screen bg-[#f8f9fa]">
      <Header />
      <main className="mx-auto max-w-5xl">
        <table className="mt-8 flex w-full rounded-lg bg-white p-8">
          <tbody className="flex-auto divide-y divide-solid divide-[#ddd]">
            {Object.entries<Hotkey>(actionDefinitions).map(([key, value]) => {
              return (
                <KeySettings
                  key={key}
                  keyString={key}
                  actionType={value.type}
                  actionValue={value.value}
                />
              );
            })}
          </tbody>
        </table>
      </main>
    </div>
  );
}

export default App;
