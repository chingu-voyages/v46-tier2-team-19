import { HeroSection } from "@/features/ui";
import { SearchSection } from "@/features/ui";
import { TopRecipes } from "@/features/ui";
import usePageTitle from "../hooks/usePageTitle";

const Home = () => {
  usePageTitle(null);

  return (
    <div className="">
      <HeroSection />
      <SearchSection />
      <TopRecipes />
    </div>
  );
};

export default Home;
