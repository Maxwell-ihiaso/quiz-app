import { useState } from "react";
import { IAPICategory } from "../interfaces/Index";
import { category } from "../data/category";

const Category = () => {
  const [categories] = useState<IAPICategory>(category);

  const handleCategoryClick = () => {};

  return (
    <aside className="quiz-category">
      {Object.keys(categories).map((data: string, index: number) => (
        <span key={index} onClick={handleCategoryClick}>
          {data}
        </span>
      ))}
    </aside>
  );
};

export default Category;
