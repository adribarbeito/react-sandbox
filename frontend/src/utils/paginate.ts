import { SorterType } from "../@types/sorter.type";

export default function paginateList(
  array: any[],
  pageSize: number,
  pageNumber: number,
  sorter?: SorterType
) {
  let newArray;

  if (sorter && sorter.field && sorter.order) {
    const { field, order } = sorter;

    newArray = array.sort((a, b) =>
      a[field] > b[field]
        ? order === "asc"
          ? 1
          : -1
        : b[field] > a[field]
        ? order === "asc"
          ? -1
          : 1
        : 0
    );
  } else {
    newArray = array;
  }

  return newArray.slice(
    (pageNumber - 1) * pageSize,
    (pageNumber - 1) * pageSize + pageSize
  );
}
