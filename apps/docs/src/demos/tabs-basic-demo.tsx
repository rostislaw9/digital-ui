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
    <Tabs defaultValue="profile" className="w-140">
      <TabsList>
        <TabsTrigger value="profile">Profile</TabsTrigger>
        <TabsTrigger value="security">Security</TabsTrigger>
        <TabsTrigger value="billing">Billing</TabsTrigger>
        <TabsTrigger value="api">API Keys</TabsTrigger>
      </TabsList>
      <TabsContent value="profile">
        <Card>
          <CardHeader>
            <CardTitle>Profile</CardTitle>
            <CardDescription>
              Your public profile and display preferences.
            </CardDescription>
          </CardHeader>
          <CardContent className="text-sm text-foreground-muted">
            Display name: Alex Rivera. Avatar last updated 3 days ago.
          </CardContent>
        </Card>
      </TabsContent>
      <TabsContent value="security">
        <Card>
          <CardHeader>
            <CardTitle>Security</CardTitle>
            <CardDescription>
              Two-factor authentication and active sessions.
            </CardDescription>
          </CardHeader>
          <CardContent className="text-sm text-foreground-muted">
            2FA enabled via authenticator app. 2 active sessions on desktop and
            mobile.
          </CardContent>
        </Card>
      </TabsContent>
      <TabsContent value="billing">
        <Card>
          <CardHeader>
            <CardTitle>Billing</CardTitle>
            <CardDescription>
              Plan, payment method, and invoice history.
            </CardDescription>
          </CardHeader>
          <CardContent className="text-sm text-foreground-muted">
            Pro plan — renews on the 15th. Visa ending in 4242.
          </CardContent>
        </Card>
      </TabsContent>
      <TabsContent value="api">
        <Card>
          <CardHeader>
            <CardTitle>API Keys</CardTitle>
            <CardDescription>
              Manage tokens for programmatic access.
            </CardDescription>
          </CardHeader>
          <CardContent className="text-sm text-foreground-muted">
            3 active keys. Last used 2 hours ago from IP 203.0.113.42.
          </CardContent>
        </Card>
      </TabsContent>
    </Tabs>
  );
}
