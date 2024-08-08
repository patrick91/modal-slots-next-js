import Link from "next/link";

export default function New() {
  return (
    <dialog open>
      <h1>New</h1>
      <Link href="/demo">Go somewhere else</Link>
    </dialog>
  );
}
