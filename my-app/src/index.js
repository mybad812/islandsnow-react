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
    <Image src='//cdn.shopify.com/s/files/1/1035/5187/files/AH7I2380_180x.jpg?v=1548389088 180w, //cdn.shopify.com/s/files/1/1035/5187/files/AH7I2380_360x.jpg?v=1548389088 360w, //cdn.shopify.com/s/files/1/1035/5187/files/AH7I2380_540x.jpg?v=1548389088 540w, //cdn.shopify.com/s/files/1/1035/5187/files/AH7I2380_720x.jpg?v=1548389088 720w, //cdn.shopify.com/s/files/1/1035/5187/files/AH7I2380_900x.jpg?v=1548389088 900w, //cdn.shopify.com/s/files/1/1035/5187/files/AH7I2380_1080x.jpg?v=1548389088 1080w, //cdn.shopify.com/s/files/1/1035/5187/files/AH7I2380_1296x.jpg?v=1548389088 1296w, //cdn.shopify.com/s/files/1/1035/5187/files/AH7I2380_1512x.jpg?v=1548389088 1512w, //cdn.shopify.com/s/files/1/1035/5187/files/AH7I2380_1728x.jpg?v=1548389088 1728w, //cdn.shopify.com/s/files/1/1035/5187/files/AH7I2380_1944x.jpg?v=1548389088 1944w, //cdn.shopify.com/s/files/1/1035/5187/files/AH7I2380_2160x.jpg?v=1548389088 2160w, //cdn.shopify.com/s/files/1/1035/5187/files/AH7I2380_2376x.jpg?v=1548389088 2376w, //cdn.shopify.com/s/files/1/1035/5187/files/AH7I2380_2592x.jpg?v=1548389088 2592w, //cdn.shopify.com/s/files/1/1035/5187/files/AH7I2380_2808x.jpg?v=1548389088 2808w, //cdn.shopify.com/s/files/1/1035/5187/files/AH7I2380_3024x.jpg?v=1548389088 3024w' />
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