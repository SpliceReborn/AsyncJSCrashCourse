async function test() {
    try {
        let res = await fetch('https://reqres.in/api/users/', {
            method: 'POST',
            headers: { 
                'Content-Type': 'application/json' // Tell fetch we are passing JSON
            },
            body: JSON.stringify({ // Convert to JSON string
                name: "User 1"
            })
        })
        return res.json()
    } catch(error) {
        console.log(error)
    } 
}

test().then((data) => {console.log(data)})
