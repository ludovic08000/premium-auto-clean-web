
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ChevronLeft } from "lucide-react";

const NavbarAdmin = () => {
  console.log("Rendering NavbarAdmin component");
  return (
    <div className="bg-dark border-b border-gold/20 p-2">
      <div className="container flex justify-between items-center">
        <Link to="/">
          <Button variant="ghost" className="text-gold hover:text-gold/80 hover:bg-transparent">
            <ChevronLeft className="mr-1" size={16} />
            Retour au site
          </Button>
        </Link>
        <div className="text-gold font-semibold">
          Administration Premium Auto Clean
        </div>
      </div>
    </div>
  );
};

export default NavbarAdmin;
