import Link from "next/link";

export const Navigation = () => {
  return (
    <div className="flex flex-col gap-4 p-20 text-center">
      <h2 className="text-2xl font-bold">Examples</h2>
      <ul className="flex flex-col gap-2">
        <li>
          <Link href="/graph-modes">Graph modes</Link>
        </li>
        <li>
          <Link href="/custom-palettes">Custom palettes</Link>
        </li>
        <li>
          <Link href="/editor-example">Editor example</Link>
        </li>
        <li>
          <Link href="/sizing-modes">Sizing modes</Link>
        </li>
        <li>
          <Link href="/custom-fonts">Custom fonts</Link>
        </li>
        <li>
          <Link href="/custom-borders">Custom borders</Link>
        </li>
      </ul>
    </div>
  );
};
