export function StarRating({ count_negative, count_positive, score }) {
  const totalReviews = count_negative + count_positive;
  const averageScore =
    totalReviews === 0 ? 0 : Math.round(score / totalReviews);
  let rating = "";
  for (let i = 0; i < 5; i++) {
    if (i < averageScore) {
      rating += "⭐";
    } else {
      rating += "☆";
    }
  }
  return rating;
}
