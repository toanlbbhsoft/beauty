import {styled} from '@mui/material/styles';
import Button from "@mui/material/Button";

const ButtonPink = styled(Button)(() => ({
    padding: "1.4rem 4.1rem",
    color: "white",
    backgroundColor: "#FF64AE",
    border: "none",
    outline: "none",
    borderRadius: "5rem",
    textTransform: "initial",
    fontSize: "1.6rem",
    whiteSpace: "nowrap",
    height: "max-content",
    "&:hover": {
        backgroundColor: "#f8409a"
    }
}));
export default ButtonPink;