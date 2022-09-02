const ID_ARTISTA="0fauHpmSHwodVYIjTqOGHz"

export const URI=`https://api.spotify.com/v1/artists/${ID_ARTISTA}/top-tracks?market=US`

const TOKEN="Bearer BQAc1T5DFc2G6Y83vOs9TVNIPBV_t6k_ulCUazm5y6t9L1XeQ2A34qrcjxiQAJJkJdxv2WukKZSFUNYKIwB4nEzOk_SDV-SpPec8PwCLxpourQ3BFYZeypZRrWht7hdo8Sv9wh--_YxDbbEs4oUMzyPT6Ub9ETm_OVDZWry08A41sRSy_it3cTKJLYUZwBZSHnY"

export const PETICION={
    method: "GET",
    headers: {
        Authorization:TOKEN

    }
}

