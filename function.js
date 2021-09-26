window.function = function (arr, jl, sep, rkItem, des) {
  if (arr == undefined && jl == undefined) return undefined;
  if (rkItem == undefined) return undefined;

  jl = jl.value ?? "";
  sep = sep.value ?? "|";
  des = des.value ?? 0;

  // Rank Item
  rkItem = rkItem.value ?? "";
  rkItem = rkItem.trim();

  // Array
  let sorted;
  if (arr != undefined) {
    sorted = [...arr.value];
  } else {
    sorted = jl.split(sep);
  }

  sorted = sorted.map(function (item) {
    return item.trim();
  });

  // Sort
  if (des) {
    // Sort Descending
    sorted.sort((a, b) => b.localeCompare(a));
  } else {
    // Sort Ascending
    sorted.sort((a, b) => a.localeCompare(b));
  }

  return sorted.indexOf(rkItem) + 1;
};
