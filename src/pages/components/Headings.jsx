import { Heading } from "@/features/ui/Heading";

function Headings() {
  return (
    <section id="headings">
      <h2>Headings</h2>
      <div className="grid gap-9 grid-cols-2">
        <ul className="grid gap-3">
          <li>
            <Heading level="h1" variant="sky">
              h1, Sky
            </Heading>
          </li>
          <li>
            <Heading level="h2" variant="sky">
              h2, Sky
            </Heading>
          </li>
          <li>
            <Heading level="h3" variant="sky">
              h3, Sky
            </Heading>
          </li>
          <li>
            <Heading level="h4" variant="sky">
              h4, Sky
            </Heading>
          </li>
          <li>
            <Heading level="h5" variant="sky">
              h5, Sky
            </Heading>
          </li>
          <li>
            <Heading level="h6" variant="sky">
              h6, Sky
            </Heading>
          </li>
        </ul>

        <ul className="grid gap-3">
          <li>
            <Heading level="h1" variant="watermelon">
              h1, Watermelon
            </Heading>
          </li>
          <li>
            <Heading level="h2" variant="watermelon">
              h2, Watermelon
            </Heading>
          </li>
          <li>
            <Heading level="h3" variant="watermelon">
              h3, Watermelon
            </Heading>
          </li>
          <li>
            <Heading level="h4" variant="watermelon">
              h4, Watermelon
            </Heading>
          </li>
          <li>
            <Heading level="h5" variant="watermelon">
              h5, Watermelon
            </Heading>
          </li>
          <li>
            <Heading level="h6" variant="watermelon">
              h6, Watermelon
            </Heading>
          </li>
        </ul>

        <ul className="grid gap-3">
          <li>
            <Heading level="h1" variant="tangerine">
              h1, Tangerine
            </Heading>
          </li>
          <li>
            <Heading level="h2" variant="tangerine">
              h2, Tangerine
            </Heading>
          </li>
          <li>
            <Heading level="h3" variant="tangerine">
              h3, Tangerine
            </Heading>
          </li>
          <li>
            <Heading level="h4" variant="tangerine">
              h4, Tangerine
            </Heading>
          </li>
          <li>
            <Heading level="h5" variant="tangerine">
              h5, Tangerine
            </Heading>
          </li>
          <li>
            <Heading level="h6" variant="tangerine">
              h6, Tangerine
            </Heading>
          </li>
        </ul>

        <ul className="grid gap-3">
          <li>
            <Heading level="h1" variant="lava">
              h1, Lava
            </Heading>
          </li>
          <li>
            <Heading level="h2" variant="lava">
              h2, Lava
            </Heading>
          </li>
          <li>
            <Heading level="h3" variant="lava">
              h3, Lava
            </Heading>
          </li>
          <li>
            <Heading level="h4" variant="lava">
              h4, Lava
            </Heading>
          </li>
          <li>
            <Heading level="h5" variant="lava">
              h5, Lava
            </Heading>
          </li>
          <li>
            <Heading level="h6" variant="lava">
              h6, Lava
            </Heading>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default Headings;
