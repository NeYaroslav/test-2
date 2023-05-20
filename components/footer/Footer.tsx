import React from "react";
import classes from "./footer.module.scss";

type Props = Omit<React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>, "className">;

export const Footer = (props: Props) => {
  return (
    <footer
      className={classes.footer}
      {...props}>
      Header
    </footer>
  );
};
