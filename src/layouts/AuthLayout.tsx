
import { Link, Outlet } from "react-router-dom";

const AuthLayout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="border-b bg-background/95 backdrop-blur">
        <div className="container flex h-14 items-center">
          <Link to="/" className="flex items-center space-x-2">
            <div className="bg-gradient-to-r from-teal-600 to-amber-500 rounded-lg w-7 h-7 flex items-center justify-center">
              <span className="font-bold text-white text-sm">S</span>
            </div>
            <span className="font-bold text-lg text-foreground">SkillSpark</span>
          </Link>
        </div>
      </header>
      <main className="flex-grow flex items-center justify-center bg-gray-50">
        <div className="w-full bg-white rounded-lg border shadow-sm my-8">
          <Outlet />
        </div>
      </main>
      <footer className="py-6 border-t">
        <div className="container flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} SkillSpark. All rights reserved.
          </p>
          <div className="flex items-center space-x-4">
            <Link to="/terms" className="text-sm text-muted-foreground hover:text-foreground">
              Terms
            </Link>
            <Link to="/privacy" className="text-sm text-muted-foreground hover:text-foreground">
              Privacy
            </Link>
            <Link to="/contact" className="text-sm text-muted-foreground hover:text-foreground">
              Contact
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default AuthLayout;
