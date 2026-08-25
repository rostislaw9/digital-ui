import {
  Avatar,
  AvatarFallback,
  AvatarImage,
  AvatarStatus,
} from "@digital-ui/ui";

export function AvatarStatusDemo() {
  return (
    <div className="flex items-center gap-4">
      <Avatar size="lg">
        <AvatarImage src="https://i.pravatar.cc/150?img=12" alt="User" />
        <AvatarFallback>U</AvatarFallback>
        <AvatarStatus variant="online" aria-label="Online" />
      </Avatar>
      <Avatar size="lg">
        <AvatarImage src="https://i.pravatar.cc/150?img=5" alt="User" />
        <AvatarFallback>U</AvatarFallback>
        <AvatarStatus variant="busy" aria-label="Busy" />
      </Avatar>
      <Avatar size="lg">
        <AvatarImage src="https://i.pravatar.cc/150?img=33" alt="User" />
        <AvatarFallback>U</AvatarFallback>
        <AvatarStatus variant="away" aria-label="Away" />
      </Avatar>
      <Avatar size="lg">
        <AvatarFallback>U</AvatarFallback>
        <AvatarStatus variant="offline" aria-label="Offline" />
      </Avatar>
    </div>
  );
}
