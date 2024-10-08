import { ArcTermApp } from "$apps/ArcTerm/ts/app";
import { Creator } from "$apps/BugReports/Creator/ts/app";
import { AdvancedOption } from "$state/FirstTimeSetup/types/advanced";
import { loadApp, spawnApp } from "$ts/apps";
import { ArcTermIcon } from "$ts/images/apps";
import { BugReportIcon, HomeIcon } from "$ts/images/general";

export const advancedOptions: AdvancedOption[] = [
  {
    action: async () => {
      //PrimaryState.navigate("arcterm");
      await loadApp("ArcTerm", ArcTermApp);
      spawnApp("ArcTerm", 0);
    },
    description: "Debug technical problems using ArcOS' terminal",
    name: "Launch ArcTerm",
    image: ArcTermIcon,
  },
  {
    action: async () => {
      await loadApp("SubmitBugReport", { ...Creator, isOverlay: false, glass: true });
      spawnApp("SubmitBugReport", 0);
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
