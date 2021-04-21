import React from "react";
import { useBoolean } from "@uifabric/react-hooks";
import "./styles.css";
import {
  DefaultButton,
  Panel,
  PanelType,
  Nav,
  INavLinkGroup,
} from "@fluentui/react";

const navLinkGroups: INavLinkGroup[] = [
  {
    name: "Projetos",
    links: [
      {
        name: "Ver projetos ",
        url: "/projects",
        key: "key1",
      },
    ],
  },
  {
    name: "Blog",
    links: [
      {
        name: "Ver Posts",
        url: "/posts",
        key: "key1",
      },
    ],
  },
  {
    name: "Fale comigo",
    links: [
      {
        name: "Envie uma mensagem",
        url: "/contact",
        key: "key3",
      },
    ],
  },
];

const Menu = () => {
  const [isOpen, { setTrue: openPanel, setFalse: dismissPanel }] = useBoolean(
    false
  );

  return (
    <div>
      <DefaultButton text="MENU" onClick={openPanel} />

      <Panel
        isOpen={isOpen}
        type={PanelType.customNear}
        customWidth={"340px"}
      >
        <div className="closeIcon" onClick={dismissPanel}>
          <h1> x </h1>
        </div>

        <Nav groups={navLinkGroups} />
      </Panel>

    </div>
  );
};

export default Menu;
