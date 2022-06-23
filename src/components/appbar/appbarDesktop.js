import {
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import {
  AppbarContainer,
  AppbarHeader,
  MyList,
} from "../../styles/appbar";
import SearchIcon from "@mui/icons-material/Search";
import Actions from "./actions";
import { useUIContext } from "../../context/ui";

export default function AppbarDesktop({ matches }) {
  
  const { setShowSearchBox } = useUIContext();

  return (
    <AppbarContainer>
      <AppbarHeader variant="h4">Mis Bags</AppbarHeader>
      <MyList type="row">
        <ListItemText primary="Inicio" />
        <ListItemText primary="Categorías" />
        <ListItemText primary="Productos" />
        <ListItemText primary="Nosotros" />
        <ListItemText primary="Contacto" />
        <ListItemButton onClick={() => setShowSearchBox(true)}>
          <ListItemIcon>
            <SearchIcon />
          </ListItemIcon>
        </ListItemButton>
          </MyList>
       <Actions matches={matches} />   
    </AppbarContainer>
  );
}
