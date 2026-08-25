import { Avatar, AvatarFallback, AvatarImage } from "@digital-ui/ui";

export function AvatarFallbackDemo() {
  return (
    <Avatar size="lg">
      <AvatarImage src="/broken.jpg" alt="John Wick" />
      <AvatarFallback>JW</AvatarFallback>
    </Avatar>
  );
}
