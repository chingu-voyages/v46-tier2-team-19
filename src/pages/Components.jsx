import Buttons from "../features/dev/components/Buttons";
import Icons from "../features/dev/components/Icons";
import Headings from "../features/dev/components/Headings";

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
