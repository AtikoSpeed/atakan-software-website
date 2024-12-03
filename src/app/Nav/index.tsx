"use client";

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import ScrollInto from "react-scroll-into-view";

export default function Nav() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <ScrollInto
            className="cursor-pointer select-none"
            selector="#homepage"
          >
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Home
            </NavigationMenuLink>
          </ScrollInto>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <ScrollInto
            className="cursor-pointer select-none"
            selector="#portfolio"
          >
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Portfolio
            </NavigationMenuLink>
          </ScrollInto>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <ScrollInto
            className="cursor-pointer select-none"
            selector="#techstack"
          >
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Tech Stack
            </NavigationMenuLink>
          </ScrollInto>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <ScrollInto className="cursor-pointer select-none" selector="">
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Sonun
            </NavigationMenuLink>
          </ScrollInto>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}
