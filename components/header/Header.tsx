import React from "react";
import classes from "./header.module.scss";
import Link from "next/link";

type Props = Omit<React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>, "className">;

export const Header = (props: Props) => {
  return (
    <header
      className={classes.header}
      {...props}>
      <nav>
        <ul>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/users">Users</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};
