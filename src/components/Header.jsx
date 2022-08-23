import styles from "../styles/Header.module.css";
import igniteLogo from "../assets/ignite-logo.svg";
import Cookies from "js-cookie";
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuDivider,
  Button,
} from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";
import { SignOut } from "phosphor-react";
import { AuthContext } from "../contexts/AuthContext";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";

export function Header() {
  const { user, signOutUser } = useContext(AuthContext);
  const navigate = useNavigate();
  // const signOut = () => {
  //   Cookies.remove("reactauth.token");
  //  return navigate("/");

  // };

  return (
    <header className={styles.header}>
      {/* <img src={igniteLogo} alt="LogoIgnite" /> */}
      {/* <img src={igniteLogo} alt="LogoIgnite" /> */}
      <p>ShareBlog</p>
      <p onClick={() => navigate("/app")}>Home</p>
      <div>
        <Menu bg="white">
          <MenuButton
            className={styles.signOut}
            as={Button}
            colorScheme="blue"
            boxShadow="none"
            rightIcon={<ChevronDownIcon />}
          >
            {user?.name}
          </MenuButton>
          <MenuList bg="transparent">
            <MenuItem
              fontSize={"1.15rem"}
              _focus={{ bg: "none" }}
              _hover={{
                bg: "#3182ce",
                color: "white",
                fontWeight: "bold",
                boxShadow: "none",
              }}
              boxShadow="none"
              onClick={() => navigate("/userPosts")}
            >
              Minhas publicações
            </MenuItem>
            <MenuItem
              gap={150}
              onClick={signOutUser}
              transition="all 0.2"
              fontSize={"1.15rem"}
              _hover={{
                bg: "#3182ce",
                color: "white",
                fontWeight: "bold",
                boxShadow: "none",
              }}
              boxShadow="none"
              bg="transparent"
            >
              Sair {<SignOut size={24} />}
            </MenuItem>
          </MenuList>
        </Menu>
      </div>
    </header>
  );
}
