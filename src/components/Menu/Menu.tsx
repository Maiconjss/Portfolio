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
        url: "http://msn.com",
        key: "key1",
        target: "_blank",
      },
    ],
  },
  {
    name: "Blog",
    links: [
      {
        name: "Ver Posts",
        url: "http://msn.com",
        key: "key1",
        target: "_blank",
      },
    ],
  },
  {
    name: "Sobre mim",
    links: [
      {
        name: "Minha história",
        url: "http://msn.com",
        key: "key3",
        target: "_blank",
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
        headerText="Maicon Ferreira"
        isOpen={isOpen}
        type={PanelType.customNear}
        customWidth={"340px"}
      >
        <div className="closeIcon" onClick={dismissPanel}>
          <h1> X </h1>
        </div>

        <Nav groups={navLinkGroups} />
      </Panel>
    </div>
  );
};

export default Menu;
