const ID_ARTISTA="0fauHpmSHwodVYIjTqOGHz"

export const URI=`https://api.spotify.com/v1/artists/${ID_ARTISTA}/top-tracks?market=US`

const TOKEN="Bearer BQAuJrEo7aRK8J_250VtdgR6k19kk-d7rJ1StufEuXJx8SQgJPuCiCjDNB1tNe00NT035_vNXSpmBRUJFrncZxmaeX8yFk5xBZqaH7d18AQ0Lc2JF9lYiMiFlq6mXHp_Q3uvn-zB3VVzIVIRSkTMe5v05qbU6pd_2dIMak90e4pcDGoOFz6nX6WO91TuRaQOsEc"

export const PETICION={
    method: "GET",
    headers: {
        Authorization:TOKEN

    }
}

