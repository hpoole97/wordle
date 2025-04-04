import { CharStatus } from "../../lib/statuses";
import classnames from "classnames";

type Props = {
  value?: string;
  status?: CharStatus;
};

export const Cell = ({ value, status }: Props) => {
  const classes = classnames(
    "w-14 h-14 border-solid border-2 flex items-center justify-center mx-0.5 text-lg font-bold rounded",
    {
      "bg-white border-slate-200": !status,
      "bg-slate-400 text-white border-slate-400": status === "absent",
      "bg-[#5d3a1a] text-white border-[#5d3a1a]": status === "correct",
      "bg-[#d89c42] text-white border-[#d89c42]": status === "present",
    }
  );

  return (
    <>
      <div className={classes}>{value}</div>
    </>
  );
};
