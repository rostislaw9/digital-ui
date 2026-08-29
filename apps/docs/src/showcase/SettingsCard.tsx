import {
  Button,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
  Label,
  Separator,
  Switch,
} from "@ionbit-ui/ui";

import { ShowcaseCard } from "./ShowcaseCard";

export function SettingsCard() {
  return (
    <ShowcaseCard>
      <CardHeader>
        <CardTitle>Preferences</CardTitle>
        <CardDescription>
          Manage your account settings and preferences.
        </CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col gap-4">
        <div className="flex items-center justify-between">
          <div className="flex flex-col gap-0.5">
            <Label className="text-sm">Email notifications</Label>
            <span className="text-xs text-foreground-muted">
              Receive emails about activity.
            </span>
          </div>
          <Switch defaultChecked />
        </div>
        <Separator />
        <div className="flex items-center justify-between">
          <div className="flex flex-col gap-0.5">
            <Label className="text-sm">Auto-save</Label>
            <span className="text-xs text-foreground-muted">
              Automatically save changes.
            </span>
          </div>
          <Switch />
        </div>
        <Separator />
        <div className="flex items-center justify-between">
          <div className="flex flex-col gap-0.5">
            <Label className="text-sm">Analytics</Label>
            <span className="text-xs text-foreground-muted">
              Help us improve the product.
            </span>
          </div>
          <Switch defaultChecked />
        </div>
      </CardContent>
      <CardFooter>
        <Button variant="secondary" className="w-full">
          Save changes
        </Button>
      </CardFooter>
    </ShowcaseCard>
  );
}
