/**
 * @copyright 2025 Daryl Ong
 * @license Apache-2.0
 */

import { JSX } from "react";

type MenuItem = {
  href: string;
  label: string;
  submenu?: SubmenuItem[];
};

type SubmenuItem = {
  href: string;
  icon: JSX.Element;
  label: string;
  desc: string;
};

export type { MenuItem };
