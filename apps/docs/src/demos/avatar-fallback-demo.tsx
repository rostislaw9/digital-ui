import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export function AvatarFallbackDemo() {
  return (
    <Avatar size="lg">
      <AvatarImage src="/broken.jpg" alt="John Wick" />
      <AvatarFallback>JW</AvatarFallback>
    </Avatar>
  );
}
