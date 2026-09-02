import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const users = [
  {
    name: "Alice Johnson",
    email: "alice@example.com",
    role: "Admin",
    status: "Active",
    amount: "$199.00",
  },
  {
    name: "Bob Smith",
    email: "bob@example.com",
    role: "Editor",
    status: "Active",
    amount: "$149.00",
  },
  {
    name: "Carol White",
    email: "carol@example.com",
    role: "Viewer",
    status: "Invited",
    amount: "$0.00",
  },
  {
    name: "Dan Brown",
    email: "dan@example.com",
    role: "Editor",
    status: "Inactive",
    amount: "$0.00",
  },
];

const total = users.reduce(
  (sum, u) => sum + Number(u.amount.replace(/[^0-9.]/g, "")),
  0,
);

export function TableBasicDemo() {
  return (
    <Table>
      <TableCaption>Active accounts and monthly spend.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead>Name</TableHead>
          <TableHead>Email</TableHead>
          <TableHead>Role</TableHead>
          <TableHead>Status</TableHead>
          <TableHead className="text-right">Amount</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {users.map((user) => (
          <TableRow key={user.email}>
            <TableCell>{user.name}</TableCell>
            <TableCell>{user.email}</TableCell>
            <TableCell>{user.role}</TableCell>
            <TableCell>{user.status}</TableCell>
            <TableCell className="text-right">{user.amount}</TableCell>
          </TableRow>
        ))}
      </TableBody>
      <TableFooter>
        <TableRow>
          <TableCell colSpan={4}>Total</TableCell>
          <TableCell className="text-right">${total.toFixed(2)}</TableCell>
        </TableRow>
      </TableFooter>
    </Table>
  );
}
