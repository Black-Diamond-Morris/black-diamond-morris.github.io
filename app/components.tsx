import Link from "next/link";
import { PropsWithChildren } from "react";

export function Heading2(props: PropsWithChildren) {
  return <h2 className="text-center text-2xl font-bold">{props.children}</h2>;
}

export function TextLink(props: PropsWithChildren<{ href: string }>) {
  return (
    <Link href={props.href} className="text-sky-500 hover:underline">
      {props.children}
    </Link>
  );
}
