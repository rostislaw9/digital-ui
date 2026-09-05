import { Plus } from "lucide-react";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from "@/components/ui/empty";

export function EmptyAvatarGroupDemo() {
  return (
    <Empty className="max-w-sm">
      <EmptyHeader>
        <EmptyMedia>
          <div className="flex -space-x-2 *:data-[slot=avatar]:size-12 *:data-[slot=avatar]:ring-2 *:data-[slot=avatar]:ring-background *:data-[slot=avatar]:grayscale">
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
              <AvatarImage
                src="https://i.pravatar.cc/150?img=5"
                alt="Sam Chen"
              />
              <AvatarFallback>SC</AvatarFallback>
            </Avatar>
          </div>
        </EmptyMedia>
        <EmptyTitle>No Team Members</EmptyTitle>
        <EmptyDescription>
          Invite your team to collaborate on this project.
        </EmptyDescription>
      </EmptyHeader>
      <EmptyContent>
        <Button size="sm">
          <Plus />
          Invite Members
        </Button>
      </EmptyContent>
    </Empty>
  );
}
