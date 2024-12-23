import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Landing = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800">
      <div className="container mx-auto px-4 py-16">
        <nav className="flex justify-between items-center mb-16">
          <div className="text-white text-2xl font-bold">MultiTenant Manager</div>
          <Link to="/users">
            <Button variant="outline" className="text-white border-white hover:bg-white hover:text-gray-900">
              Go to Dashboard
            </Button>
          </Link>
        </nav>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <h1 className="text-5xl md:text-6xl font-bold text-white leading-tight">
              Manage Your Multi-Tenant System with Ease
            </h1>
            <p className="text-xl text-gray-300">
              Streamline your tenant management, user access, and role-based permissions all in one place.
            </p>
            <div className="space-x-4">
              <Link to="/users">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                  Get Started
                </Button>
              </Link>
              <Link to="/tenants">
                <Button size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-gray-900">
                  View Tenants
                </Button>
              </Link>
            </div>
          </div>
          <div className="hidden md:block">
            <img
              src="https://images.unsplash.com/photo-1498050108023-c5249f4df085"
              alt="Dashboard Preview"
              className="rounded-lg shadow-2xl"
            />
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mt-24">
          <div className="bg-gray-800 p-8 rounded-lg">
            <h3 className="text-xl font-semibold text-white mb-4">User Management</h3>
            <p className="text-gray-300">
              Easily manage users across multiple tenants with intuitive controls and permissions.
            </p>
          </div>
          <div className="bg-gray-800 p-8 rounded-lg">
            <h3 className="text-xl font-semibold text-white mb-4">Role-Based Access</h3>
            <p className="text-gray-300">
              Define and assign roles with granular permissions to ensure proper access control.
            </p>
          </div>
          <div className="bg-gray-800 p-8 rounded-lg">
            <h3 className="text-xl font-semibold text-white mb-4">Tenant Isolation</h3>
            <p className="text-gray-300">
              Keep your tenants' data separate and secure with built-in isolation features.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;