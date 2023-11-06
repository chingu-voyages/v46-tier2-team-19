import { useEffect } from "react";
import { name } from "@/constants";

const usePageTitle = (title) => {
  useEffect(() => {
    document.title = title ? `${title} | ${name}` : `${name} Recipes`;
  }, [title]);
};

export default usePageTitle;
