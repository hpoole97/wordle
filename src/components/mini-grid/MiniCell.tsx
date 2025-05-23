import { CharStatus } from "../../lib/statuses";
import classnames from "classnames";

type Props = {
  status: CharStatus;
};

export const MiniCell = ({ status }: Props) => {
  const classes = classnames(
    "w-10 h-10 border-solid border-2 border-slate-200 flex items-center justify-center mx-0.5 text-lg font-bold rounded",
    {
      "bg-white": status === "absent",
      "bg-[#c38c5c]": status === "correct",
      "bg-[#ece162]": status === "present",
    }
  );

  return (
    <>
      <div className={classes}></div>
    </>
  );
};
