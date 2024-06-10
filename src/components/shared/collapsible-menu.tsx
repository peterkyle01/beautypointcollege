"use client";

import { CaretSortIcon } from "@radix-ui/react-icons";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";

import { useState } from "react";
import { SheetClose } from "../ui/sheet";

export default function CollapsibleMenu() {
  const [isOpen, setIsOpen] = useState(true);
  const [isOpen2, setIsOpen2] = useState(true);
  return (
    <>
      <Collapsible
        open={isOpen}
        onOpenChange={setIsOpen}
        className="w-full space-y-2"
      >
        <div className="flex items-center justify-between space-x-4 px-4">
          <h4 className="text-lg font-semibold text-primary">Products</h4>
          <CollapsibleTrigger asChild>
            <Button variant="ghost" size="sm" className="text-primary">
              <CaretSortIcon className="h-4 w-4" />
              <span className="sr-only">Toggle</span>
            </Button>
          </CollapsibleTrigger>
        </div>
        <CollapsibleContent className="space-y-2">
          <div className="rounded-md border px-4 py-2 shadow-sm">
            <SheetClose asChild>
              <Link href={"/products/payment-hub"}>Payment Hub</Link>
            </SheetClose>
          </div>
          <div className="rounded-md border px-4 py-2 shadow-sm">
            <SheetClose asChild>
              <Link href={"/products/credit-hub"}>Credit Hub</Link>
            </SheetClose>
          </div>
          <div className="rounded-md border px-4 py-2 shadow-sm">
            <SheetClose asChild>
              <Link href={"/products/real-estate-solution"}>
                Real Estate Solution
              </Link>
            </SheetClose>
          </div>
          <div className="rounded-md border px-4 py-2 shadow-sm">
            <SheetClose asChild>
              <Link href={"/products/fast-launch-program"}>
                Fast Launch Program
              </Link>
            </SheetClose>
          </div>
        </CollapsibleContent>
      </Collapsible>
      <Collapsible
        open={isOpen2}
        onOpenChange={setIsOpen2}
        className="w-full space-y-2"
      >
        <div className="flex items-center justify-between space-x-4 px-4">
          <h4 className="text-lg font-semibold text-primary">Solutions</h4>
          <CollapsibleTrigger asChild>
            <Button variant="ghost" size="sm" className="text-primary">
              <CaretSortIcon className="h-4 w-4" />
              <span className="sr-only">Toggle</span>
            </Button>
          </CollapsibleTrigger>
        </div>
        <CollapsibleContent className="space-y-2">
          <div className="rounded-md border px-4 py-2 shadow-sm">
            <SheetClose asChild>
              <Link href={"/solutions/payment-processing"}>
                Payment Processing
              </Link>
            </SheetClose>
          </div>
          <div className="rounded-md border px-4 py-2 shadow-sm">
            <SheetClose asChild>
              <Link href={"/solutions/mpesa-integration"}>
                M-Pesa (KE) Integration
              </Link>
            </SheetClose>
          </div>
          <div className="rounded-md border px-4 py-2 shadow-sm">
            <SheetClose asChild>
              <Link href={"/solutions/lending-and-credit"}>
                Lending and Credit
              </Link>
            </SheetClose>
          </div>
          <div className="rounded-md border px-4 py-2 shadow-sm">
            <SheetClose asChild>
              <Link href={"/solutions/billing-cycle-rotation"}>
                Billing Cycle Rotation
              </Link>
            </SheetClose>
          </div>
          <div className="rounded-md border px-4 py-2 shadow-sm">
            <SheetClose asChild>
              <Link href={"/solutions/invoice-and-payment-links"}>
                Invoice and Payment Links
              </Link>
            </SheetClose>
          </div>
        </CollapsibleContent>
      </Collapsible>
    </>
  );
}
