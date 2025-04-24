
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Menu, X, Search, MessageSquare, Calendar, User } from "lucide-react";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  // This would be replaced with actual auth state from Supabase
  const isLoggedIn = false;

  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur">
      <div className="container flex h-16 items-center justify-between">
        <Link 
          to="/" 
          className="flex items-center space-x-2"
          onClick={() => setIsOpen(false)}
        >
          <div className="bg-gradient-to-r from-teal-600 to-amber-500 rounded-lg w-8 h-8 flex items-center justify-center">
            <span className="font-bold text-white">S</span>
          </div>
          <span className="font-bold text-xl text-foreground">SkillSpark</span>
        </Link>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          <Link 
            to="/discover" 
            className="text-sm font-medium transition-colors hover:text-primary"
          >
            Discover
          </Link>
          <Link 
            to="/topics" 
            className="text-sm font-medium transition-colors hover:text-primary"
          >
            Topics
          </Link>
          <Link 
            to="/how-it-works" 
            className="text-sm font-medium transition-colors hover:text-primary"
          >
            How It Works
          </Link>
        </nav>

        {/* Desktop CTA / User Menu */}
        <div className="hidden md:flex items-center space-x-1">
          {isLoggedIn ? (
            <>
              <Button variant="ghost" size="icon" asChild>
                <Link to="/search">
                  <Search className="h-5 w-5" />
                </Link>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <Link to="/messages">
                  <MessageSquare className="h-5 w-5" />
                </Link>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <Link to="/sessions">
                  <Calendar className="h-5 w-5" />
                </Link>
              </Button>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className="relative h-8 w-8 rounded-full">
                    <Avatar className="h-8 w-8">
                      <AvatarImage src="/placeholder.svg" alt="User" />
                      <AvatarFallback>U</AvatarFallback>
                    </Avatar>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <Link to="/profile">
                    <DropdownMenuItem>
                      <User className="mr-2 h-4 w-4" />
                      Profile
                    </DropdownMenuItem>
                  </Link>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>Log out</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </>
          ) : (
            <>
              <Button variant="ghost" asChild>
                <Link to="/login">Log in</Link>
              </Button>
              <Button className="bg-teal-600 hover:bg-teal-700" asChild>
                <Link to="/signup">Sign up</Link>
              </Button>
            </>
          )}
        </div>

        {/* Mobile menu button */}
        <Button
          variant="ghost"
          className="md:hidden"
          size="icon"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </Button>
      </div>

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <div className="md:hidden fixed inset-0 top-16 z-50 grid h-[calc(100vh-4rem)] grid-flow-row auto-rows-max overflow-auto bg-white p-6">
          <nav className="grid grid-flow-row auto-rows-max text-lg">
            <Link 
              to="/discover" 
              className="py-2 font-medium transition-colors hover:text-primary"
              onClick={() => setIsOpen(false)}
            >
              Discover
            </Link>
            <Link 
              to="/topics" 
              className="py-2 font-medium transition-colors hover:text-primary"
              onClick={() => setIsOpen(false)}
            >
              Topics
            </Link>
            <Link 
              to="/how-it-works" 
              className="py-2 font-medium transition-colors hover:text-primary"
              onClick={() => setIsOpen(false)}
            >
              How It Works
            </Link>
            <div className="pt-6">
              {isLoggedIn ? (
                <>
                  <Link 
                    to="/profile"
                    className="flex items-center py-2 font-medium"
                    onClick={() => setIsOpen(false)}
                  >
                    <User className="mr-2 h-5 w-5" />
                    Profile
                  </Link>
                  <Link 
                    to="/messages"
                    className="flex items-center py-2 font-medium"
                    onClick={() => setIsOpen(false)}
                  >
                    <MessageSquare className="mr-2 h-5 w-5" />
                    Messages
                  </Link>
                  <Link 
                    to="/sessions"
                    className="flex items-center py-2 font-medium"
                    onClick={() => setIsOpen(false)}
                  >
                    <Calendar className="mr-2 h-5 w-5" />
                    Sessions
                  </Link>
                  <Button className="w-full mt-6">Log out</Button>
                </>
              ) : (
                <>
                  <Button variant="outline" className="w-full" asChild>
                    <Link 
                      to="/login"
                      onClick={() => setIsOpen(false)}
                    >
                      Log in
                    </Link>
                  </Button>
                  <Button className="w-full mt-2 bg-teal-600 hover:bg-teal-700" asChild>
                    <Link 
                      to="/signup"
                      onClick={() => setIsOpen(false)}
                    >
                      Sign up
                    </Link>
                  </Button>
                </>
              )}
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default NavBar;
