import { ComponentChildren } from "@/types/index.types";

const AppContainer = ({ children }: ComponentChildren) => {
  return (
    <main className="flex justify-center w-full h-screen p-5 bg-secondaryDark dark:bg-primaryLight">
      <div className=" bg-primaryLight w-full h-full rounded-lg">
        {children}
      </div>
    </main>
  );
};

export default AppContainer;
