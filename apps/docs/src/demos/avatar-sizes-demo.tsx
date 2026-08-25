import { Avatar, AvatarFallback, AvatarImage } from "@digital-ui/ui";

export function AvatarSizesDemo() {
  return (
    <div className="flex items-center gap-3">
      <Avatar size="sm">
        <AvatarImage src="https://i.pravatar.cc/150?img=12" alt="User" />
        <AvatarFallback>U</AvatarFallback>
      </Avatar>
      <Avatar size="md">
        <AvatarImage src="https://i.pravatar.cc/150?img=5" alt="User" />
        <AvatarFallback>U</AvatarFallback>
      </Avatar>
      <Avatar size="lg">
        <AvatarImage src="https://i.pravatar.cc/150?img=33" alt="User" />
        <AvatarFallback>U</AvatarFallback>
      </Avatar>
    </div>
  );
}
