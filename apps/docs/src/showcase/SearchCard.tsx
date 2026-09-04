import {
  Card,
  Button,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  Input,
  Label,
} from "@ionbit-ui/ui";
export function SearchCard() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Quick search</CardTitle>
        <CardDescription>Find anything in your workspace.</CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col gap-3">
        <div className="flex flex-col gap-2">
          <Label htmlFor="showcase-search">Search</Label>
          <Input
            id="showcase-search"
            placeholder="Search projects, files, people..."
          />
        </div>
        <div className="flex flex-wrap gap-2">
          {["Projects", "Files", "People", "Settings"].map((tag) => (
            <Button key={tag} variant="ghost" size="sm">
              {tag}
            </Button>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
