import { ComponentChildren } from "@/types/index.types";

const AppContainer = ({ children }: ComponentChildren) => {
  return (
    <main className="flex justify-center w-full h-[90vh] p-5 bg-tertiary">
      <div className=" bg-secondaryLight w-full h-full rounded-lg">
        {children}
      </div>
    </main>
  );
};

export default AppContainer;
