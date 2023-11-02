import { Heading, Button, Icon } from "@/features/ui";

function Buttons() {
  return (
    <section id="buttons">
      <Heading level="h3" variant="lava">
        Buttons
      </Heading>

      <div className="grid gap-3 grid-cols-2">
        <ul className="grid gap-3">
          <li>
            <Button variant="primary" size="small">
              Small, primary button
              <Icon name="right-arrow" />
            </Button>
          </li>
          <li>
            <Button variant="primary" size="medium">
              Medium, primary button
              <Icon name="right-arrow" />
            </Button>
          </li>
          <li>
            <Button variant="primary" size="large">
              Large, primary button!
              <Icon name="right-arrow" />
            </Button>
          </li>
        </ul>

        <ul className="grid gap-3">
          <li>
            <Button variant="secondary" size="small">
              Small, secondary button
              <Icon name="right-arrow" className="scale-175" />
            </Button>
          </li>
          <li>
            <Button variant="secondary" size="medium">
              Medium, secondary button
              <Icon name="right-arrow" className="scale-175" />
            </Button>
          </li>
          <li>
            <Button variant="secondary" size="large">
              Large, secondary button!
              <Icon name="right-arrow" className="scale-175" />
            </Button>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default Buttons;
