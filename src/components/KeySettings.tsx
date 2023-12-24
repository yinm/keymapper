interface Props {
  keyString: string;
  actionType: string;
  actionValue: string;
  onDelete: (keyString: string) => void;
}

export function KeySettings({
  keyString,
  actionType,
  actionValue,
  onDelete,
}: Props) {
  return (
    <tr className="grid grid-cols-4 gap-x-2 py-4 text-base">
      <td>
        <kbd>{keyString}</kbd>
      </td>
      <td>{actionType}</td>
      <td>{actionValue}</td>
      <td>
        <button className="cursor-pointer" onClick={() => onDelete(keyString)}>
          x
        </button>
      </td>
    </tr>
  );
}
