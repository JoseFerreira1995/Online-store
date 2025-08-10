import SortAccordion from "./sortAccordion";

interface FilterBarProps {
  productsLength: number;
  total: number;
}

export default function FilterBar({ productsLength, total }: FilterBarProps) {
  return (
    <div
      className="
        flex 
    items-center 
    justify-between 
    flex-wrap
    w-full 
    max-w-[1056px] 
    h-[84px] 
    gap-6 
    pt-6 
    pb-6 
    border-b border-gray-300
    box-border
      "
    >
      <div>
        <SortAccordion />
      </div>

      <p
        className="
         flex-shrink-0
      w-[137px]
      h-[20px]
      font-inter font-normal text-[15px] leading-[20px]
      opacity-100
      text-right

      /* On smaller screens, full width and left align */
      sm:text-right
      xs:w-full
      xs:text-left
      xs:mt-2
        "
      >
        Showing {productsLength} of {total}
      </p>
    </div>
  );
}
