import { AdvancedOption } from "$state/FirstTimeSetup/types/advanced";
import { ArcTermIcon } from "$ts/images/apps";
import { BugReportIcon, HomeIcon } from "$ts/images/general";
import { PrimaryState } from "$ts/states";

export const advancedOptions: AdvancedOption[] = [
  {
    action: () => {
      PrimaryState.navigate("arcterm");
    },
    description: "Debug technical problems using ArcOS' terminal",
    name: "Launch ArcTerm",
    image: ArcTermIcon,
  },
  {
    action: () => {
      throw new Error("Not Implemented!");
    },
    description: "Found something wrong? Tell us about it!",
    name: "Submit a bug report",
    image: BugReportIcon,
  },
  {
    action: (handler) => {
      handler.navigate("welcome");
    },
    description: "Return to the Welcome page",
    name: "Go back",
    image: HomeIcon,
  },
];
