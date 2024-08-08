import MenuList from "./MenuList";

function SideMenu({ isLoggedIn }) {
  const arr = [
    "Home",
    "Product",
    "Lending Library",
    "MyShelf",
    "MyLibrary",
    "MyAccount",
  ];
  const NavArr = [
    "/",
    "/product",
    "/lendinglib",
    "/MyShelf",
    "/MyLibrary",
    "/MyAccount",
  ];

  const isLogin = isLoggedIn || localStorage.getItem("isLogIn");

  return (
    <>
      <div>
        <ul>
          {isLogin
            ? arr.map((val, index) => (
                <MenuList value={val} key={index} linkTo={NavArr[index]} />
              ))
            : arr
                .filter((item, index) => index < 3)
                .map((val, index) => (
                  <MenuList value={val} key={index} linkTo={NavArr[index]} />
                ))}
        </ul>
      </div>
    </>
  );
}

export default SideMenu;
