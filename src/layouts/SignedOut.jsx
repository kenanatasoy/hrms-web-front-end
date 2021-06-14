import React from 'react'
import { Button, Menu } from 'semantic-ui-react'

export default function SignedOut({signIn}) {
    return (
        <div>
            <Menu.Item>
                <Button primary onClick={signIn} >Giriş Yap</Button>
                <Button style={{marginLeft:"10px"}} primary >Kayıt Ol</Button>
            </Menu.Item>
        </div>
    )
}
