const ID_ARTISTA="0fauHpmSHwodVYIjTqOGHz"

export const URI=`https://api.spotify.com/v1/artists/${ID_ARTISTA}/top-tracks?market=US`

const TOKEN="Bearer BQA4EaJJeywVzbUEgdCg67qP46ahU3j0gJR5C8NRzBgU8fiZpq1ENBSKZiyfRCqjoHMVUVolzQx-hQMjqZ715B9PV6N6f2l9x_AklmoJcu7uI0sj4quHfWDcel0k6CDXWTCI7_VT5juoiuIrg9vclnvFCp1XE6X16Ld3jKQG1FVgGrrihGYcEhFZCqOQwo2vNnk"

export const PETICION={
    method: "GET",
    headers: {
        Authorization:TOKEN

    }
}

