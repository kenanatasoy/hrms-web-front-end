import React from 'react'
import { Dropdown, Menu,Image } from 'semantic-ui-react'

export default function SignedIn({signOut}) {
    return (
        <div>
            <Menu.Item>
                <Image avatar spaced="right" src="http://www.sosyalmedya.com/wp-content/uploads/828fffe53a98f0c1514968a7bec47b66.jpg" />
                <Dropdown pointing="top left" text="Kenan">
                <Dropdown.Menu>
                    <Dropdown.Item text= "Bilgilerim" icon="info" />
                    <Dropdown.Item onClick={signOut} text= "Çıkış Yap" icon="sign-out"/>
                </Dropdown.Menu>
                </Dropdown>
            </Menu.Item>
        </div>
    )
}
