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
import { Modal, Button } from "@mantine/core";

const NavigationItem = [
  { text: "Products", href: "/" },
  { text: "Solutions", href: "/" },
  { text: "Resources", href: "/" },
  { text: "Pricing", href: "/" },
];

const HeaderComponent: FC = () => {
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <header className={classNames(s.header, s.container)}>
      <Link href="/">
        <Image src={WhitepaceLogo} alt="WhitepaceLogo" />
      </Link>

      <ul className={s.header__list}>
        {NavigationItem.map((item, index) => {
          return (
            <li className={s.header__item} key={index}>
              <Link className={s.header__link} href="/">
                {item.text}
                <Image src={ArrowVector} alt="ArrowVector" />
              </Link>
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

      <Button className={s.button__burger} onClick={open}>
        <Image src={BurgerMenu} alt="BurgerMenu" />
      </Button>

      <Modal
        className={s.modal__container}
        opened={opened}
        onClose={close}
        fullScreen
        radius={0}
        transitionProps={{ transition: "fade", duration: 200 }}
      >
        <div className={s.container}>Контент</div>
      </Modal>
    </header>
  );
};

export default HeaderComponent;
