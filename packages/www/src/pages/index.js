import React from 'react';
import {Container, Button, Heading, Flex} from 'theme-ui';
import netlifyIdentify from 'netlify-identity-widget'


const App = props => {
    React.useEffect(() => {
        netlifyIdentify.init({});
    }, [])

return <Container>
        <Flex sx={{ flexDirection: "column", padding: 3}}>
            <Heading as="h1">Get Stuff Done</Heading>
            <Button sx={{marginTop: 2}} onClick={() => netlifyIdentify.open()}>Log in</Button>
        </Flex>
    </Container>
}


export default App;
