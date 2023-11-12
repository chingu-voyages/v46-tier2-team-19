import { HeroSectionPageNotFound } from "@/features/ui";
import usePageTitle from "../hooks/usePageTitle";

const PageNotFound = () => {
  usePageTitle("Not Found");
  return (
    <div className="">
      <HeroSectionPageNotFound />
    </div>
  );
};

export default PageNotFound;
