import { layoutConstraintsCn } from "@/lib/constants/ui";
import Link from "next/link";

export const Navbar = () => {
  return (
    <nav
      className={`${layoutConstraintsCn} flex flex-1 p-4 fixed top-0 z-10 justify-between items-center min-w-full`}
    >
      <div className="container min-w-full">
        <Link href="#">{"hmmmm.cool"}</Link>
      </div>
    </nav>
  );
};
