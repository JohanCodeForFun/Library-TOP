import myLibrary from "./app";

class FindLastID {
  lastId: string;

  constructor(lastId: string) {
    this.lastId = lastId;
  }

  static getLastId(): number {
    if (!Array.isArray(myLibrary) || myLibrary.length === 0) {
      let lastId = 1;

      return lastId;
    }

    let lastId = myLibrary.length - 1;

    return lastId;
  }
}

export default FindLastID;