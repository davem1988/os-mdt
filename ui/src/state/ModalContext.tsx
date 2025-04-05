"use client";
import * as React from 'react';
import { createContext, useContext, useState, ReactNode } from "react";

// Define possible modal types
type ModalType = "login" | "register" | "deleteConfirm" | "newInfraction" | "";

// Define the context structure
interface ModalContextType {
  isOpen: boolean;
  type: ModalType;
  openModal: (modalType: ModalType) => void;
  closeModal: () => void;
}

// Create the context
const ModalContext = React.createContext<ModalContextType | undefined>(undefined);

// Provider Component
export const ModalProvider = ({ children }: { children: ReactNode }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [type, setType] = useState<ModalType>("");

  const openModal = (modalType: ModalType) => {
    setType(modalType);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
    setType(""); // Reset type on close
  };

  return (
    <ModalContext.Provider value={{ isOpen, type, openModal, closeModal }}>
      {children}
    </ModalContext.Provider>
  );
};

// Custom Hook to use modal context
export const useModal = () => {
  const context = useContext(ModalContext);
  if (!context) throw new Error("useModal must be used within a ModalProvider");
  return context;
};
