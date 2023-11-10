import { ComponentChildren } from "@/types/index.types";

const AuthContainer = ({ children }: ComponentChildren) => {
  return (
    <section className="flex justify-center items-center w-full h-full p-4">
      <div className="w-full sm:w-2/3 lg:w-1/3 h-1/2 sm:h-3/4 p-4">
        {children}
      </div>
    </section>
  );
};

export default AuthContainer;
