import "./App.css";
import { Header } from "./components/Header";
import { KeySettings } from "./components/KeySettings";

function App() {
  return (
    <div className="h-screen bg-[#f8f9fa]">
      <Header />
      <main className="mx-auto max-w-5xl">
        <table className="mt-8 flex w-full rounded-lg bg-white p-8">
          <tbody className="flex-auto divide-y divide-solid divide-[#ddd]">
            <KeySettings
              keyString="Ctrl+G"
              actionType="ScrollToTop"
              actionValue=""
            />
            <KeySettings
              keyString="Ctrl+L"
              actionType="CopyToClipboard"
              actionValue="${title} ${url}"
            />
          </tbody>
        </table>
      </main>
    </div>
  );
}

export default App;
