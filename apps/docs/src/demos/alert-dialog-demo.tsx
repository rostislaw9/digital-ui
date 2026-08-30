import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";

export function AlertDialogDemo() {
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button variant="destructive">Open Dialog</Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogTitle>Discard changes?</AlertDialogTitle>
        <AlertDialogDescription>
          You have unsaved edits on this page. Discarding will return you to the
          previous view and your changes will be lost.
        </AlertDialogDescription>
        <AlertDialogFooter>
          {/* AlertDialogCancel auto-closes the dialog. Add onClick for side effects. */}
          <AlertDialogCancel onClick={() => {}}>Keep editing</AlertDialogCancel>
          {/* AlertDialogAction auto-closes the dialog. Add onClick to perform the action. */}
          <AlertDialogAction
            onClick={() => {
              // Perform the destructive action here
            }}
          >
            Discard
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
