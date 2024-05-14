// Sorting functions for data

// Sort events by ASCENDING Price
export function sortPriceAscend(allEventsArr) {
  return allEventsArr.sort((a, b) => {
    const priceA = a.ticketPrice;
    const priceB = b.ticketPrice;

    return priceA - priceB;
  });
}
