import { useState } from "react";
import detectKeyString from "../content/detectKeyString";
import { actions } from "../content/actions";

interface Props {
  addHotKey: (hotKey: string, actionType: string, actionValue: string) => void;
}

const ActionTypeHavingValue = "CopyToClipboard";

export function InputKeySetting({ addHotKey }: Props) {
  const [hotKey, setHotKey] = useState("");
  // FIXME: initial value from `actions`
  const [actionType, setActionType] = useState("CopyToClipboard");
  const [actionValue, setActionValue] = useState("");

  // FIXME: properly validate and control visibility
  const hasActionValue = actionType === ActionTypeHavingValue;

  const updateHotKey: React.KeyboardEventHandler = (e) => {
    e.preventDefault();
    // FIXME: valid type
    const keyString = detectKeyString(e as unknown as KeyboardEvent);
    setHotKey(keyString);
  };

  const updateActionType: React.ChangeEventHandler<HTMLSelectElement> = (e) => {
    const newActionType = e.target.value;
    setActionType(newActionType);

    // clear unused actionValue
    if (newActionType !== ActionTypeHavingValue) {
      setActionValue("");
    }
  };

  return (
    <form className="grid grid-cols-[100px_1fr] items-center gap-y-6">
      <label htmlFor="hot-key" className="text-sm text-gray-500">
        Hot Key
      </label>
      {/* Add `onChange` to avoid controlled components warning */}
      <input
        id="hot-key"
        className="border-b-2 text-lg text-black"
        type="text"
        value={hotKey}
        onChange={() => {}}
        onKeyDown={updateHotKey}
      />

      <label htmlFor="action-type" className="text-sm text-gray-500">
        Action
      </label>
      <select id="action-type" className="text-lg" onChange={updateActionType}>
        {Object.keys(actions).map((actionType) => (
          <option key={actionType}>{actionType}</option>
        ))}
      </select>

      {hasActionValue && (
        <>
          <label htmlFor="action-value" className="text-sm text-gray-500">
            Value
          </label>
          <div className="flex flex-col gap-y-2">
            <input
              id="action-value"
              className="border-b-2 text-lg text-black"
              type="text"
              value={actionValue}
              onChange={(e) => {
                setActionValue(e.target.value);
              }}
            />
            <p>{"${title} and ${url} variables are available."}</p>
          </div>
        </>
      )}

      <input
        className="w-32 rounded-full bg-[#1565c0] px-4 py-2 text-base text-white disabled:opacity-70"
        type="button"
        value="Add"
        onClick={() => addHotKey(hotKey, actionType, actionValue)}
        disabled={
          hotKey === "" ||
          hotKey.includes("Unknown") || // case for can't detect key
          actionType === "" ||
          (hasActionValue && actionValue === "")
        }
      />
    </form>
  );
}
