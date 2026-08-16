import { createContext, useContext } from "react";

type LandingUi = {
  menuOpen: boolean;
  setMenuOpen: (open: boolean) => void;
};

export const LandingUiContext = createContext<LandingUi>({
  menuOpen: false,
  setMenuOpen: () => {},
});

export function useLandingUi(): LandingUi {
  return useContext(LandingUiContext);
}
