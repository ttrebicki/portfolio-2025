import { layoutConstraintsCn } from "@/lib/constants/ui";
import Link from "next/link";

export const Footer = () => (
  <footer className={"flex py-16"}>
    <div className={layoutConstraintsCn}>
      © 2025 Tomasz Trębicki 
      <Link href="/Trebicki_Tomasz_CV.pdf" download>
        Download Resume
      </Link>
    </div>
  </footer>
);
