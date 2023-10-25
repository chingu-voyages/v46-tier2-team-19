import { HeroSection } from "@/features/HomePage";
import { SearchSection } from "@/features/HomePage";
import { TopRecipes } from "@/features/HomePage";

const Home = () => {
  return (
    <div className="">
      <HeroSection />
      <SearchSection />
      <TopRecipes />
    </div>
  );
};

export default Home;
