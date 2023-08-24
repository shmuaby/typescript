// Step 1: נתון לכם אינאם - אתם רשאים להפוך אותו למשהו אחר
export enum ItemType {
  Book = "book",
  DVD = "dvd",
}

// Step 2:  ספר צריך להכיל שדות
interface Book {
  type: string;
  title: string;
  author: string;
}

interface DVD {
  type: string;
  title: string;
  duration: number;
}

// Test data
const libraryItems: (Book | DVD)[] = [
  {
    type: ItemType.Book,
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
  },
  { type: ItemType.DVD, title: "Inception", duration: 148 },
  { type: ItemType.Book, title: "To Kill a Mockingbird", author: "Harper Lee" },
  { type: ItemType.DVD, title: "Avatar", duration: 162 },
  { type: ItemType.Book, title: "Go Set a Watchman", author: "Harper Lee" },
];

// Step 3: פונקציה מקבלת מערך של פריטים, ופונקצית פילטור. ומחזירה מערך מפולטר של פריטים
// function filterItems<T>(items: T[], filterFn: (value: T) => boolean) {
//   return items.filter(filterFn);
// }

// const filteredItems = (value: Book | DVD): boolean => {
//   return value.type === ItemType.DVD
//     ? (value as DVD).duration === 148
//       ? true
//       : false
//     : false;
// };

// const result: (Book | DVD)[] = filterItems(libraryItems, filteredItems);
// console.log(result);

// Step 4: הפונקציה מקבלת מערך של פריטים ומדפיסה את כל המידע הרלוונטי לגבי כל פריט

// function printItemsDat(items: (Book | DVD)[]) {
//   console.log("books");
//   for (let index: number = 0; index < items.length; index++) {
//     if (items[index].type === ItemType.Book) {
//       console.table(items[index]);
//     }
//   }
//   console.log("DVD");
//   for (let index: number = 0; index < items.length; index++) {
//     if (items[index].type === ItemType.DVD) {
//       console.table(items[index]);
//     }
//   }
// }
// printItemsDat(libraryItems);

// Step 5:  הדפיסו את כל המידע הנתון

// function findAll<T>(items: T[]) {
//   return items;
// }
// const all: (Book | DVD)[] = findAll(libraryItems);
// console.table(all);

// Step 6: ממשו את פונקצית הפילטור כך שתחזיר סרטים ארוכים משעתיים והדפיסו את המערך

// function filterItemsDvd<T>(items: T[], filterFn: (value: T) => boolean) {
//   return items.filter(filterFn);
// }

// const filteredItemsOfDvd = (value: Book | DVD): boolean => {
//   return value.type === ItemType.DVD
//     ? (value as DVD).duration > 120
//       ? true
//       : false
//     : false;
// };

// const result: (Book | DVD)[] = filterItemsDvd(libraryItems, filteredItemsOfDvd);
// console.log(result);

// Step 7:  Harper Lee ממשו את פונקצית הפילטור כך שתחזיר רק ספרים של
// function filterItemsBook<T>(items: T[], filterFn: (value: T) => boolean) {
//   return items.filter(filterFn);
// }

// const filteredItemsOfBook = (value: Book | DVD): boolean => {
//   return value.type === ItemType.Book
//     ? (value as Book).author === "Harper Lee"
//       ? true
//       : false
//     : false;
// };

// const result: (Book | DVD)[] = filterItemsBook(
//   libraryItems,
//   filteredItemsOfBook
// );
// console.log(result);
