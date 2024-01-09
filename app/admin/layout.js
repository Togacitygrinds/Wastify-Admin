"use client";

import { useState, useEffect } from "react";
import VerticalNavbar from "./components/VerticalNavbar";
import AdminHeader from "./components/AdminHeader";
import Dashboard from "./components/Dashboard";
import AddNewAdmin from "./add-admin/page";
import ViewCompaniesPage from "./companies/page";
import AddCompany from "./new-company/page";
import ViewEstafettesPage from "./estafettes/page";
import ViewUsersPage from "./users/page";
import ReportedIssues from "./issues/page";
import NewEstafette from "./new-estafette/page";
import PaymentPage from "./payment/page";
import TrackerPage from "./track/page";
import AuthenticateAdmin from "./components/AuthenticateAdmin";

export default function AdminLayout() {
  const [selectedSidebarItem, setSelectedSidebarItem] = useState("");

  const handleSidebarItemClick = (itemName) => {
    setSelectedSidebarItem(itemName);
    // Store the selected item in localStorage
    localStorage.setItem("selectedSidebarItem", itemName);
  };

  useEffect(() => {
    // Retrieve the previously selected item from localStorage
    const storedItem = localStorage.getItem("selectedSidebarItem");
    if (storedItem) {
      setSelectedSidebarItem(storedItem);
    }
  }, []);

  return (
    <AuthenticateAdmin>
      <div className="flex h-screen">
        <VerticalNavbar
          onSidebarItemClick={handleSidebarItemClick}
          selectedSidebarItem={selectedSidebarItem}
        />
        <div>
          {selectedSidebarItem === "Dashboard" && <Dashboard />}
          {selectedSidebarItem === "View Companies" && <ViewCompaniesPage />}
          {selectedSidebarItem === "View Estafettes" && <ViewEstafettesPage />}
          {selectedSidebarItem === "Add Admin" && <AddNewAdmin />}
          {selectedSidebarItem === "View Users" && <ViewUsersPage />}
          {selectedSidebarItem === "Reported Issues" && <ReportedIssues />}
          {selectedSidebarItem === "Create Company" && <AddCompany />}
          {selectedSidebarItem === "Add Estafette" && <NewEstafette />}
          {selectedSidebarItem === "Payment History" && <PaymentPage />}
          {selectedSidebarItem === "Tracker" && <TrackerPage />}
        </div>
      </div>
    </AuthenticateAdmin>
  );
}
