import type { ComponentMeta } from "./types";

import { accordionMeta } from "./accordion";
import { alertMeta } from "./alert";
import { alertDialogMeta } from "./alert-dialog";
import { avatarMeta } from "./avatar";
import { badgeMeta } from "./badge";
import { breadcrumbMeta } from "./breadcrumb";
import { buttonMeta } from "./button";
import { cardMeta } from "./card";
import { checkboxMeta } from "./checkbox";
import { commandMeta } from "./command";
import { contextMenuMeta } from "./context-menu";
import { dialogMeta } from "./dialog";
import { dropdownMenuMeta } from "./dropdown-menu";
import { hoverCardMeta } from "./hover-card";
import { inputMeta } from "./input";
import { labelMeta } from "./label";
import { motionMeta } from "./motion";
import { paginationMeta } from "./pagination";
import { popoverMeta } from "./popover";
import { progressMeta } from "./progress";
import { radioGroupMeta } from "./radio-group";
import { scrollAreaMeta } from "./scroll-area";
import { selectMeta } from "./select";
import { separatorMeta } from "./separator";
import { sheetMeta } from "./sheet";
import { skeletonMeta } from "./skeleton";
import { sliderMeta } from "./slider";
import { spotlightMeta } from "./spotlight";
import { switchMeta } from "./switch";
import { tabsMeta } from "./tabs";
import { textareaMeta } from "./textarea";
import { toastMeta } from "./toast";
import { tooltipMeta } from "./tooltip";

export const componentRegistry: ComponentMeta[] = [
  accordionMeta,
  alertMeta,
  alertDialogMeta,
  avatarMeta,
  badgeMeta,
  breadcrumbMeta,
  buttonMeta,
  cardMeta,
  checkboxMeta,
  commandMeta,
  contextMenuMeta,
  dialogMeta,
  dropdownMenuMeta,
  hoverCardMeta,
  inputMeta,
  labelMeta,
  paginationMeta,
  popoverMeta,
  progressMeta,
  radioGroupMeta,
  scrollAreaMeta,
  selectMeta,
  separatorMeta,
  sheetMeta,
  skeletonMeta,
  sliderMeta,
  spotlightMeta,
  switchMeta,
  tabsMeta,
  textareaMeta,
  toastMeta,
  tooltipMeta,
  motionMeta,
];

export const componentCategories = [
  "Form",
  "Layout",
  "Overlay",
  "Feedback",
  "Navigation",
  "Motion",
] as const;
