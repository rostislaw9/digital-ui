import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export function TabsBasicDemo() {
  return (
    <Tabs defaultValue="deployments" className="w-[400px]">
      <TabsList>
        <TabsTrigger value="deployments">Deployments</TabsTrigger>
        <TabsTrigger value="branches">Branches</TabsTrigger>
        <TabsTrigger value="logs">Logs</TabsTrigger>
        <TabsTrigger value="domains">Domains</TabsTrigger>
      </TabsList>
      <TabsContent value="deployments">
        <Card>
          <CardHeader>
            <CardTitle>Deployments</CardTitle>
            <CardDescription>
              Production and preview deployments for this project.
            </CardDescription>
          </CardHeader>
          <CardContent className="text-sm text-foreground-muted">
            Last deployment succeeded 4 minutes ago — commit{" "}
            <code className="text-foreground">a3f9c2e</code>.
          </CardContent>
        </Card>
      </TabsContent>
      <TabsContent value="branches">
        <Card>
          <CardHeader>
            <CardTitle>Branches</CardTitle>
            <CardDescription>
              Active Git branches with recent commit history.
            </CardDescription>
          </CardHeader>
          <CardContent className="text-sm text-foreground-muted">
            6 branches open — main, develop, and 4 feature branches.
          </CardContent>
        </Card>
      </TabsContent>
      <TabsContent value="logs">
        <Card>
          <CardHeader>
            <CardTitle>Logs</CardTitle>
            <CardDescription>
              Real-time build and runtime logs for all environments.
            </CardDescription>
          </CardHeader>
          <CardContent className="text-sm text-foreground-muted">
            No errors in the last 24 hours. 3 warnings from deprecated APIs.
          </CardContent>
        </Card>
      </TabsContent>
      <TabsContent value="domains">
        <Card>
          <CardHeader>
            <CardTitle>Domains</CardTitle>
            <CardDescription>
              Custom domains and DNS configuration for your deployments.
            </CardDescription>
          </CardHeader>
          <CardContent className="text-sm text-foreground-muted">
            2 domains connected — both pointing to production.
          </CardContent>
        </Card>
      </TabsContent>
    </Tabs>
  );
}
