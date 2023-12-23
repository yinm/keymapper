import "./App.css";
import { Header } from "./components/Header";

function App() {
  return (
    <div className="h-screen bg-[#f8f9fa]">
      <Header />
      <main className="mx-auto max-w-5xl">
        <table className="mt-8 flex w-full rounded-lg bg-white p-8">
          <tbody className="flex-auto divide-y divide-solid divide-[#ddd]"></tbody>
        </table>
      </main>
    </div>
  );
}

export default App;
