import { useCallback, useEffect, useState } from "react";
import { Header } from "./components/Header";
import { KeySettings } from "./components/KeySettings";
import { Hotkey } from "./background";
import { storageKey } from "./const";
import { InputKeySetting } from "./components/InputKeySetting";

function App() {
  const [actionDefinitions, setActionDefinitions] = useState<{
    [key: string]: any;
  }>({});

  useEffect(() => {
    chrome.storage.sync.get(storageKey).then((settings) => {
      // FIXME: Change data structure for removing duplicated nest
      setActionDefinitions(settings.settings.actionDefinitions);
    });
  }, []);

  const deleteHotKey = useCallback(
    (keyString: string) => {
      const {
        [keyString]: {}, // to delete key
        ...rest
      } = actionDefinitions;
      chrome.storage.sync.set({ [storageKey]: { actionDefinitions: rest } });
      setActionDefinitions(rest);
    },
    [actionDefinitions],
  );

  const addHotKey = useCallback(
    (hotKey: string, type: string, value: string) => {
      const updatedActionDefinitions = {
        ...actionDefinitions,
        ...{ [hotKey]: { type, value } },
      };
      chrome.storage.sync.set({
        [storageKey]: {
          actionDefinitions: updatedActionDefinitions,
        },
      });
      setActionDefinitions(updatedActionDefinitions);
    },
    [actionDefinitions],
  );

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
                  onDelete={deleteHotKey}
                />
              );
            })}
          </tbody>
        </table>
        <div className="mt-8 flex w-full rounded-lg bg-white p-8">
          <InputKeySetting addHotKey={addHotKey} />
        </div>
      </main>
    </div>
  );
}

export default App;
