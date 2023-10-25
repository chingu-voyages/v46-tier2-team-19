import Buttons from "./Buttons";
import Icons from "./Icons";
import Headings from "./Headings";

import { Heading } from "@/features/ui/Heading";

function Components() {
  return (
    <section className="p-10">
      <Heading level="h1" variant="lava" className="mb-6">
        Components
      </Heading>

      <div className="grid gap-8">
        <Buttons />
        <Icons />
        <Headings />
      </div>
    </section>
  );
}

export default Components;
