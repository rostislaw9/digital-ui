import { ArrowRight } from "lucide-react";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import { ButtonGroup } from "@/components/ui/button-group";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
} from "@/components/ui/select";

const CURRENCIES = [
  { value: "$", label: "US Dollar" },
  { value: "€", label: "Euro" },
  { value: "£", label: "British Pound" },
];

export function ButtonGroupSelectDemo() {
  const [currency, setCurrency] = useState("$");
  return (
    <ButtonGroup>
      <ButtonGroup>
        <Select value={currency} onValueChange={setCurrency}>
          <SelectTrigger className="h-8 rounded-e-none font-mono">
            {currency}
          </SelectTrigger>
          <SelectContent>
            {CURRENCIES.map((c) => (
              <SelectItem key={c.value} value={c.value}>
                {c.value}{" "}
                <span className="text-foreground-muted">{c.label}</span>
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        <Input placeholder="0.00" className="h-8" />
      </ButtonGroup>
      <ButtonGroup>
        <Button variant="outline" size="icon" aria-label="Transfer">
          <ArrowRight className="size-4" />
        </Button>
      </ButtonGroup>
    </ButtonGroup>
  );
}
