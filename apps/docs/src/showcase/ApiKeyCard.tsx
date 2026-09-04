import {
  Card,
  Badge,
  Button,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
  Input,
  Separator,
} from "@ionbit-ui/ui";
export function ApiKeyCard() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>API keys</CardTitle>
        <CardDescription>Manage your access tokens.</CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col gap-3">
        <div className="flex items-center justify-between">
          <span className="text-sm text-foreground-muted">Production</span>
          <Badge variant="accent">Active</Badge>
        </div>
        <Input readOnly value="sk_live_••••••••4242" />
        <Separator />
        <div className="flex items-center justify-between">
          <span className="text-sm text-foreground-muted">Staging</span>
          <Badge variant="default">Active</Badge>
        </div>
        <Input readOnly value="sk_test_••••••••8901" />
      </CardContent>
      <CardFooter>
        <Button variant="secondary" className="w-full">
          Generate new key
        </Button>
      </CardFooter>
    </Card>
  );
}
