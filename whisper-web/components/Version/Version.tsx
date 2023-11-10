"use client";

import { useRouter } from "next/navigation";
import Package from "../../package.json";

const Version = () => {
  const { push } = useRouter();

  const redirectHandler = () => {
    push("/configuration");
  };

  return (
    <div className="flex justify-center w-full">
      <a className="text-primaryDark text-xs" onClick={redirectHandler}>
        v{Package.version}
      </a>
    </div>
  );
};

export default Version;
