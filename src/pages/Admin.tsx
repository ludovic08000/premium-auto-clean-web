
import React, { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import AdminDashboard from "@/components/admin/AdminDashboard";

const ADMIN_PASSWORD = "premiumadmin2024"; // Idéalement, ce mot de passe devrait être stocké de manière sécurisée

const Admin = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    // Vérifier si l'utilisateur est déjà authentifié via localStorage
    const authStatus = localStorage.getItem("adminAuth");
    if (authStatus === "true") {
      setIsAuthenticated(true);
    }
  }, []);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Simuler un léger délai pour l'authentification
    setTimeout(() => {
      if (password === ADMIN_PASSWORD) {
        setIsAuthenticated(true);
        localStorage.setItem("adminAuth", "true");
        toast({
          title: "Connexion réussie",
          description: "Bienvenue dans l'interface d'administration",
          variant: "default",
        });
      } else {
        toast({
          title: "Erreur d'authentification",
          description: "Mot de passe incorrect",
          variant: "destructive",
        });
      }
      setIsLoading(false);
    }, 500);
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    localStorage.removeItem("adminAuth");
    toast({
      title: "Déconnexion",
      description: "Vous avez été déconnecté avec succès",
      variant: "default",
    });
  };

  if (isAuthenticated) {
    return (
      <div className="min-h-screen bg-dark p-4 md:p-8">
        <Card className="max-w-7xl mx-auto bg-dark border border-gold/20">
          <CardHeader className="flex flex-row items-center justify-between border-b border-gold/20 pb-4">
            <CardTitle className="text-gold text-2xl">Administration Premium Auto Clean</CardTitle>
            <Button variant="outline" className="text-gold border-gold hover:bg-gold hover:text-dark" onClick={handleLogout}>
              Déconnexion
            </Button>
          </CardHeader>
          <CardContent className="pt-6">
            <AdminDashboard />
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-dark flex flex-col items-center justify-center p-4">
      <Card className="w-full max-w-md bg-dark border border-gold/20">
        <CardHeader>
          <CardTitle className="text-gold text-center">Administration Premium Auto Clean</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleLogin} className="space-y-4">
            <div className="space-y-2">
              <Input
                type="password"
                placeholder="Mot de passe"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="border-gold/30 bg-dark text-gold"
                required
              />
            </div>
            <Button 
              type="submit" 
              className="w-full bg-gold text-dark hover:bg-gold/80"
              disabled={isLoading}
            >
              {isLoading ? "Connexion..." : "Connexion"}
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default Admin;
