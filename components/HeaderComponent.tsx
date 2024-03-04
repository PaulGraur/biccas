"use client";

import React, { FC } from "react";
import Image from "next/image";
import Link from "next/link";
import classNames from "classnames";
import s from "./HeaderComponent.module.scss";
import MainButtonComponent from "./MainButtonComponent";
import WhitepaceLogo from "@/images/WhitepaceLogo.svg";
import ArrowVector from "@/images/page-element/ArrowVector.svg";
import BurgerMenu from "@/images/page-element/BurgerMenu.svg";
import { useDisclosure } from "@mantine/hooks";
import { Modal, Button, Menu, Text } from "@mantine/core";

interface HeaderProps {
  className?: string;
  style?: object;
}

const NavigationItem = [
  { text: "Products", href: "/" },
  { text: "Solutions", href: "/" },
  { text: "Resources", href: "/" },
  { text: "Pricing", href: "/" },
];

const NavigationLogo = (
  <Link href="/">
    <Image src={WhitepaceLogo} alt="WhitepaceLogo" />
  </Link>
);

const NavigationComponent: FC<HeaderProps> = ({ className, style }) => (
  <React.Fragment>
    <ul className={classNames(s.header__list, className)}>
      {NavigationItem.map((item, index) => {
        return (
          <li className={s.header__item} key={index}>
            <Menu trigger="hover" openDelay={100} closeDelay={100}>
              <Menu.Target>
                <Link className={s.header__link} href="/">
                  {item.text}
                  <Image
                    className={s.header__arrow}
                    src={ArrowVector}
                    alt="ArrowVector"
                  />
                </Link>
              </Menu.Target>

              <Menu.Dropdown>
                <Link href="/">{item.text}</Link>
              </Menu.Dropdown>
            </Menu>
          </li>
        );
      })}
    </ul>

    <div className={s.button__container}>
      <MainButtonComponent
        text="Login"
        backgroundColor="yellow"
        textColor="textBlue"
      />
      <MainButtonComponent
        text="Try Whitepace free"
        showArrow={true}
        backgroundColor="blue"
      />
    </div>
  </React.Fragment>
);

const HeaderComponent: FC = () => {
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <header className={classNames(s.header, s.container)}>
      {NavigationLogo}

      <NavigationComponent />

      <Button onClick={open}>
        <Image className={s.button__burger} src={BurgerMenu} alt="BurgerMenu" />
      </Button>

      <Modal
        opened={opened}
        onClose={close}
        fullScreen
        radius={0}
        transitionProps={{ transition: "fade", duration: 200 }}
      >
        <div className={s.container}>
          <NavigationComponent className={s.modal__navigation} />
        </div>
      </Modal>
    </header>
  );
};

export default HeaderComponent;
