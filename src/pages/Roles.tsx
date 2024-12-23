import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Plus } from "lucide-react";

const roles = [
  {
    id: 1,
    name: "Admin",
    description: "Full system access",
    permissions: ["read:all", "write:all", "delete:all"],
  },
  {
    id: 2,
    name: "Manager",
    description: "Tenant management access",
    permissions: ["read:all", "write:tenant"],
  },
  {
    id: 3,
    name: "User",
    description: "Basic user access",
    permissions: ["read:assigned"],
  },
];

export default function Roles() {
  return (
    <div className="space-y-6 animate-fade-in">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">Roles</h1>
        <Button>
          <Plus className="w-4 h-4 mr-2" />
          Add Role
        </Button>
      </div>
      <div className="grid gap-4 md:grid-cols-3">
        {roles.map((role) => (
          <Card key={role.id}>
            <CardHeader>
              <CardTitle>{role.name}</CardTitle>
              <CardDescription>{role.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {role.permissions.map((permission) => (
                  <Badge key={permission} variant="secondary">
                    {permission}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}