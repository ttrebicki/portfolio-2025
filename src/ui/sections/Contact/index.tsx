import { CopyToClipboard } from "@/ui/reusable/CopyToClipboard";
import Link from "next/link";

export const Contact = () => {
  const linkedIn =
    "https://www.linkedin.com/in/tomasz-tr%C4%99bicki-5bb699201/";
  const mail = "t.trebicki1103@gmail.com";
  const phone = "+48519767459";

  return (
    <div className={"flex flex-col gap-8 min-h-full"}>
      <h2>Contact</h2>
      <div className="flex flex-row gap-2">
        <Link href={linkedIn}>LinkedIn</Link>
        <CopyToClipboard text={linkedIn} />
      </div>
      <div className="flex flex-row gap-2">
        <Link href={`mailto:${mail}`}>Email</Link>
        <CopyToClipboard text={mail} />
      </div>
      <div className="flex flex-row gap-2">
        <Link href={`tel:${phone}`}>Phone</Link>
        <CopyToClipboard text={phone} />
      </div>
    </div>
  );
};
