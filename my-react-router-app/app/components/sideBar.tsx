import { useSearchParams } from "react-router";
import { Checkbox} from "@mui/material";

interface SideBarProps {
  categories: string[];
  selectedCategory?: string;
}
export default function SideBar({
  categories,
  selectedCategory,
}: SideBarProps) {
  const [searchParams, setSearchParams] = useSearchParams();

  const toggleCategory = (category: string) => {
    const current = searchParams.get("category")?.split(",") || [];

    let updated: string[];
    if (current.includes(category)) {
      updated = current.filter((c) => c !== category);
    } else {
      updated = [...current, category];
    }

    if (updated.length > 0) {
      searchParams.set("category", updated.join(","));
    } else {
      searchParams.delete("category");
    }

    setSearchParams(searchParams);
  };

  return (
    <aside
      className="w-full sm:w-[240px] 
      h-[204px] 
      opacity-100 
      pt-6 
      pb-6
      flex 
      flex-col
      box-border
      sticky
      top-0
      mt-8 sm:mt-0
    "
    >
      <h2 className="text-lg font-semibold mb-2">Categories</h2>
      <ul className="flex flex-col gap-2 p-0 m-0">
        {categories.map((cat) => (
          <li key={cat} className="list-none">
            <label className="inline-flex items-center gap-2 cursor-pointer">
              <Checkbox
                checked={selectedCategory?.includes(cat) ?? false}
                onChange={() => toggleCategory(cat)}
                color="default"
              />
              <span>{cat}</span>
            </label>
          </li>
        ))}
      </ul>
    </aside>
  );
}
