import {
  Button,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
  Checkbox,
  Input,
  Label,
  toast,
} from "@ionbit-ui/ui";

import { ShowcaseCard } from "./ShowcaseCard";

export function LoginCard() {
  return (
    <ShowcaseCard>
      <CardHeader>
        <CardTitle>Welcome back</CardTitle>
        <CardDescription>Sign in to your account to continue.</CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col gap-4">
        <div className="flex flex-col gap-2">
          <Label htmlFor="showcase-email">Email</Label>
          <Input
            id="showcase-email"
            type="email"
            placeholder="you@example.com"
          />
        </div>
        <div className="flex flex-col gap-2">
          <Label htmlFor="showcase-password">Password</Label>
          <Input
            id="showcase-password"
            type="password"
            placeholder="••••••••"
          />
        </div>
        <div className="flex items-center gap-2">
          <Checkbox id="showcase-remember" defaultChecked />
          <Label htmlFor="showcase-remember" className="text-sm">
            Remember me
          </Label>
        </div>
      </CardContent>
      <CardFooter>
        <Button
          variant="primary"
          className="w-full"
          onClick={() => toast.success("Signed in (demo)")}
        >
          Sign in
        </Button>
      </CardFooter>
    </ShowcaseCard>
  );
}
