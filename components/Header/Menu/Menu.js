import { Container, Menu, Grid, Icon, Label } from "semantic-ui-react";
import Link from "next/link";

export default function MenuWeb() {
  return (
    <div className="menu">
      <Container>
        <Grid>
          <Grid.Column className="menu__left" width={6}>
            <MenuPlatforms />
          </Grid.Column>
          <Grid.Column className="menu__right" width={10}>
            <MenuOptions />
          </Grid.Column>
        </Grid>
      </Container>
    </div>
  );
}

function MenuPlatforms() {
  return (
    <Menu>
      <Link href="/">
        <Menu.Item as="a">Inicio</Menu.Item>
      </Link>
      <Link href="/games">
        <Menu.Item as="a">Lista de productos</Menu.Item>
      </Link>
      <Link href="/games/newgame">
        <Menu.Item as="a">Agregar producto</Menu.Item>
      </Link>
    </Menu>
  );
}

function MenuOptions() {
  return (
    <Menu>
      <Menu.Item>
        <Icon name="user outline" />
        Mi cuenta
      </Menu.Item>
    </Menu>
  );
}
