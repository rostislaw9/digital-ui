import { Slider } from "@digital-ui/ui";

export function SliderBasicDemo() {
  return (
    <Slider
      defaultValue={[75]}
      max={100}
      step={1}
      className="mx-auto w-full max-w-xs"
    />
  );
}
