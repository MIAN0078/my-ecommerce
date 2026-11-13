function CategoryCard({ category, onClick }) {
  return (
    <div
      className="category-card"
      onClick={() => onClick(category)}
    >
      <h3>{category}</h3>
    </div>
  );
}

export default CategoryCard;