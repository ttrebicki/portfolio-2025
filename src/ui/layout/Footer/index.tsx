import { layoutConstraintsCn } from "@/lib/constants/ui";
import Link from "next/link";

export const Footer = () => (
  <footer className={"flex py-16"}>
    <div className={layoutConstraintsCn}>
      <Link target={"_blank"} href="mailto:t.trebicki1103@gmail.com">
        Contact me
      </Link>
    </div>
  </footer>
);
