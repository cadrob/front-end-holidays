export const byName = holidays => {
  return holidays.sort(function(a, b) {
    var textA = a.name.toUpperCase();
    var textB = b.name.toUpperCase();
    return textA < textB ? -1 : textA > textB ? 1 : 0;
  });
};

export const byPrice = holidays => {
  return holidays.sort(function(a, b) {
    return b.price - a.price;
  });
};

export const byStar = holidays => {
  return holidays.sort(function(a, b) {
    return b.star - a.star;
  });
};
