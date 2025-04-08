
import React, { useState, useEffect } from "react";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

interface Appointment {
  id: string;
  nom: string;
  email: string;
  telephone: string;
  vehicule: string;
  service: string;
  date: string;
  heure: string;
  message: string;
  createdAt: string;
}

const AdminDashboard = () => {
  const [appointments, setAppointments] = useState<Appointment[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Récupérer les rendez-vous depuis localStorage
    const storedAppointments = localStorage.getItem("appointments");
    if (storedAppointments) {
      setAppointments(JSON.parse(storedAppointments));
    }
    setIsLoading(false);
  }, []);

  const handleDeleteAppointment = (id: string) => {
    const updatedAppointments = appointments.filter(app => app.id !== id);
    setAppointments(updatedAppointments);
    localStorage.setItem("appointments", JSON.stringify(updatedAppointments));
  };

  const filteredAppointments = appointments.filter(app => 
    app.nom.toLowerCase().includes(searchTerm.toLowerCase()) ||
    app.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
    app.telephone.includes(searchTerm) ||
    app.vehicule.toLowerCase().includes(searchTerm.toLowerCase()) ||
    app.service.toLowerCase().includes(searchTerm.toLowerCase()) ||
    app.date.includes(searchTerm)
  );

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between flex-wrap gap-4">
        <h2 className="text-xl text-gold">Rendez-vous ({appointments.length})</h2>
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gold/50 h-4 w-4" />
          <Input
            placeholder="Rechercher..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10 border-gold/30 bg-dark text-gold w-full md:w-[300px]"
          />
        </div>
      </div>
      
      {isLoading ? (
        <div className="text-center text-gold py-10">Chargement des rendez-vous...</div>
      ) : appointments.length === 0 ? (
        <div className="text-center text-gold py-10">Aucun rendez-vous enregistré.</div>
      ) : (
        <div className="overflow-x-auto">
          <Table className="border border-gold/20">
            <TableHeader>
              <TableRow className="bg-gold/10 hover:bg-gold/20">
                <TableHead className="text-gold">Date</TableHead>
                <TableHead className="text-gold">Heure</TableHead>
                <TableHead className="text-gold">Client</TableHead>
                <TableHead className="text-gold">Contact</TableHead>
                <TableHead className="text-gold">Véhicule</TableHead>
                <TableHead className="text-gold">Service</TableHead>
                <TableHead className="text-gold">Message</TableHead>
                <TableHead className="text-gold w-[100px]">Action</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredAppointments.map((appointment) => (
                <TableRow key={appointment.id} className="hover:bg-gold/5">
                  <TableCell className="text-gold">{appointment.date}</TableCell>
                  <TableCell className="text-gold">{appointment.heure}</TableCell>
                  <TableCell className="text-gold">{appointment.nom}</TableCell>
                  <TableCell className="text-gold">
                    <div>{appointment.email}</div>
                    <div>{appointment.telephone}</div>
                  </TableCell>
                  <TableCell className="text-gold">{appointment.vehicule}</TableCell>
                  <TableCell className="text-gold">{appointment.service}</TableCell>
                  <TableCell className="text-gold">
                    <div className="max-w-[200px] truncate">
                      {appointment.message || "—"}
                    </div>
                  </TableCell>
                  <TableCell className="text-gold">
                    <Button 
                      onClick={() => handleDeleteAppointment(appointment.id)} 
                      variant="destructive" 
                      size="sm"
                      className="bg-red-800 hover:bg-red-700"
                    >
                      Supprimer
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      )}
    </div>
  );
};

export default AdminDashboard;
