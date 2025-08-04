import { layoutConstraintsCn } from "@/lib/constants/ui";
import Link from "next/link";

export const Navbar = () => {
  return (
    <nav className={"flex p-1 sticky top-0 z-10"}>
      <div
        className={`${layoutConstraintsCn} flex flex-1 justify-between items-center`}
      >
        <Link href="#">{"portfolio"}</Link>
      </div>
    </nav>
  );
};
