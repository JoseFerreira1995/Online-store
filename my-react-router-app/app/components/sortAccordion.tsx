import { Button, Menu, MenuItem } from "@mui/material";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import FormControlLabel from "@mui/material/FormControlLabel";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import { useState } from "react";
import { useSearchParams } from "react-router";

export default function SortAccordion() {
  const [searchParams, setSearchParams] = useSearchParams();
  const sortBy = searchParams.get("sortBy") || "title";
  const order = searchParams.get("order") || "asc";
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleSortingChange = (field: string, dir: string) => {
    searchParams.set("sortBy", field);
    searchParams.set("order", dir);
    searchParams.set("page", "1"); // reset to page 1 when sorting changes
    setSearchParams(searchParams);
    handleClose();
  };

  return (
    <div>
      <Button
        id="sort-button"
        aria-controls={open ? "sort-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
        variant="outlined"
      >
        Sort By: {order === "asc" ? "↓" : "↑"}
      </Button>
      <Menu
        id="sort-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
      >
        <MenuItem
          onClick={() => handleSortingChange("title", "asc")}
          selected={sortBy === "title" && order === "asc"}
        >
          Title (A-Z)
        </MenuItem>
        <MenuItem
          onClick={() => handleSortingChange("title", "desc")}
          selected={sortBy === "title" && order === "desc"}
        >
          Title (Z-A)
        </MenuItem>
        <MenuItem
          onClick={() => handleSortingChange("price", "asc")}
          selected={sortBy === "price" && order === "asc"}
        >
          Price (Low → High)
        </MenuItem>
        <MenuItem
          onClick={() => handleSortingChange("price", "desc")}
          selected={sortBy === "price" && order === "desc"}
        >
          Price (High → Low)
        </MenuItem>
      </Menu>
    </div>
  );
}
