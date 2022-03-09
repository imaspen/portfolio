import { ReactElement, ReactNode } from "react";
import Link from "../Link";

export interface IIconLinkProps {
  name: string;
  href: string;
  children: ReactNode;
}

function IconLink({ name, href, children }: IIconLinkProps): ReactElement {
  return (
    <Link
      title={name}
      href={href}
      target="_blank"
      rel="noopener"
      lineHeight={0}
    >
      {children}
    </Link>
  );
}

export default IconLink;
