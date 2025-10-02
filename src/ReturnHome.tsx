import Link from "next/link";

export const ReturnHome = () => {
  return (
    <div className="flex justify-center" style={{ marginTop: 20 }}>
      <Link href="/">&lsaquo; Return home</Link>
    </div>
  );
};
