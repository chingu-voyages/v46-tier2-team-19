import Buttons from "./Buttons";
import Icons from "./Icons";
import Headings from "./Headings";

import { Heading } from "@/features/ui/Heading";

function Components() {
  return (
    <section className="p-10">
      <Heading level="h2" variant="lava" className="mb-6">
        Components
      </Heading>
      <Buttons />
      <Icons />
      <Headings />
    </section>
  );
}

export default Components;
