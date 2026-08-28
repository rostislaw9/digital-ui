import { Label, RadioGroup, RadioGroupItem } from "@digital-ui/ui";

export function RadioGroupBasicDemo() {
  return (
    <RadioGroup defaultValue="paypal" className="w-fit">
      <div className="flex items-center gap-2">
        <RadioGroupItem value="card" id="r-card" />
        <Label htmlFor="r-card">Credit / Debit Card</Label>
      </div>
      <div className="flex items-center gap-2">
        <RadioGroupItem value="paypal" id="r-paypal" />
        <Label htmlFor="r-paypal">PayPal</Label>
      </div>
      <div className="flex items-center gap-2">
        <RadioGroupItem value="bank" id="r-bank" />
        <Label htmlFor="r-bank">Bank Transfer</Label>
      </div>
      <div className="flex items-center gap-2">
        <RadioGroupItem value="crypto" id="r-crypto" />
        <Label htmlFor="r-crypto">Cryptocurrency</Label>
      </div>
    </RadioGroup>
  );
}
