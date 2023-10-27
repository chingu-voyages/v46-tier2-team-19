import { Icon } from "@/features/ui";

export const LoadingState = () => {
  return (
    <div role="status" className="p-20 mx-auto w-fit">
      <Icon
        name="loading"
        className="text-7xl animate-spin text-sky-700 fill-sky-500 mx-auto"
      />
      <span className="sr-only">Loading...</span>
    </div>
  );
};
