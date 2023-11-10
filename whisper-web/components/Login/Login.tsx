import React from "react";

type LoginProps = {
  callback: () => void;
};

const Login = ({ callback }: LoginProps) => {
  return (
    <div className="flex flex-col justify-center gap-10 w-full h-full">
      <h2 className="uppercase text-4xl w-full text-center">Whisper</h2>
      <button
        className="flex justify-center items-center gap-2 p-2 rounded border border-primaryDark bg-tertiary hover:bg-secondaryDark hover:border-secondaryDark hover:text-tertiary"
        onClick={callback}
      >
        <span className="bi bi-google text-xl" /> <span>Login with Google</span>
      </button>
    </div>
  );
};

export default Login;
