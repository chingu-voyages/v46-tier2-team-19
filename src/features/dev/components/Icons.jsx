import { Icon, Heading } from "@/features/ui";

const Icons = () => {
  const icons = [
    "green-dot",
    "orange-dot",
    "red-dot",
    "yellow-dot",
    "down-arrow",
    "left-arrow",
    "right-arrow",
    "up-arrow",
    "close",
    "hamburger",
    "search",
    "smile",
    "flame",
    "oven",
    "oven-mitt",
    "stir",
    "stars",
    "thermometer",
  ];

  const copyIconCode = (name) => {
    const code = `<Icon name="${name}" />`;
    navigator.clipboard.writeText(code);
    document.querySelector("#notification code").textContent = code;
    document.querySelector("#notification").classList.remove("hidden");
    setTimeout(() => {
      document.querySelector("#notification").classList.add("hidden");
    }, 2500);
  };

  return (
    <div>
      <Heading level="h3" variant="lava">
        Icons
      </Heading>

      <div className="grid gap-4">
        <div className="max-w-xl">
          <p className="mb-4">
            Here are the icons available for use in our project. Need another?
            Shoot me a note @joekotvas on Discord.
          </p>
          <p>
            These icons can be styled with Tailwind, using classes such as{" "}
            <code className="text-base">w-20</code> or{" "}
            <code className="text-base">text-[#ff0000]</code>.
          </p>
        </div>

        <div className="grid grid-cols-4 max-w-2xl">
          {icons.map((name) => (
            <div
              key={name}
              className="text-center cursor-pointer relative active:left-[2px] active:top-[2px] hover:ring-1 h-[7rem] w-[7rem] flex flex-col justify-center"
              onClick={() => copyIconCode(name)}
              title={`${name}: Click to copy.`}
            >
              <Icon name={name} className="text-6xl mx-auto" />
              <p className="text-base my-2">{name}</p>
            </div>
          ))}
        </div>
      </div>
      <div
        id="notification"
        className="fixed hidden bottom-[2rem] left-[50%] ml-[-10rem] w-[20rem] text-center p-1 rounded-full bg-[#ffffa0]"
      >
        <p>
          <code className="text-base"></code>
        </p>
        <p>Copied to clipboard</p>
      </div>
    </div>
  );
};

export default Icons;
