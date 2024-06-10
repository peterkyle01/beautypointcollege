import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Link from "next/link";
import Image from "next/image";
import { HiMenuAlt4 } from "react-icons/hi";
import CollapsibleMenu from "./collapsible-menu";

export default function Menu() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <HiMenuAlt4 size={30} />
      </SheetTrigger>
      <SheetContent className="w-3/4 bg-gray-50">
        <SheetHeader>
          <SheetTitle>
            <div className="relative flex h-1/2 w-full items-center justify-center">
              <Image src="/logo.webp" width={150} height={100} alt="logo" />
            </div>
          </SheetTitle>
          <SheetClose asChild>
            <Link
              href={"/"}
              className="space-x-4 space-y-8 px-4 text-start text-lg font-semibold text-primary"
            >
              Why Zangu&nbsp;?
            </Link>
          </SheetClose>
          <CollapsibleMenu />
          <SheetClose asChild>
            <Link
              href={"#contact-us"}
              className="space-x-4 space-y-8 px-4 text-start text-lg font-semibold text-primary"
            >
              Contact Us
            </Link>
          </SheetClose>
          <SheetDescription className="absolute bottom-0 w-full text-sm text-neutral-500">
            Copyright &copy; 2024 | Zangu Pay
          </SheetDescription>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
}
