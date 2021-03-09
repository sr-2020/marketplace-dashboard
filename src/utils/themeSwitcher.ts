import { ColorTheme, THEME_DARK, THEME_LIGHT } from "@/assets/themes";
import { BehaviorSubject } from "rxjs";

type ThemeType = "dark" | "light";

export class ThemeSwitcher {
  private _bodyRef: HTMLElement;
  private _localStorage: Storage;
  private _selectedTheme$: BehaviorSubject<ThemeType>;

  constructor(window: Window, document: Document) {
    if (!document || !window) {
      throw Error("Document or Window doesn't implemented!");
    }
    this._localStorage = window.localStorage;
    this._bodyRef = document.body;
    this._selectedTheme$ = new BehaviorSubject<ThemeType>(
      this._selectCurrentTheme()
    );
    this._selectedTheme$.subscribe(this._applyTheme.bind(this));
  }

  public changeTheme() {
    this._selectedTheme$.value === "dark"
      ? this._selectedTheme$.next("light")
      : this._selectedTheme$.next("dark");
  }

  private _applyTheme(type: ThemeType) {
    if (this._localStorage.theme) {
      this._localStorage.removeItem("theme");
    }
    this._localStorage.theme = type;
    switch (type) {
      case "dark":
        this._bodyRef.style.cssText = this._generateThemeString(THEME_DARK);
        break;
      case "light":
        this._bodyRef.style.cssText = this._generateThemeString(THEME_LIGHT);
        break;
      default:
        this._bodyRef.removeAttribute("style");
        break;
    }
  }

  private _selectCurrentTheme(): ThemeType {
    const key = this._localStorage.theme as ThemeType;
    return key ? key : "dark";
  }

  private _generateThemeString(theme: ColorTheme) {
    const keys = Object.keys(theme);
    return keys.reduce((acc, key) => {
      return `${acc}${key}: ${theme[key]}; `;
    }, "");
  }
}
