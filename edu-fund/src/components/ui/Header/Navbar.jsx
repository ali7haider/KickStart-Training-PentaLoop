import { Layout, Menu, Button, Drawer, Grid, Switch } from "antd";
import { MenuOutlined } from "@ant-design/icons";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import styles from "./Navbar.module.css";
import { BulbOutlined, BulbFilled } from "@ant-design/icons";
import { useSelector, useDispatch } from "react-redux";
import { toggleTheme } from "../../../redux/actions/themeActions"; 

const { Header } = Layout;
const { useBreakpoint } = Grid;

const navItems = [
  { key: "/", label: "Home", path: "/" },
  { key: "/about", label: "About", path: "/about" },
  { key: "/services", label: "Services", path: "/services" },
  { key: "/contact", label: "Contact", path: "/contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const screens = useBreakpoint();
  const location = useLocation?.() ?? { pathname: "/" };
  
  const darkMode = useSelector(state => state.theme.darkMode);
  const dispatch = useDispatch();

  const handleThemeChange = (checked) => {
    dispatch(toggleTheme());
  };

  const menuItems = navItems.map((it) => ({
    key: it.path,
    label: (
      <Link to={it.path} onClick={() => setOpen(false)}>
        {it.label}
      </Link>
    ),
  }));

  return (
    <Header 
      className={styles.customHeader}
    >
      <div className={styles.logo} style={{ color: '#000' }}>EduFund</div>
      
      <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
        {screens.md ? (
          <Menu
            mode="horizontal"
            items={menuItems}
            selectedKeys={[location.pathname]}
            style={{
              flex: 1,
              justifyContent: "flex-start",
              borderBottom: "none",
              background: 'transparent',
              color: 'white'
            }}
            theme={darkMode ? 'dark' : 'light'}
          />
        ) : (
          <>
            <Button
              type="text"
              icon={<MenuOutlined />}
              onClick={() => setOpen(true)}
              aria-label="Open menu"
              style={{ color: 'white' }}
            />

            <Drawer
              title="Menu"
              placement="right"
              onClose={() => setOpen(false)}
              open={open}
              bodyStyle={{ 
                padding: 0,
                background: darkMode ? '#1f1f1f' : '#fff'
              }}
              headerStyle={{
                background: darkMode ? '#1f1f1f' : '#fff',
                borderBottom: darkMode ? '1px solid #434343' : '1px solid #f0f0f0'
              }}
            >
              <Menu
                mode="vertical"
                items={menuItems}
                selectedKeys={[location.pathname]}
                onClick={() => setOpen(false)}
                theme={darkMode ? 'dark' : 'light'}
              />
            </Drawer>
          </>
        )}

        {/* Theme Switch */}
        <div style={{ 
          display: 'flex', 
          alignItems: 'center',
          marginLeft: screens.md ? '16px' : '0'
        }}>
          <Switch
            checked={darkMode}
            onChange={handleThemeChange}
            checkedChildren={<BulbFilled />}
            unCheckedChildren={<BulbOutlined />}
          />
          {screens.md && (
            <span style={{ color: 'white', marginLeft: '8px', fontSize: '14px' }}>
              {darkMode ? 'Dark' : 'Light'}
            </span>
          )}
        </div>
      </div>
    </Header>
  );
};

export default Navbar;