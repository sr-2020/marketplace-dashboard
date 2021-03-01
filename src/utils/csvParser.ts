export interface CsvHeader {
  name: string;
  type: "string" | "number" | "boolean";
}

export default class CsvParser<T = null> {
  private _inputRef: HTMLInputElement = document.createElement("input");
  private readonly _headers: CsvHeader[];
  public result: T;

  constructor(headers: CsvHeader[]) {
    this.result = {} as T;
    this._headers = [];
    if (headers.length === 0) {
      this.onError(new Error("Headers must be defined"));
      return;
    }
    this._headers = headers;
    this._setUpShadowInput();
  }

  private _setUpShadowInput() {
    this._inputRef.setAttribute("type", "file");
    this._inputRef.setAttribute("multi", "false");
    this._inputRef.addEventListener("change", this._changeHandler.bind(this));
  }

  private _changeHandler = async () => {
    const file: File = this._inputRef.files![0];
    if (file.type !== "text/csv") {
      this.onError(
        new Error("Invalid file format. Only *.csv files are allowed!")
      );
      return;
    }
    const result = await this._readFile(file);
    const arr = this._create2dArray(result);
    if (!this._checkArrayValidity(arr)) {
      this.onError(new Error("Row items length !== headers items length"), arr);
      return;
    }
    const convertedArr = arr.map(el => this._convertRowTypes(el));
    this.onParseEnd(this._prepareData(convertedArr));
  };

  private _readFile(file: File): Promise<string> {
    return new Promise<string>((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsText(file);
      reader.onload = () => resolve(reader.result as string);
      reader.onerror = error => reject(error);
    });
  }

  private _create2dArray(result: string): string[][] {
    const rows = result.match(/^.+$/gm);
    if (rows === null) {
      this.onError(
        new Error(
          "Pattern /^.+$/gm return null. Possible text data was corrupted"
        ),
        result
      );
      throw Error("parse error");
    }
    return rows.map(row => row.split(","));
  }

  private _prepareData(convertedArray: (boolean | number | string)[][]): T[] {
    return convertedArray.map(row => {
      const obj: { [key: string]: boolean | number | string } = {};
      this._headers.forEach(({ name }, idx) => {
        obj[name] = row[idx];
      });
      return obj as unknown as T;
    });
  }

  private _convertRowTypes(row: string[]): (string | number | boolean)[] {
    return row.map((item, idx) => {
      const { type } = this._headers[idx];
      return this._convertType(item, type);
    });
  }

  private _convertType(value: string, type: "string" | "number" | "boolean") {
    switch (type) {
      case "boolean":
        return this._convertBoolean(value);
      case "number":
        return this._convertNumber(value);
      default:
        return value;
    }
  }

  private _convertNumber(value: string): number {
    const _value = +value;
    if (!isFinite(_value)) {
      this.onError(
        new Error(
          `Unable to convert number type: ${value}. Returned default 0 value`
        )
      );
      return 0;
    }
    return _value;
  }

  private _convertBoolean(value: string) {
    const _value = value.toLowerCase();
    if (_value === "true") {
      return true;
    }
    if (_value === "false") {
      return false;
    }
    this.onError(
      new Error(
        `Unable to convert boolean type: ${value}. Return default false value`
      )
    );
    return false;
  }

  private _checkArrayValidity(arr: string[][] | undefined): boolean {
    if (!arr) {
      return false;
    }
    let valid = true;
    arr.forEach(row => {
      valid = row.length === this._headers.length;
    });
    return valid;
  }

  public selectFile() {
    this._inputRef.click();
  }

  public onParseEnd: (data: T[]) => void = () => {};
  public onError: (err: Error, data?: any) => void = () => {};

  public removeListeners() {
    this._inputRef.removeEventListener("change", this._changeHandler);
  }
}
