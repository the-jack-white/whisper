import { ComponentChildren } from "@/types/index.types";

const AuthContainer = ({ children }: ComponentChildren) => {
  return (
    <section className="flex justify-center items-center w-full h-full p-4">
      <div className="w-1/3 h-3/4 bg-tertiary rounded-lg p-4">{children}</div>
    </section>
  );
};

export default AuthContainer;
