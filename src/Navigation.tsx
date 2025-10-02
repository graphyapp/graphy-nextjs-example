import Link from "next/link";

export const Navigation = () => {
  return (
    <div className="flex flex-col gap-4 p-20 text-center">
      <h2 className="text-2xl font-bold">Examples</h2>
      <ul className="flex flex-col gap-2">
        <li>
          <Link href="/custom-palettes-example">Custom palettes example</Link>
        </li>
        <li>
          <Link href="/editable-example">Editable example</Link>
        </li>
        <li>
          <Link href="/sizing-modes">Sizing modes</Link>
        </li>
      </ul>
    </div>
  );
};
