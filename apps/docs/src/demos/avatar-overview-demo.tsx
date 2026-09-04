import { Plus } from "lucide-react";

import {
  Avatar,
  AvatarBadge,
  AvatarFallback,
  AvatarGroup,
  AvatarGroupCount,
  AvatarImage,
  AvatarStatus,
} from "@/components/ui/avatar";

export function AvatarOverviewDemo() {
  return (
    <div className="flex flex-row flex-wrap items-center gap-3 sm:gap-6 md:gap-10">
      <Avatar>
        <AvatarImage src="https://i.pravatar.cc/150?img=12" alt="Alex Rivera" />
        <AvatarFallback>AR</AvatarFallback>
      </Avatar>
      <Avatar>
        <AvatarImage src="https://i.pravatar.cc/150?img=5" alt="Sam Chen" />
        <AvatarFallback>SC</AvatarFallback>
        <AvatarStatus variant="online" aria-label="Online" />
      </Avatar>
      <AvatarGroup>
        <Avatar>
          <AvatarImage
            src="https://i.pravatar.cc/150?img=12"
            alt="Alex Rivera"
          />
          <AvatarFallback>AR</AvatarFallback>
        </Avatar>
        <Avatar>
          <AvatarImage
            src="https://i.pravatar.cc/150?img=33"
            alt="Jordan Lee"
          />
          <AvatarFallback>JL</AvatarFallback>
        </Avatar>
        <Avatar>
          <AvatarImage src="https://i.pravatar.cc/150?img=5" alt="Sam Chen" />
          <AvatarFallback>SC</AvatarFallback>
        </Avatar>
        <AvatarGroupCount>+4</AvatarGroupCount>
      </AvatarGroup>
      <Avatar>
        <AvatarImage src="https://i.pravatar.cc/150?img=23" alt="Taylor Kim" />
        <AvatarFallback>TK</AvatarFallback>
        <AvatarBadge
          className="flex size-3 items-center justify-center bg-foreground text-background"
          aria-label="Add member"
        >
          <Plus className="size-2" />
        </AvatarBadge>
      </Avatar>
    </div>
  );
}
