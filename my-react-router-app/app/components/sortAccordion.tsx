import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import FormControlLabel from "@mui/material/FormControlLabel";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import { useSearchParams } from "react-router";

export default function SortAccordion() {
  const [searchParams, setSearchParams] = useSearchParams();
  const sortBy = searchParams.get("sortBy") || "title";
  const order = searchParams.get("order") || "asc";

  const handleSortingChange = (field: string, dir: string) => {
    searchParams.set("sortBy", field);
    searchParams.set("order", dir);
    searchParams.set("page", "1"); // reset to page 1 when sorting changes
    setSearchParams(searchParams);
  };

  return (
    <Accordion>
      <AccordionSummary>Sort By</AccordionSummary>
      <AccordionDetails>
        <RadioGroup
          value={`${sortBy}-${order}`}
          onChange={(e) => {
            const [field, dir] = e.target.value.split("-");
            handleSortingChange(field, dir);
          }}
        >
          <FormControlLabel
            value="title-asc"
            control={<Radio />}
            label="Title (A-Z)"
          />
          <FormControlLabel
            value="title-desc"
            control={<Radio />}
            label="Title (Z-A)"
          />
          <FormControlLabel
            value="price-asc"
            control={<Radio />}
            label="Price (Low → High)"
          />
          <FormControlLabel
            value="price-desc"
            control={<Radio />}
            label="Price (High → Low)"
          />
        </RadioGroup>
      </AccordionDetails>
    </Accordion>
  );
}
