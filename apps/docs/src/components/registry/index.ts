import type { ComponentMeta } from "./types.js";

import { accordionMeta } from "./accordion.js";
import { alertDialogMeta } from "./alert-dialog.js";
import { alertMeta } from "./alert.js";
import { avatarMeta } from "./avatar.js";
import { badgeMeta } from "./badge.js";
import { breadcrumbMeta } from "./breadcrumb.js";
import { buttonMeta } from "./button.js";
import { cardMeta } from "./card.js";
import { checkboxMeta } from "./checkbox.js";
import { commandMeta } from "./command.js";
import { contextMenuMeta } from "./context-menu.js";
import { dialogMeta } from "./dialog.js";
import { dropdownMenuMeta } from "./dropdown-menu.js";
import { hoverCardMeta } from "./hover-card.js";
import { inputMeta } from "./input.js";
import { labelMeta } from "./label.js";
import { motionMeta } from "./motion.js";
import { paginationMeta } from "./pagination.js";
import { popoverMeta } from "./popover.js";
import { progressMeta } from "./progress.js";
import { radioGroupMeta } from "./radio-group.js";
import { scrollAreaMeta } from "./scroll-area.js";
import { selectMeta } from "./select.js";
import { separatorMeta } from "./separator.js";
import { sheetMeta } from "./sheet.js";
import { skeletonMeta } from "./skeleton.js";
import { sliderMeta } from "./slider.js";
import { spotlightMeta } from "./spotlight.js";
import { switchMeta } from "./switch.js";
import { tabsMeta } from "./tabs.js";
import { textareaMeta } from "./textarea.js";
import { toastMeta } from "./toast.js";
import { tooltipMeta } from "./tooltip.js";

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
