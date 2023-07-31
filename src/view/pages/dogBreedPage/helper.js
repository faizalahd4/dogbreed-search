/**
 * Dog breed helper
 * 
 * @author - Faizal
 * @date - 31st July, 2023 
 */
// SORT LIST BY NAME, HEIGHT AND LIFE SPAN
export const sortByName = (data = []) => {
  return data.sort((a, b) => {
    // Sort by name
    if (a.name < b.name) return -1;
    if (a.name > b.name) return 1;
  });
}

// SORT LIST BY NAME, HEIGHT AND LIFE SPAN
export const sortByHeight = (data = []) => {
  return data.sort((a, b) => {
    // Sort by height
    const aHeight = parseFloat(a.height.imperial.split(" - ")[1]);
    const bHeight = parseFloat(b.height.imperial.split(" - ")[1]);
    if (aHeight < bHeight) return -1;
    if (aHeight > bHeight) return 1;
  });
}

// SORT LIST BY NAME, HEIGHT AND LIFE SPAN
export const sortByLifeSpan = (data = []) => {
  return data.sort((a, b) => {
    // Sort by life span
    const aLifeSpanList = a.life_span.replace("years", "").trim().split(" - ");
    const bLifeSpanList = b.life_span.replace("years", "").trim().split(" - ");
    const aLifeSpan = parseInt(aLifeSpanList?.[1] || aLifeSpanList[0]);
    const bLifeSpan = parseInt(bLifeSpanList?.[1] || bLifeSpanList[0]);
    if (aLifeSpan < bLifeSpan) return -1;
    if (aLifeSpan > bLifeSpan) return 1;
    return 0;
  });
}