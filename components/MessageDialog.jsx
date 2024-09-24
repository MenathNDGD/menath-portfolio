"use client";

import React from "react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";

const MessageDialog = ({ isOpen, onClose }) => {
  return (
    <AlertDialog open={isOpen} onOpenChange={onClose}>
      <AlertDialogContent className="max-w-[450px] p-6 sm:max-w-xl sm:p-8">
        <AlertDialogHeader>
          <AlertDialogTitle className="text-2xl text-accent sm:text-2xl">
            Message Sent Successfully!
          </AlertDialogTitle>
          <AlertDialogDescription className="mt-2 text-sm text-white sm:text-base">
            Thank you for reaching out! I have received your message and will
            get back to you as soon as possible.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogAction
            onClick={onClose}
            className="items-center justify-center w-full px-6 py-2 text-lg font-semibold text-primary bg-accent hover:bg-accent-hover sm:w-auto sm:py-3"
          >
            Close
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default MessageDialog;
