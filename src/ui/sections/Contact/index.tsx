import { CopyToClipboard } from "@/ui/reusable/CopyToClipboard";
import Link from "next/link";

export const Contact = () => {
  const linkedIn = "https://www.linkedin.com/in/ttrebicki";
  const github = "https://github.com/ttrebicki/";
  const mail = "t.trebicki1103@gmail.com";
  const phone = "+48519767459";

  return (
    <div className={"flex flex-col gap-8 min-h-full"}>
      <h2>Contact & links</h2>
      <div className="flex flex-row gap-2">
        <Link target={"_blank"} href={`mailto:${mail}`}>
          Email
        </Link>
        <CopyToClipboard text={mail} />
      </div>
      <div className="flex flex-row gap-2">
        <Link target={"_blank"} href={`tel:${phone}`}>
          Phone
        </Link>
        <CopyToClipboard text={phone} />
      </div>
      <div className="flex flex-row gap-2">
        <Link target={"_blank"} href={github}>
          Github
        </Link>
        <CopyToClipboard text={github} />
      </div>
      <div className="flex flex-row gap-2">
        <Link target={"_blank"} href={linkedIn}>
          LinkedIn
        </Link>
        <CopyToClipboard text={linkedIn} />
      </div>
    </div>
  );
};
