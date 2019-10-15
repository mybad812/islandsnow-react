import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';
import 'semantic-ui-css/semantic.min.css';
import { Container, Header, Menu, Icon, Dropdown, Image} from 'semantic-ui-react';

class TopMenu extends React.Component {
  render() {
    return (
        <Menu borderless className="topmenu">
        <Container>
        <Menu.Item fitted><Icon name="facebook f" /></Menu.Item>
        <Menu.Item fitted><Icon name="twitter" /></Menu.Item>
        <Menu.Item fitted><Icon name="pinterest" /></Menu.Item>
        <Menu.Item fitted><Icon name="instagram" /></Menu.Item>
        <Menu.Item fitted position="right"><Icon name="home" /></Menu.Item>
        <Menu.Item fitted><Icon name="search" /></Menu.Item>
        <Menu.Item fitted><Icon name="user" /></Menu.Item>
        <Dropdown item text="MY CART 0" icon="shop">
        <Dropdown.Menu>
        <Dropdown.Item>My cart is currently empty.</Dropdown.Item>
    </Dropdown.Menu>
    </Dropdown>
    </Container>
    </Menu>
  )
  }
}

class IslandSnowLogo extends React.Component {
  render() {
    return (
        <Image src='//cdn.shopify.com/s/files/1/1035/5187/files/logoshort_800x.png?v=1543956749' size='small' />
  )
  }
}

class MiddleMenu extends React.Component {
  render() {
    return (
        <Menu borderless className="middlemenu">
        <Container centered>
        <Menu.Item> MEN </Menu.Item>
        <Menu.Item> WOMEN </Menu.Item>
        <Menu.Item> KIDS </Menu.Item>
        <Menu.Item> BARANDS </Menu.Item>
        <Menu.Item> SEARCH </Menu.Item>

    </Container>
    </Menu>
  )
  }
}

class FullWidthImage extends React.Component {
  render() {
    return (
    <Header as="h1">FullWidthImage</Header>
  )
  }
}

class FooterMenu extends React.Component {
  render() {
    return (
    <Header as="h1">FooterMenu</Header>
  )
  }
}

class IslandSnow extends React.Component {

  render() {
    return (
        <div>
        <TopMenu/>
        <IslandSnowLogo/>
        <MiddleMenu/>
        <FullWidthImage/>
        <FooterMenu/>
        </div>
  );
  }
}

ReactDOM.render(<IslandSnow/>, document.getElementById('root'));